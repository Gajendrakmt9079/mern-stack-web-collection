import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/Apierror.js";

import { asynchandler } from "../utils/asynchandler.js";
import cloudinaryUploader from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessandrefreshtoken = async (userID) => {
  try {
    const user = await User.findById(userID);
    if (!user) {
      throw new ApiError(404, "User not found for token generation");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Token generation failed");
  }
};

const registerUser = asynchandler(async (req, res) => {
  const { fullname, email, password, username } = req.body;

  if ([fullname, email, password, username].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const user = await User.create({
    fullname,
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "User could not be created");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asynchandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username || email)) {
    throw new ApiError(400, "Username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(400, "Invalid username or email");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Incorrect password");
  }

  const { accessToken, refreshToken } = await generateAccessandrefreshtoken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const logOutuser = asynchandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $unset: { refreshToken: 1 } },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };

  return res
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .status(200)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asynchandler(async (req, res) => {
  const incommingrefreshToken =
    req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incommingrefreshToken) {
    throw new ApiError(401, "unauthorized, reqest");
  }

  try {
    const decodetoken = jwt.verify(
      incommingrefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = User.findById(decodetoken?._id);
    if (!user) {
      throw new ApiError(401, "unauthorized, invaild user token");
    }

    if (user.refreshToken !== incommingrefreshToken) {
      throw new ApiError(401, "invaild refresh token or token is used");
    }

    const option = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newrefreshToken } =
      await generateAccessandrefreshtoken(user._id);
    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", newrefreshToken, option)
      .json(
        new ApiResponse(200, { accessToken }, "token generated successfully")
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "invaild token");
  }
});

const changeCurrentpassword = asynchandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user._id);
  const isPasswordValid = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordValid) {
    throw new ApiError(400, "Incorrect password");
  }

  user.password = newPassword;

  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getUserProfile = asynchandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, req.user, "User profile"));
});

const updateprofiledetaiols = asynchandler(async (req, res) => {
  const { fullname, email } = req.body;
  if (!fullname || !email) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $set: { fullname, email } },
    { new: true, runValidators: true }
  ).select("-passowrd -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "User profile updated successfully"));
});








export {
  registerUser,
  loginUser,
  logOutuser,
  refreshAccessToken,
  changeCurrentpassword,
  getUserProfile,
  updateprofiledetaiols,
};

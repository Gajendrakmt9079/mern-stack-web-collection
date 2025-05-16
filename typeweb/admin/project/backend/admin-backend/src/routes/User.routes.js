import { Router } from "express";
import {
  registerUser,
  loginUser,
  logOutuser,
  refreshAccessToken,
  getUserProfile,
  changeCurrentpassword,
  updateprofiledetaiols,
} from "../controller/User.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logOutuser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentpassword);
router.route("/profile").get(verifyJWT, getUserProfile);
router.route("/updateuser").patch(verifyJWT, updateprofiledetaiols);

export default router;

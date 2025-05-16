import { asynchandler } from "../utils/asynchandler.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/Apierror.js";
import Client from "../models/clients.model.js";

const addClient = asynchandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    vehicleNumber,
    vehicleType,
    avgKmPerDay,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !vehicleNumber ||
    !vehicleType ||
    !avgKmPerDay
  ) {
    throw new ApiError(400, "Please fill all the fields");
  }
  const exittsingclient = await Client.findOne({
    $or: [{ vehicleNumber }, { email }],
  });

  if (exittsingclient) {
    throw new ApiError(
      400,
      "Client with this vehicle number or email already exists"
    );
  }

  const allowedTypes = ["car", "SUV", "truck", "van", "motorcycle"];
  if (!allowedTypes.includes(vehicleType)) {
    throw new ApiError(400, "Invalid vehicle type");
  }

  const client = await Client.create({
    name,
    email,
    phone,
    address,
    vehicleNumber,
    vehicleType,
    avgKmPerDay,
  });

  res
    .status(201)
    .json(new ApiResponse(201, client, "Client added successfully"));
});

const getAllClients = asynchandler(async (req, res) => {
  const clients = await Client.find({});
  if (!clients) {
    throw new ApiError(404, "No clients found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, clients, "Clients fetched successfully"));
});

const getClientbyID = asynchandler(async (req, res) => {
  const { id } = req.params;
  const client = await Client.findById(id);
  if (!client) {
    throw new ApiError(404, "Client not found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, client, "Client fetched successfully"));
});

const updateClient = asynchandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, avgKmPerDay } = req.body;

  if (!name || !email || !phone || !address || !avgKmPerDay) {
    throw new ApiError(400, "Please fill all the fields");
  }

  const client = await Client.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
      address,
      avgKmPerDay,
    },
    { new: true }
  );

  if (!client) {
    throw new ApiError(404, "Client not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, client, "Client updated successfully"));
});
const deleteClient = asynchandler(async (req, res) => {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);
    if (!client) {
        throw new ApiError(404, "Client not found");
    }
    res
        .status(200)
        .json(new ApiResponse(200, client, "Client deleted successfully"));
});

export { addClient, getAllClients, getClientbyID , updateClient  , deleteClient};

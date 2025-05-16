import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
    },
    vehicleType: {
      type: String,
      enum: ["car", "SUV", "truck", "van", "motorcycle"],
      required: true,
      default: "car",
    },
    avgKmPerDay: {
      type: Number,
      required: true,
    },
    billPdf: {
      type: String, // store PDF file path or URL here
    },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
export default Client;

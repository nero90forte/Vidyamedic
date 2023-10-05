import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema(
  {
    guid: {
      required: true,
      type: String,
    },
    guid_device: {
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      lowercase: true,
      type: String,
    },
    phone_number: {
      required: true,
      type: String,
    },
    address: {
      default: "",
      type: String,
    },
    role: {
      type: String,
      default: "patient",
    },
    gender: {
      required: true,
      type: String,
    },
    age: {
      required: true,
      type: String,
    },
    img: {
      required: false,
      type: String,
    },
    create_at: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);


const Patient = mongoose.model("patient", PatientSchema);

export default Patient;
const mongoose = require("mongoose");

const MedicalHistory = new mongoose.Schema(
  {
    guid: {
      required: true,
      type: String,
    },
    dateCheck: {
      required: true,
      type: Date
    },
    maker: {
      required: true,
      type: String,
    },
    note: {
      required: true,
      type: String,
    },
    create_at: 
    { 
      type: Date,
       default: Date.now 
    },
  }
  );
  module.exports = mongoose.model("MedicalHistory", MedicalHistory);
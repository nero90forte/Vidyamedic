const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    guid: {
      required: true,
      type: String,
    },
    dateCheck: {
      required: true,
      type: Date
    },
    treatment: {
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
  module.exports = mongoose.model("TreatmentHistory", dataSchema);
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    guid: {
      required: true,
      type: String,
    },
    dateFrom: {
      required: true,
      type: Date
    },
    dateTo: {
        required: true,
        type: Date
      },
    create_at: 
    { 
      type: Date,
       default: Date.now 
    },
  }
  );
  module.exports = mongoose.model("Recommendation", dataSchema);
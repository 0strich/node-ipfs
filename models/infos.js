const mongoose = require("mongoose");

const { Schema } = mongoose;

const infoSchema = Schema(
  {
    name: { type: String, default: null },
    email: { type: String, default: null },
    smti: { type: String, default: null },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("iofos", infoSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {},
  {
    timestamps: true,
  }
);

module.exports = userSchema;

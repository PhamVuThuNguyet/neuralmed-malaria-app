const mongoose = require("mongoose");
const userSchema = require("./User.schema");

module.exports = {
  User: mongoose.model("User", userSchema),
};

const mongoose = require("mongoose");
const userSchema = require("./User.schema");
const patientSchema = require("./Patient.schema");
const medicalSchema = require('./Medical.schema');

module.exports = {
  User: mongoose.model("User", userSchema),
  Patient: mongoose.model("Patient", patientSchema),
  Medical: mongoose.model("Medical", medicalSchema)
};

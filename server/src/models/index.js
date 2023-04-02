const mongoose = require("mongoose");
const userSchema = require("./User.schema");
const patientSchema = require("./Patient.schema");
const healthRecordSchema = require('./HealthRecord.schema');

module.exports = {
  User: mongoose.model("User", userSchema),
  Patient: mongoose.model("Patient", patientSchema),
  HealthRecord: mongoose.model("HealthRecord", healthRecordSchema)
};

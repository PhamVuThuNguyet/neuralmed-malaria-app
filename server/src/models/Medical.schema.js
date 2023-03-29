const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicalSchema = new Schema(
  {
    patient: { type: Schema.Types.ObjectId, ref: 'Patient', require: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    info: { type: Schema.Types.Mixed },
    treatment: { type: Schema.Types.Mixed }
  },
  {
    timestamps: true,
  }
);

module.exports = medicalSchema;

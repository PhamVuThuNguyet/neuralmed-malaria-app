require("dotenv").config();
const mongoose = require("mongoose");

const DB_CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@alpha.h0q6rdf.mongodb.net/malaria?retryWrites=true&w=majority`;

const connectDB = () => {
  console.log(DB_CONNECTION_URL);
  return mongoose.connect(DB_CONNECTION_URL);
};

module.exports = connectDB;

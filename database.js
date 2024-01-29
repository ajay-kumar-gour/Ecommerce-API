const mongoose = require("mongoose");
require("dotenv").config();

const Mongo_LOCAL_URL = process.env.Mongo_LOCAL_URL;

mongoose.connect(Mongo_LOCAL_URL);

mongoose.connection.on("connected", () => {
  console.log("connceetd to MONGODB..");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoBD Connection error", err);
});

module.exports = mongoose;

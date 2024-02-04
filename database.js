const mongoose = require("mongoose");
require("dotenv").config();

const Mongo_LOCAL_URL = process.env.Mongo_LOCAL_URL;
const Mongo_CLOUD_URL = process.env.Mongo_CLOUD_URL;
const dbName = "NODEBAY";
mongoose.connect(Mongo_CLOUD_URL, {dbName:dbName});

mongoose.connection.on("connected", () => {
  console.log("connceetd to MONGODB..");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoBD Connection error", err);
});

module.exports = mongoose;

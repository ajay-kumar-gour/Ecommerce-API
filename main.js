const express = require("express");
require("dotenv").config();
const dbConnection = require("./database");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000; // do not put semicolon on the env file

const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
app.use(express.json());


app.use("/users", userRoutes);
app.use("/products", productRoutes);


//a middleware used without any path , it means it will catch all routes for undefined routes.
app.use((req, res) => {
  res.status(401).send("Page NOT Found !!");
});

// Server listen on
app.listen(PORT, () => {
  console.log(`Server is up and is listening on PORT ${PORT}`);
});

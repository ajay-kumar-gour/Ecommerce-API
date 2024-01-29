const express = require("express");
require("dotenv").config();

const dbConnection = require("./database");
const Product = require("./Model/Product");
// console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT || 8000; // do not put semicolon on the env file
app.use(express.json());
console.log(PORT);

// CREATE (POST) Data
app.post("/product", async (req, res) => {
  try {
    const data = req.body;
    const newProduct = new Product(data);
    const savedProduct = await newProduct.save();
    res.status(201).send(savedProduct);
  } catch (err) {
    console.log(error);
    res.status(501).send({ message: "Internal Server Error" });
  }
});
app.get("/main", (req, res) => {
  res.status(200).send("<h1>Main Application</h1>");
});

app.get("/", (req, res) => {
  res.status(200).send("HOME PAGE");
});
//a middleware used without any path , it means it will catch all routes for undefined routes.
app.use((req, res) => {
  res.status(401).send("Page NOT Found !!");
});
app.listen(PORT, () => {
  console.log(`Server is up and is listening on PORT ${PORT}`);
});

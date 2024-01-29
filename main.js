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
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Internal Server Error" });
  }
});

// READ All (GET) Data

app.get("/product", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).send(allProducts);
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Internal Server Error" });
  }
});

// READ a data by a parameter example: id, name etc

app.get("/product/:name", async (req, res) => {
  try {
    const name = req.params.name;
    console.log(name);
    const data = await Product.find({
      name: { $regex: new RegExp(name, "i") },
    });
    if (!data) {
      return res.status(400).send({ error: "Product Not found" });
    }
    if (data.length == 0) {
      return res.status(400).send({ error: "Product Not found" });
    }
    res.status(200).json(data);
  } catch (error) {
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

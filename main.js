const express = require("express");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();
const dbConnection = require("./database");
const Product = require("./Model/Product");
const User = require("./Model/User");
const mongoose = require("mongoose");
// console.log(process.env.PORT);
const app = express();
const PORT = process.env.PORT || 8000; // do not put semicolon on the env file

const userRoutes = require("./Routes/userRoutes");
app.use(express.json());
console.log(PORT);

app.use("/users", userRoutes);
// CREATE User

// app.post("/register/user", async (req, res) => {
//   try {
//     const user = req.body;
//     const { Firstname, Lastname, username, email, password } = req.body;
//     console.log(user);
//     const salt = 10;
//     const hashedPWD = await bcrypt.hash(password, salt);
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(409).send({ message: "User already exists" });
//     }

//     const newUser = new User({
//       Firstname,
//       Lastname,
//       username,
//       email,
//       password: hashedPWD,
//     });
//     const createdUser = await newUser.save();
//     res
//       .status(201)
//       .send({ message: "User registered successfuly", createdUser });
//   } catch (error) {
//     console.log(error);
//     res.send(500).status({ message: "Internal Server Error" });
//   }
// });

// GET all Users

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     if (users.length < 0) {
//       return res.status(404).send({ message: "No Users Found" });
//     }
//     res
//       .status(200)
//       .send({ message: "success", TotalUsers: users.length, users });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// LOGIN User

// app.post("/login/user", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).send({ message: "Invalid email or password" });
//     }

//     const pwdMatch = await bcrypt.compare(password, user.password);
//     if (!pwdMatch) {
//       return res.status(401).send({ message: "Invalid email or password" });
//     }
//     const token = jsonwebtoken.sign({}, SECRET);

//     res.status(200).send({ message: "Login Successfully", token, user });
//   } catch (erorr) {
//     console.log(erorr);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// CREATE (POST) Data
app.post("/product", async (req, res) => {
  try {
    const data = req.body;

    if (Array.isArray(data)) {
      const savedProduct = await Product.insertMany(data);
      res.status(201).send(savedProduct);
    } else {
      const newProduct = new Product(data);
      const savedProduct = await newProduct.save();
      res.status(201).send(savedProduct);
    }
    console.log(data);
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

app.get("/product/name/:name", async (req, res) => {
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

// GET Product by product ID

app.get("/product/id/:id", async (req, res) => {
  try {
    const productID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productID)) {
      return res.status(400).send({ message: "Product ID Invalid" });
    }
    const fetechedProduct = await Product.findById(productID);
    console.log(fetechedProduct);

    if (!fetechedProduct) {
      return res.status(404).send({ message: "Product Not Found" });
    }

    res
      .status(200)
      .send({ message: "Product Found with given ID", fetechedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// Update product by id

app.put("/product/id/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const updatedData = req.body;
    console.log(updatedData);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).send({ message: "Product ID is not valid" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!updatedProduct) {
      res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ message: "Product Updated", updatedProduct });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
});
//  DELETE Product By id

app.delete("/product/id/:id", async (req, res) => {
  try {
    const productID = req.params.id;
    console.log(productID);
    if (!mongoose.Types.ObjectId.isValid(productID)) {
      return res.status(400).send({ message: "Prouduct ID is Invalid" });
    }

    const deletedProduct = await Product.findByIdAndDelete(productID);
    if (!deletedProduct) {
      res.status(404).send({ message: "Product Not found" });
    }

    res
      .status(200)
      .send({ message: "Product Deleeted Succesfully", deletedProduct });
  } catch (error) {
    console.log(error);
    res.status(501).send({ message: "Internal Server Error" });
  }
});

// TEST Endpoints
app.get("/main", (req, res) => {
  res.status(200).send("<h1>Main Application</h1>");
});
// TEST Endpoints
app.get("/", (req, res) => {
  res.status(200).send("HOME PAGE");
});

//a middleware used without any path , it means it will catch all routes for undefined routes.
app.use((req, res) => {
  res.status(401).send("Page NOT Found !!");
});

// Server listen on
app.listen(PORT, () => {
  console.log(`Server is up and is listening on PORT ${PORT}`);
});

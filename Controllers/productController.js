const Product = require("../Model/Product");
const mongoose = require("mongoose");
const productController = {
  createProduct: async (req, res) => {
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
  },
  getAllProducts: async (req, res) => {
    try {
      const allProducts = await Product.find();
      res.status(200).send(allProducts);
    } catch (error) {
      console.log(error);
      res.status(501).send({ message: "Internal Server Error" });
    }
  },
  getProductByID: async (req, res) => {
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
  },
  getProductByName: async (req, res) => {
    try {
      const name = req.params.name;
      console.log(name);
      const data = await Product.find({
        name: { $regex: new RegExp(name, "i") },
      });
      if (!data) {
        return res.status(400).send({ message: "Product Not found" });
      }
      if (data.length == 0) {
        return res.status(400).send({ message: "Product Not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(501).send({ message: "Internal Server Error" });
    }
  },
  updateProductByID: async (req, res) => {
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
        return res.status(404).send({ message: "Product not found" });
      }

      res.status(200).send({ message: "Product Updated", updatedProduct });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  },
  deleteProductByID: async (req, res) => {
    try {
      const productID = req.params.id;
      console.log(productID);
      if (!mongoose.Types.ObjectId.isValid(productID)) {
        return res.status(400).send({ message: "Prouduct ID is Invalid" });
      }

      const deletedProduct = await Product.findByIdAndDelete(productID);
      if (!deletedProduct) {
        return res.status(404).send({ message: "Product Not found" });
      }

      res
        .status(200)
        .send({ message: "Product Deleeted Succesfully", deletedProduct });
    } catch (error) {
      console.log(error);
      res.status(501).send({ message: "Internal Server Error" });
    }
  },
};

module.exports = productController;

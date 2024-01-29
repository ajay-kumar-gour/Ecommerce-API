const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: string,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    requried: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

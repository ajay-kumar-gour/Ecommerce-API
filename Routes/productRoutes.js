const express = require("express");
const productController = require("../Controllers/productController");

const routes = express.Router();

routes.post("/", productController.createProduct);
routes.get("/", productController.getAllProducts);
routes.get("/id/:id", productController.getProductByID);
routes.get("/name/:name", productController.getProductByName);

routes.put("/id/:id", productController.updateProductByID);

routes.delete("/id/:id", productController.deleteProductByID);

module.exports = routes;

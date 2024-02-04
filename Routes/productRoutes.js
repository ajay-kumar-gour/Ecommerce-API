const express = require("express");
const productController = require("../Controllers/productController");
const authenticateToken = require("../Middleware/authMiddleware");

const routes = express.Router();

routes.post("/", authenticateToken,productController.createProduct);
routes.get("/", productController.getAllProducts);
routes.get("/id/:id", productController.getProductByID);
routes.get("/name/:name", productController.getProductByName);

routes.put("/id/:id",authenticateToken, productController.updateProductByID);

routes.delete("/id/:id",authenticateToken, productController.deleteProductByID);

module.exports = routes;

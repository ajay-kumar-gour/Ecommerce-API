const express = require("express");
const routes = express.Router();
const defaultController = require("../Controllers/defaultController");
routes.get("/", defaultController);

module.exports = routes;

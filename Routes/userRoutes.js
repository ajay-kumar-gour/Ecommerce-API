const express = require("express");

const router = express.Router();
const authenticateToken = require("../Middleware/authMiddleware");

const userController = require("../Controllers/userController");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/", authenticateToken, userController.getAllUsers);

module.exports = router;

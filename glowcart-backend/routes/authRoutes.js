const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// Register with email + password (no OTP)
router.post("/register", register);

// Login with email + password
router.post("/login", login);

module.exports = router;

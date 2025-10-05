const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const adminExists = await User.findOne({ email: "admin@bellablush.com" });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await User.create({ name: "Admin User", email: "admin@bellablush.com", password: hashedPassword, role: "admin" });
    console.log("✅ Admin user created");
  } else console.log("ℹ️ Admin already exists");
  mongoose.disconnect();
});
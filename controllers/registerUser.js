const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { exists } = require("../models/jobModels");
const User = require("../models/userModels");

// @desc Register new User
// @ route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { role, name, email, password } = req.body;
  if ((!role, !name, !email, !password)) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  //   Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    role,
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      role: user.role,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// @desc Login User
// @ route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Login" });
});

// @desc Get User data
// @ route GET /api/users/me
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User data displayed" });
});

module.exports = { registerUser, loginUser, getMe };
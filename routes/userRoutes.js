const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  updateMe
} = require("../controllers/registerUser");
const { auth } = require("../middleware/auth");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", auth, getMe);
router.put("/me/update", auth, updateMe);

module.exports = router;

const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    role: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
      required: ["true", "Please add a name"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Enter a valid email");
        }
      },
    },
    password: {
      type: String,
      required: [true, "Please type a password"],
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

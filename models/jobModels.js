const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    companyImage: String,
    companyName: {
      type: String,
      trim: true,
      required: [true, "Please add the recruiting company"],
    },
    jobTitle: {
      type: String,
      trim: true,
      required: [true, "Job title cannot be empty"],
    },
    location: {
      type: String,
      trim: true,
      default: "Remote",
    },
    salary: {
      type: String,
      trim: true,
      required: [true, "Please add a salary range"],
    },
    desc: {
      type: String,
      trim: true,
      required: [true, "Job description cannot be empty"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);

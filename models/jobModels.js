const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    type: {
      type: String,
      required: [true, "Enter job type please"]
    },
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

const asyncHandler = require("express-async-handler");

// @desc Get all jobs
// @ route GET /api/jobs
const getJobs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get jobs" });
});

// @desc Set a job
// @ route POST /api/jobs
const setJobs = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Missing Title");
  }
  res.status(200).json({ message: "Set Job" });
});

// @desc Update a job
// @ route PUT /api/jobs/:id
const updateJobs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete jobs ${req.param.id}` });
});

// @desc Delete a job
// @ route DELETE /api/jobs/:id
const deleteJobs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete jobs ${req.param.id}` });
});

module.exports = {
  getJobs,
  setJobs,
  updateJobs,
  deleteJobs,
};

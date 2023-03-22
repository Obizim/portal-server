// @desc Get all jobs
// @ route GET /api/jobs
const getJobs = (req, res) => {
  res.status(200).json({ message: "Get jobs" });
};

// @desc Set a job
// @ route POST /api/jobs
const setJobs = (req, res) => {
  res.status(200).json({ message: "Set Job" });
};

// @desc Update a job
// @ route PUT /api/jobs/:id
const updateJobs = (req, res) => {
  res.status(200).json({ message: `Delete jobs ${req.param.id}` });
};

// @desc Delete a job
// @ route DELETE /api/jobs/:id
const deleteJobs = (req, res) => {
  res.status(200).json({ message: `Delete jobs ${req.param.id}` });
};

module.exports = {
  getJobs,
  setJobs,
  updateJobs,
  deleteJobs,
};

const asyncHandler = require("express-async-handler");
const Job = require("../models/jobModels");

// @desc Get all jobs
// @ route GET /api/jobs
const getJobs = asyncHandler(async (req, res) => {
  const {title, location} = req.query
  if(title || location) {
    const jobs = await Job.find({
      $or: [
        { jobTitle: { $regex: title, $options: 'i' } },
        { location: { $regex: location, $options: 'i' } },
      ],
    });
    
    res.status(200).json(jobs);
  }else {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  }
});

// @desc Get one job post
// @ route GET /api/jobs/:id
const getOne = asyncHandler(async (req, res) => { 
  const _id = req.params.id;
  const job = await Job.find({_id});
  if(!_id) {
    res.status(404);
    throw new Error("Job not found");
  }
  res.status(200).json(job)
 })


// @desc Get all recruiter jobs
// @ route GET /api/jobs/recruiter
const getRecruiterJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({user: req.user.id});
  res.status(200).json(jobs);
});

// @desc Set a job
// @ route POST /api/jobs
const setJobs = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Something is missing");
  }
  const job = await Job.create({
    companyName: req.body.companyName,
    jobTitle: req.body.jobTitle,
    location: req.body.location,
    salary: req.body.salary,
    type: req.body.type,
    desc: req.body.desc,
    user: req.user.id
  });
  res.status(201).json(job);
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
  getOne,
  getRecruiterJobs,
  setJobs,
  updateJobs,
  deleteJobs,
};

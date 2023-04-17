const express = require("express");
const router = express.Router();
const {
  getJobs,
  getOne,
  getRecruiterJobs,
  setJobs,
  updateJobs,
  deleteJobs,
} = require("../controllers/jobsController");

const { auth } = require("../middleware/auth")

router.route("/").get(getJobs).post(auth, setJobs);
router.route('/recruiter').get(auth, getRecruiterJobs)
router.route("/:id").get(getOne).put(updateJobs).delete(deleteJobs);

module.exports = router;

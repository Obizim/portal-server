const express = require("express");
const router = express.Router();
const {
  getJobs,
  getRecruiterJobs,
  setJobs,
  updateJobs,
  deleteJobs,
} = require("../controllers/jobsController");

const { auth } = require("../middleware/auth")

router.route("/").get(getJobs).post(auth, setJobs);
router.route('/recruiter').get(auth, getRecruiterJobs)
router.route("/:id").put(updateJobs).delete(deleteJobs);

module.exports = router;

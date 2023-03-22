const express = require("express");
const {
  getJobs,
  setJobs,
  updateJobs,
  deleteJobs,
} = require("../controllers/jobsController");
const router = express.Router();

router.route("/").get(getJobs).post(setJobs);
router.route("/:id").put(updateJobs).delete(deleteJobs);

module.exports = router;

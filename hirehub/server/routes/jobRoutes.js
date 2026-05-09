const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getSingleJob,
  createJob,
  deleteJob,
} = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getAllJobs);
router.get("/:id", getSingleJob);
router.post("/", protect, createJob);
router.delete("/:id", protect, deleteJob);

module.exports = router;

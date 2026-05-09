const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSingleJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate("postedBy", "name email");
    if (!job) {
      res.status(404).json({ message: "Jobs Not Found" });
    } else {
      res.status(200).json({ job });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createJob = async (req, res) => {
  try {
    if (req.user.role !== "poster") {
      return res
        .status(403)
        .json({ message: "Only job posters can create listings!" });
    } else {
      const { title, company, location, salary, description, type, skills } =
        req.body;
      const jobcreated = await Job.create({
        title,
        company,
        location,
        salary,
        description,
        type,
        skills,
        postedBy: req.user._id,
      });
      res.status(201).json({ message: "Job created! ✅", job: jobcreated });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      res.status(404).json({ message: "Jobs Not Found" });
    } else {
      if (job.postedBy.toString() !== req.user._id.toString()) {
        return res
          .status(403)
          .json({ message: "Not authorized to delete this job!" });
      } else {
        const deletejobs = await Job.findByIdAndDelete(id);
        res.status(200).json({ message: "Job deleted! ✅", job: deletejobs });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllJobs, getSingleJob, createJob, deleteJob };

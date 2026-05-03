const express = require("express");
const mongoose = require("mongoose");
const Project = require("./models/Project");

const app = express();
app.use(express.json());

const PORT = 5000;
const MONGO_URI = "mongodb://localhost:27017/myapp";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected!"))
  .catch((err) => console.log("❌ Connection failed:", err.message));

// GET all projects from database
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find(); // get ALL projects from DB
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// POST — save a new project to database
app.post("/api/projects", async (req, res) => {
  try {
    const { name, tech, description } = req.body;

    if (!name || !tech) {
      return res.status(400).json({ message: "Name and tech are required!" });
    }

    // Create new project in database
    const newProject = await Project.create({ name, tech, description });

    res.status(201).json({
      message: "Project saved to database! ✅",
      project: newProject,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// DELETE — delete a project by ID
app.delete("/api/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted! ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

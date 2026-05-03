const mongoose = require("mongoose");

// Define the structure of a Project
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // must have a name
  },
  tech: {
    type: String,
    required: true, // must have tech
  },
  description: {
    type: String,
    default: "No description provided",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema
const Project = mongoose.model("Project", projectSchema);

// Export it so server.js can use it
module.exports = Project;

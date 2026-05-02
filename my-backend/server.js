const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to my API! 🚀");
});

app.get("/about", (req, res) => {
  res.json({ name: "Umer", role: "MERN Developer", city: "Lahore" });
});

app.get("/api/skills", (req, res) => {
  res.json({ skills: ["React", "Node.js", "Express", "MongoDB"] });
});

app.get("/api/projects", (req, res) => {
  res.json({ projects: ["My Portfolio"] });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

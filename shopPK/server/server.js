const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Server is working" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

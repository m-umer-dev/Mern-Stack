import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(203).send("Welcome to Mern Stack Backend");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to DataBase");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

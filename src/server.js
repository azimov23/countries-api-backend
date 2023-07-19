import express from "express";
import dotenv from "dotenv";
import mongoConnect from "./config/mongoConnect.js";

dotenv.config();
mongoConnect();

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server listening on port " + PORT);
});

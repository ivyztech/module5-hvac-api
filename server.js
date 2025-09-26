import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import readingsRouter from "./routes/readings.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB Error:", err));

app.use("/api/v1/readings", readingsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));

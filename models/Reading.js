import mongoose from "mongoose";

const readingSchema = new mongoose.Schema({
  sensorId: String,
  location: String,
  temperature: Number,
  humidity: Number,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Reading", readingSchema);

import express from "express";
import Reading from "../models/Reading.js";

const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const reading = new Reading(req.body);
    await reading.save();
    res.json({ ok: true, data: reading });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  const readings = await Reading.find().sort({ timestamp: -1 });
  res.json({ ok: true, data: readings });
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await Reading.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ ok: true, data: updated });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Reading.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

export default router;

import express from "express";
import Unit from "../models/Unit.js";

const router = express.Router();

// ✅ GET ALL UNITS
router.get("/", async (req, res) => {
  try {
    const units = await Unit.find();
    res.json(units);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
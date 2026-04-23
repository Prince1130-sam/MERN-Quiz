import express from "express";
import Topic from "../models/Topic.js";
import mongoose from "mongoose"

const router = express.Router();

// ✅ GET TOPICS BY UNIT ID
router.get("/:unitId", async (req, res) => {
  try {
    const topics = await Topic.find({
      unitId: new mongoose.Types.ObjectId(req.params.unitId)
    });

    res.json(topics);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
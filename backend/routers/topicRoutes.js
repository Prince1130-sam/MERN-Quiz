import express from "express";
import Topic from "../models/Topic.js";

const router = express.Router();

// ✅ GET TOPICS BY UNIT ID
router.get("/:unitId", async (req, res) => {
  try {
    const topics = await Topic.find({
      unitId: req.params.unitId,
    });

    res.json(topics);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
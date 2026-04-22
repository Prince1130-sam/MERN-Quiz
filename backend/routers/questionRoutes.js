import express from "express";
import Question from "../models/Question.js";

const router = express.Router();

// ✅ GET QUESTIONS BY TOPIC
router.get("/:topicId", async (req, res) => {
  try {
    const questions = await Question.find({
      topicId: req.params.topicId,
    });

    res.json(questions);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
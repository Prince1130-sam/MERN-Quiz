import express from "express";
import Unit from "../models/Unit.js";
import Topic from "../models/Topic.js";
import Question from "../models/Question.js";

const router = express.Router();

// ✅ ADD UNIT
router.post("/add-unit", async (req, res) => {
  try {
    const { unitName } = req.body;

    const unit = await Unit.create({ unitName });

    res.json(unit);
  } catch (error) {
    console.log("ADD UNIT ERROR:", error);
    res.status(500).json({ msg: "Error adding unit" });
  }
});

// ✅ ADD TOPIC
router.post("/add-topic", async (req, res) => {
  try {
    const { topicName, unitId } = req.body;

    const topic = await Topic.create({
      topicName,
      unitId,
    });

    res.json(topic);
  } catch (error) {
    console.log("ADD TOPIC ERROR:", error);
    res.status(500).json({ msg: "Error adding topic" });
  }
});

// ✅ ADD QUESTION
router.post("/add-question", async (req, res) => {
  try {
    const { question, options, correctAnswer, unitId, topicId } = req.body;

    const newQuestion = await Question.create({
      question,
      options,
      correctAnswer,
      unitId,
      topicId,
    });

    res.json(newQuestion);
  } catch (error) {
    console.log("ADD QUESTION ERROR:", error);
    res.status(500).json({ msg: "Error adding question" });
  }
});

export default router;
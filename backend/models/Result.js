import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  score: Number,
  total: Number,

  answers: {
    type: Object, // { questionId: "A" }
  },

  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
  },

}, { timestamps: true });

export default mongoose.model("Result", resultSchema);
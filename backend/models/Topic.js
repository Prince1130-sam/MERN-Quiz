import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  topicName: {
    type: String,
    required: true,
  },

  unitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Unit",
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Topic", topicSchema);
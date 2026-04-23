import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routers/authRoutes.js";
import protectedRoutes from "./routers/protectedRoutes.js";
import unitRoutes from "./routers/unitRoutes.js";
import topicRoutes from "./routers/topicRoutes.js";
import questionRoutes from "./routers/questionRoutes.js";
import adminRoutes from "./routers/adminRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: "*",
  }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/units", unitRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import reviewRoute from "./routes/reviewRoutes.js";
import contactRoutes from './routes/contactRoute.js';

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());

// API routes - base paths sahi likho:
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/contact", contactRoutes);

// Serve static frontend (Vite build) - add ye lines:
const __dirname = path.resolve(); // since ES module, use path.resolve()

app.use(express.static(path.join(__dirname, "front/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front", "dist", "index.html"));
});

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

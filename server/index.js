import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 6003; // Force to 6003, ignore process.env.PORT

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // allow requests from React dev server
  credentials: true
}));

// MongoDB connection
const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB with URI:", process.env.MONGODB_URI.replace(/:[^@]+@/, ":*****@"));
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log("✅ MongoDB Atlas Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

// Routes
app.get("/", (req, res) => {
  res.send("✅ Backend Server is Running!");
});

// Add this route for banner API
app.get("/api/banner", (req, res) => {
  res.json({ banner: "Banner data from backend" });
});

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

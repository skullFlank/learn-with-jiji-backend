import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Create Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Health check (optional but useful)
app.get("/", (req, res) => {
  res.send("Learn with Jiji backend is running");
});

// Main API endpoint
app.post("/ask-jiji", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const { data: resources, error } = await supabase
    .from("resources")
    .select("*");

  if (error) {
    return res.status(500).json({ error: "Failed to fetch resources" });
  }

  res.json({
    answer: `Here is a simple explanation for: ${question}`,
    resources
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

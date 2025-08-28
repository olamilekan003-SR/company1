import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Mongoose Model ---
const orderSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    productType: { type: String, required: true },
    quantity: { type: Number, required: true },
    address: { type: String, required: true },
    details: { type: String },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

// --- Routes ---
app.post("/api/orders", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Grind & Gate Tech API is running...");
});

// --- Connect MongoDB + Start Server ---
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    console.log("✅ MongoDB connected");
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

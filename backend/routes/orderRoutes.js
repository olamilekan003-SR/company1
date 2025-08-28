// routes/orderRoutes.js
import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST: Create new order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: Fetch all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

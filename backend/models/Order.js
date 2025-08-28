// backend/models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email:    { type: String, required: true },
  productType: { type: String, required: true },
  quantity: { type: Number, required: true },
  address:  { type: String, required: true },
  details:  { type: String, default: "" },
  createdAt:{ type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);

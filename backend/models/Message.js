import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  userId: String,
  role: String, 
  content: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Message", messageSchema);

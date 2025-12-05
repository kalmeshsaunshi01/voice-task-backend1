import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    priority: { type: String, enum: ["Low", "Medium", "High"], default: "Medium" },
    status: { type: String, enum: ["To Do", "In Progress", "Done"], default: "To Do" },
    dueDate: { type: Date, default: null }
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);

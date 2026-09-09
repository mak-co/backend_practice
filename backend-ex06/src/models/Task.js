import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "in-progress", "completed"],
      },
      default: "pending",
    },
    priority: {
      type: String,
      enum: {
        values: ["low", "medium", "high"],
      },
      default: "medium",
    },
    category: {
      type: String,
      trim: true,
      lowercase: true,
      default: "general",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      //The user field contains the _id of a document from the User model.
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
  },
);



const Task=mongoose.model("Task",taskSchema)

export default Task
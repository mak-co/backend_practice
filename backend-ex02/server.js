import express from "express";
import "dotenv/config";
import connectDB from "./db/db.js";
import Task from "./models/Task.js";

const app = express();

app.use(express.json());

connectDB();

//get api
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json(tasks);
});

//post api
app.post("/create-tasks", async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    completed: req.body.completed,
  });

  res.status(201).json(task);
});

//get by id
app.get("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);
    return res.status(200).json(task);
  } catch (err) {
    return res.status(400).json({
      message: `${err}`,
    });
  }
});

// update task
app.patch("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const change = req.body;

    //castign will definitely be checked just validator will run here
    const updatedtask = await Task.findByIdAndUpdate(taskId, change, {
      new: true,
      runValidators: false,
    });

    if (Object.keys(change).length === 0) {
      return res.status(400).json({ message: "type something" });
    }

    if (!updatedtask) {
      return res.status(404).json({ message: "task not found" });
    }

    res.status(200).json(updatedtask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
app.delete("/tasks/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res
      .status(200)
      .json({ message: "Deleted Successfully", task: deletedTask });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// creating port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server for ex-02 is runninng on port ${port}`);
});

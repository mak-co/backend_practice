// The client sends an HTTP request to a server listening on port
// 3000.Node.js receives the network connection, Express examines
// the HTTP request, finds a matching route, executes its
// handler, and sends an HTTP response back through that
// connection to the client

// importing express or nodejs framework
import express from "express";

// creating an app
const app = express();

//using middleware for json parsing
//parsing is Taking data written in some format and
//interpreting it so the program can work with it.
app.use(express.json());

//store data below in tasks instead of using mongoDB database
let tasks = [
  {
    id: 1, //in mongoDB, id is created by mongoDB itself as objectId and then we store it in _id
    title: "Learn nextJS",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Typescript",
    completed: false,
  },
];

//creating  an HTTP route/endpoint
app.get("/", (req, res) => {
  res.send("hello");
});

// get tasks
app.get("/tasks", (req, res) => {
  res.send(tasks);
});

// get tasks from id
app.get("/tasks/:id", (req, res) => {
  //access the parameter value via req.params
  const tasksId = req.params.id;
  //checking if the response id in the route exist in the database(tasks)
  const response = tasks.find((task) => task.id === Number(tasksId));
  if (response) {
    res.status(200).send(response);
  } else {
    //404 → requested resource doesn't exist
    return res.status(404).json({ message: "task not found" });
  }
});

//2) post tasks
app.post("/create-tasks", (req, res) => {
  // destructuring the req data for easy use (if you want the individual values)
  const { id, title, completed } = req.body;

  const newTask = { ...req.body, id: tasks.length + 1 };

  // validation
  if (
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({ message: "Invalid task data" });
  }

  tasks.push(newTask);
  res.status(201).json({
    status: "success",
    received: newTask,
  });

  console.log(id); //The server owns the creation of the resource's identity.
  //MongoDB will eventually generate an _id for you. Here, because we're
  // using an array, we need to implement that ourselves.
  console.log(title);
  console.log(completed);

  console.log(tasks);
});

// 3) PATCH
app.patch("/tasks/:id", (req, res) => {

  
  //validating the incoming data from the request 
  const {title,completed}=req.body 
  const change = {}
 
if (title !== undefined) {
  if (typeof title !== "string") {
    return res.status(400).json({
      message: "title must be a string",
    });
  }

  change.title = title;
}

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({
        message: "completed must be true/false",
      });
    }

    change.completed = completed;
  }

  //checking if change is empty or not (validating)
  if (Object.keys(change).length === 0) {
    return res.status(400).json({
      message: "At least one field is required",
    });
  }

  console.log(change);
  const taskId = req.params.id;
  console.log(taskId);

  const task = tasks.find((task) => task.id === Number(taskId));

  if (!task) {
   return res.status(404).json({
      message: "Not found",
    });
  }

  Object.assign(task,change)

  res.status(200).json({
    message: "Successfully Updated the tasks",
    task:task
  });

  console.log(tasks)
});


// delete

app.delete("/tasks/:id",(req,res)=>{
  const taskId =req.params.id
  const taskExists = tasks.some(task =>task.id ===Number(taskId))

  if(taskExists){
   tasks =  tasks.filter(task=>task.id!==Number(taskId))
    res.status(200).json({
      message:`Deleted the task`,
      tasks:tasks
    })
  }else{
    return res.status(404).json({
      message: "Item not found"
    })
  }
})


// creating port
const port = process.env.PORT || 3000;

// making app listen port
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

// The client sends an HTTP request to a server listening on port
// 3000.Node.js receives the network connection, Express examines
// the HTTP request, finds a matching route, executes its
// handler, and sends an HTTP response back through that
// connection to the client


// importing express or nodejs framework
import express from "express";

// creating an app 
const app = express();


//store our tasks instead of mongoDB
const tasks = [{
  id: 1, //in mongoDB, id is created by mongoDB itself as objectId and then we store it in _id
  title: "Learn nextJS",
  completed: false,
},
{
  id:2,
  title:"Learn Typescript",
  completed: false
}]



//creating  an HTTP route/endpoint 



// get tasks 
app.get("/tasks:id", (req, res) => {
  //access the parameter value via req.params
  const tasksId = req.params.id;
  res.send(tasks.find(tasks=>tasks.id===tasksId))
});




// create tasks



// creating port 
const port = process.env.PORT || 3000;



// making app listen port
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

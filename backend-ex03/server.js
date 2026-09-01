import express from "express"
import 'dotenv/config'
import connectDB from "./db/db.js"
import Task from "./models/Task.js"

const app = express()

app.use(express.json())

connectDB()

app.post("/create-task",async(req,res)=>{
  console.log(req.body)
  try{
    const  task = await Task.create({
      title : req.body.title,
      description : req.body.description,
      status: req.body.status,
      priority:req.body.priority,
      category: req.body.category

    })

     res.status(201).json({
       message: "post created Successfully",
       task: task,
     });
  }catch(err){
    res.status(500).json({
      message:err.message,
    })
  }

 
})



// req.query or "?" in url

app.get("/tasks",async (req,res)=>{
    
  try{
      const query = {};
   

    if (req.query.search) {
      query.$or = [
        {
          title: {
            $regex: req.query.search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: req.query.search,
            $options: "i",
          },
        },
      ];
    }
    

      const tasks = await Task.find(query)

      res.status(200).send({
        tasks:tasks,
        message: "all good",
      });

  }catch(err){
    res.status(500).json({
        message:"Something went wrong",
        error:err.message
    })
  }
})








const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})
import Task from "../models/Task.js"


// creatig task 
export const createTask =async(req,res)=>{
    const {title,description,status,priority}=req.body

    const task = await Task.create(
        {
          ...req.body,
          user:req.user._id
        }
    )

    res.status(201).json({
        success:true,
        message:"Task created successfully"
    }
    )
}


// get task 

export const getTask =async(req,res)=>{
    const task = await Task.find({
        user:req.user._id
    })
 res.status(200).json({
    success:true,
    task:task
 })
}


// get task by id
export const getById = async(req,res)=>{

    const task = await Task.findOne({
      _id: req.params.id, // from url
      user: req.user._id, // user is sent by authenticate
      // Find the task whose ID is TASK123 AND whose owner is USER456.
    });

    if(!task){
        res.status(404).json({
            success:false,
            message:"No such task found"
        })
    }

    res.status(200).json({
        success:true,
        task:task
    })
    

}

// update by id 
export const updateById =async (req,res)=>{
    const task = await Task.findOneAndUpdate({
        _id:req.params.id,
        user:req.user._id
    },req.body,
    {
        new:true,
        runValidators:true
        
    })

     if (!task) {
       res.status(404).json({
         success: false,
         message: "No such task found",
       });
     }


      res.status(200).json({
        success:true,
        task:task
    })
}

// delete by id;
export const deleteById =async (req,res)=>{
    const task = await Task.findOneAndDelete({
        _id:req.params.id,
        user:req.user._id
    })

     if (!task) {
       res.status(404).json({
         success: false,
         message: "No such task found",
       });
     }

      res.status(200).json({
        success:true,
        message:`task deleted successfully`
    })
}



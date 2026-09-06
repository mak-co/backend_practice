import mongoose  from "mongoose";

const taskSchema = new mongoose.Schema({ //creatign schema or blueprint for task data
    title:{
        type:String,
        required: true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const Task = mongoose.model("Task",taskSchema) //creatign model for task on which we'll run mongodb query

export default Task
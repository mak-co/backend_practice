import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
    trim:true
  },
  status:{
    type:String,
    enum:{
      values:['pending','in-progress','completed'],
    },
    default:'pending'
  },
  priority:{
    type:String,
    enum:{
      values:['low','medium','high'],
    },
    default:'medium'
  },
  category:{
    type:String,
    trim:true,
    lowercase:true,
    default:'general'
  }
},
{
  timestamps:true // Automatically creates 'createdAt' and 'updatedAt' fields
}
);


//"Create a Mongoose model named Task based on this 
// schema, which we can use to interact with the database."
const Task = mongoose.model('Task',taskSchema)


export default Task

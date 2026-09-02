import taskService from "../services/taskService.js";

const createTask = async(req,res)=>{

    const task = await  taskService.createTask(req.body)

    res.status(201).json({
        success:true,
        data:task
    })
}

export default {
    createTask
}
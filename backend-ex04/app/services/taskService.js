import Task from "../models/Task.js"

const createTask = async (data)=>{
    const task = await Task.create(data)

    return task
}


export default {
    createTask
}
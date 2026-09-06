import express from "express"

const app = express();

app.use(express.json())

app.get("/abc",(req,res)=>{
    res.status(200).json({
        Message:"hELLO"
    })
})

export default app
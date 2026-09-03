// Note - You don't need it for the application to work. 
// Request logging is for observability/debugging.


const requestLogger = (req,res,next)=>{
    console.log(req.method,req.url)
    next()
}

export default requestLogger
import express from "express"


const app = express();

const port = 3000;


app.get("/", (req,res)=>{

    return res.status(200).json({
        message: "ho gya kaam fir i am iron man"
    })
})


app.get("/health", (req, res)=>{

    return res.status(200).json({
        message:"health ka route "
    })
})


app.listen(port,()=>{
    console.log(`server runnig on port ${port}`)
})
import express from "express"

const app = express();
const PORT = 8000;

app.get("/",(req , res) =>{
    res.send("Hello from Rajdeep");
})

app.listen(PORT,()=>{
    console.log(`app running on port ${PORT}`);
})
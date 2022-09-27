const express = require('express')

const app = express()
const PORT = 4000;

app.get('/',(req,res)=>{
    res.send("Hello ")
})


app.listen(PORT,()=>{ console.log(` SERVER IS LISTENING TO PORT NO : ${PORT}`)})
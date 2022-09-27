const express = require('express')
const dotenv = require('dotenv').config() 

const app = express()
const PORT = 4000;

app.use(require('./routes/posts'))

app.get('/',(req,res)=>{
    
    res.send("Hello ")
})


app.listen(PORT,()=>{ console.log(` SERVER IS LISTENING TO PORT NO : ${PORT}`)})
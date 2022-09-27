const express = require('express')

const app = express()
const PORT = 4000;

app.get('/',(req,res)=>{
    res.send("Hello ")
})


app.listen(PORT,()=>{ ` SERVER IS LISTENING TO PORT NO : ${PORT}`})
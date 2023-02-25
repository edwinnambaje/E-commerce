const mongoose=require('mongoose');
const express=require('express');
const app=express()
require('dotenv').config()

app.use(express.json());
mongoose.set('strictQuery', false);
app.get('/',async(req,res)=>{
    res.send('Hello World')
})
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("Connected to db"))
app.listen('5000',()=>{
    console.log("Backend is running")
})

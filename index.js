const express=require('express');
const dotenv=require('dotenv').config();


const app=express();

const port=process.env.PORT || 6000;

//app.use('/api/contact',require('./routes/contactRoutes.js'));\

app.get('/api/contact/:id',(req,res)=>{
    req.send(`Hello with id ${req.params.id}`);
})

app.listen(port,()=>{
    console.log(`Port is listening at Port numbers ${port}`);
})
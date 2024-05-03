const express = require('express')
const app=express()
require('dotenv').config();
const morgan =require('morgan')
const cors = require('cors')
const DbConnection = require('./DBconnection')

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//database connnetion
DbConnection()

const Port = process.env.PORT || 8000
app.listen(Port,()=>{
    console.log(`server Listening on ${Port}...`);
})
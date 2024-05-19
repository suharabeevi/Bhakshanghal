const express = require('express')
const app=express()
require('dotenv').config();
const morgan =require('morgan')
const cors = require('cors')
const DbConnection = require('./DBconnection')
const userRoutes = require('./routes/UserRoutes')

//middleware
app.use(express.json())
app.use(cors({origin:"*"}))
app.use(morgan("dev"))

DbConnection()

app.use('/api/user',userRoutes)


const Port = process.env.PORT || 8000
app.listen(Port,()=>{
    console.log(`server Listening on ${Port}...`);
})
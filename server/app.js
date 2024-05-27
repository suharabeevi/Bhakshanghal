const express = require('express')
const app=express()
require('dotenv').config();
const morgan =require('morgan')
const cors = require('cors')
const DbConnection = require('./DBconnection')
const userRoutes = require('./routes/UserRoutes')
const adminRoutes = require('./routes/AdminRoutes')
//middleware
app.use(express.json())
app.use(cors({origin:"*"}))
app.use(morgan("dev"))
//data base connection
DbConnection()


app.use('/api/user',userRoutes)
app.use('/api/admin',adminRoutes)


const Port = process.env.PORT || 8000
app.listen(Port,()=>{
    console.log(`server Listening on ${Port}...`);
})

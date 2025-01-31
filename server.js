const express= require('express')
const { default: mongoose } = require('mongoose')
const app= express()
require('dotenv').config()
app.use(express.json())
const userapp=require('./APIS/userapi')
const authorapp=require('./APIS/authorapi')
const adminapp=require('./APIS/adminapi')

const port=process.env.PORT ||3000
mongoose.connect(process.env.DBURL)
.then(()=>app.listen(port,()=>console.log(`server listening on port ${port}..`)))
.catch(err=> console.log("error in connection"))

app.use('/user-api',userapp)
app.use('/author-api',authorapp)
app.use('/admin-api',adminapp)

const exp=require('express')
const authorapp= exp.Router()
authorapp.use(exp.json())
const eah= require('express-async-handler')
const createuserauthor=require('./createuserauthor')

authorapp.post('/author',eah(createuserauthor))
module.exports=authorapp

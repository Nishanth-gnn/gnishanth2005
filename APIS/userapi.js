const exp=require('express')
const userapp= exp.Router()
userapp.use(exp.json())
const userauthor=require("../models/userauthormodel")
 const eah= require('express-async-handler')
 const createuserauthor=require('./createuserauthor')

userapp.post('/user',eah(createuserauthor))

module.exports=userapp

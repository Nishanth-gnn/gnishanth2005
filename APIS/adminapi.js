const exp=require('express')
const adminapp= exp.Router()
const eah= require('express-async-handler')
adminapp.get('/admin',async (req,res)=>{
    res.send({message:"working"})
})

module.exports=adminapp

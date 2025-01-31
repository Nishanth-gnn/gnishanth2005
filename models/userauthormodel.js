onst mongoose= require('mongoose')

const userauthorsch= new mongoose.Schema({
  role:{
    type:String,
    required:true
  },
  firstname:{
    type: String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  profileimageurl:{
    type:String
  },
  isactive:{
    type:Boolean,
    default:true
  }
},{"strict":"throw"})

const userauthor=  mongoose.model('userauthor',userauthorsch)
module.exports=userauthor

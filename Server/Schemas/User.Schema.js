const mongoose=require('mongoose')


const UserSchema= new mongoose.Schema({

  name:{type:String ,require:true},
  email:{type:String ,require:true},
  password:{type:String ,require:true},
  Role:{
    type:String ,
    enum:['user','admin'],
    Default :'user'
  }

})

module.exports=mongoose.model('User',UserSchema)
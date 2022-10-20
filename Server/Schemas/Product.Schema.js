const mongoose=require('mongoose')


const ProductSchema= new mongoose.Schema({

  Projet:{type:String ,require:true},
  CodeArticle:{type:String ,require:true},
  Description:{type:String ,require:true},
  Kitting:{type:Number ,require:true},
  Coupe:{type:Number ,require:true},
  Montage:{type:Number ,require:true},
  Test:{type:Number ,require:true},

})

module.exports=mongoose.model('Product',ProductSchema)
const Product =require ('../Schemas/Product.Schema');





const Register = async(req,res)=>{
    try {
        const {Projet,CodeArticle,Description,Kitting,Coupe,Montage,Test} = req.body
        //check if Product already exists
        const found = await Product.findOne({CodeArticle})
        if(found){
            return res.status(400).json({message:'Product already exists'})
        }
        
        //creation of Product
        const newProduct = await Product.create({Projet,CodeArticle,Description,Kitting,Coupe,Montage,Test})
        return res.status(401).json({message:'Product added succesfully'})
 
    } catch (error) {
        res.status(500).json({message: error})
    }
}



const GetDataProducts = async(req,res)=>{
   try {
    const Products = await Product.find({});
    res.status(201).json(Products)
   } catch (error) {
    res.status(500).json({message: error})

   }
}

const UpdateDataProduct = async(req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({updatedProduct,msg:'product updated successfully'})
       
    } catch (error) {
        res.status(500).json({message: error})

    }
}
const DeleteProducts = async(req,res)=>{
    try {
        const DeletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.json({DeletedProduct,msg:'the Product has been deleted'})
    } catch (error) {
        res.status(500).json({message: error})

    }
}

module.exports={Register,GetDataProducts,UpdateDataProduct,DeleteProducts}
const Saisie =require ('../Schemas/SaisieProduct.Schema');





const SaveSaisie = async(req,res)=>{
    try {
        const {Projet,CodeArticle,Description,Séquence,Kitting,Coupe,Montage,Test} = req.body
        //check if Product already exists
        
        const found = await Saisie.findOne({CodeArticle,Séquence})
        if(found){
            return res.status(400).json({message:'Product already exists'})
        }

        //creation of Product
        const newSaisie = await Saisie.create({Projet,CodeArticle,Description,Séquence,Kitting,Coupe,Montage,Test})
        return res.status(401).json({message:'Product added succesfully'})
 
    } catch (error) {
        res.status(500).json({message: error})
    }
}



const GetDataSaisie = async(req,res)=>{
   try {
    const Saisies = await Saisie.find({});
    res.status(201).json(Saisies)
   } catch (error) {
    res.status(500).json({message: error})

   }
}

const UpdateDataSaisie = async(req,res)=>{
    try {
        const updatedSaisies = await Saisie.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedSaisies)
    } catch (error) {
        res.status(500).json({message: error})

    }
}
const DeleteSaisie = async(req,res)=>{
    try {
        const DeletedSaisies = await Saisie.findByIdAndDelete(req.params.id)
        res.json({DeletedSaisies,msg:'the Product has been deleted'})
    } catch (error) {
        res.status(500).json({message: error})

    }
}

module.exports={SaveSaisie,GetDataSaisie,UpdateDataSaisie,DeleteSaisie}
 const mongoose=require('mongoose')
const Suivie =require('../Models/Suivie')


 const AjouterSuivie =async(req,res)=>{
   const {dateentree,datesortie,numcolis,localisation,nom,numdouanier} = req.body
   const data ={dateentree,datesortie,numcolis,localisation,nom,numdouanier} 
   try {
    const suivie =await Suivie.create(data)
    res.status(200).json(suivie)
   }
   catch{
    console.log("eurreur d ajout du suivie")
    res.status(400).json(error)
   }

 }
  const ModifierSuivie =async(req,res)=>{
        const {id}=req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(500).json({error:'id invalide'})
        }
        const suivie=await Suivie.findByIdAndUpdate({_id:id},{...req.body})
        if(!suivie){
            return res.status(400).json(error)
        }
        res.status(200).json(suivie)
}
 const SupprimerSuivie =async(req,res)=>{
    const {id} =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({error:"Id Suivie Invalide"})
    }
    const suivie =await Suivie.findByIdAndDelete({_id:id})
    if(!suivie){
      return res.status(400).json(error)
    }
    return res.status(200).json(suivie)

 }
 const GetSuivie =async(req,res)=>{
   const {id} =req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error:"Id Suivie Invalide"})
  }
  const suivie =await Suivie.findById({_id:id})
  if(!suivie){
    return res.status(400).json(error)
  }
  return res.status(200).json(suivie)


}
// GetSingleSuivie
const GetSingleSuivie = async (req, res) => {
    const { nom, numdouanier } = req.params;
  console.log(nom)
  console.log(numdouanier)
      const suiviee = await Suivie.find({ nom: nom, numdouanier: numdouanier });
      console.log(suiviee)
      if (!suiviee) {
        return res.status(400).json({ error: 'suivie introuvable' });
      } else {
       return res.status(200).json( {suiviee} );
      }
   
  };

  
 module.exports={
    AjouterSuivie,
    ModifierSuivie,
    SupprimerSuivie,
    GetSuivie,
     GetSingleSuivie,
}
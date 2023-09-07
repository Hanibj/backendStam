const mongoose=require('mongoose')
const EtatMateriel =require('../Models/EtatMateriel')


 const AjouterEtatMateriel =async(req,res)=>{
    console.log(req.body)
    const {num,numgarge,type,statue,remarque}= req.body

    const data ={num,numgarge,type,statue,remarque}
    try{
        const materiel =await EtatMateriel.create(data)
        res.status(200).json(materiel)
    }catch{
        console.log("Erreur lors de l'ajout d'un Etat")
        return res.status(400).json(error)
    }
}
const ModifierEtatMateriel =async(req,res)=>{
const {id} =req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'Admin is invalide'})
}
try{
   const materiel =await EtatMateriel.findByIdAndUpdate({_id:id},{...req.body})
   res.status(200).json(materiel)
}catch{
    console.log("erreur lors de la modification d'un Etat du materielle")
    res.status(400).json(error)
}

}
const SupprimerEtatMateriel =async(req,res)=>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'etat invalide'})
    }
    try{
        const materiel =await EtatMateriel.findByIdAndDelete({_id:id})
        return res.status(200).json(materiel)
    }catch{
        console.log("erreur lors du suppression de l'Etat de materiel")
        return res.status(400).json(error)
    }

 }
 const GetEtatMateriel =async(req,res)=>{

    const materiel=await EtatMateriel.find({})
    console.log(materiel)
    if (!materiel){
        console.log("EtatMateriel invalide")
        return res.status(400).json(error)
    }
res.status(200).json(materiel)

 }
 const GetSingleEtatMateriel = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
  
    try {
      const materiel = await EtatMateriel.findById({ _id: id });
      if (!materiel) {
        console.log("EtatMateriel introuvable");
        return res.status(400).json({ error: "EtatMateriel introuvable" });
      }
      res.status(200).json(materiel);
    } catch (error) {
      console.log("erreur lors de fettchind les Etats");
      return res.status(400).json({ error: "Erreur lors de la récupération de l'EtatMateriel" });
    }
  };
  const EtatDeMaterielleDashbord = async (req,res)=>{
    try{
    const EtatMaterielData = await EtatMateriel.find({});
    const EtatMaterielDataEnpanne= await EtatMateriel.find({ statue: "en panne"})
    const EtatMaterielDataEnmaintenance= await EtatMateriel.find({ statue: "en maintenance"})
    const EtatMaterielDataPasEnmarche= await EtatMateriel.find({ statue: 'en marche'})
  
    const totalCount = EtatMaterielData.length;
    const totalEnpanne= EtatMaterielDataEnpanne.length;
    const totalEnmaintenance= EtatMaterielDataEnmaintenance.length;
    const totalPasEnmarche= EtatMaterielDataPasEnmarche.length;
   
    const responseData = {
      totalCount,
      totalEnpanne,
      totalEnmaintenance,
      totalPasEnmarche
  };
  
  // Send the response
  res.json(responseData);
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  }
 module.exports={
     AjouterEtatMateriel,
     ModifierEtatMateriel,
     SupprimerEtatMateriel,
    GetEtatMateriel,
    GetSingleEtatMateriel,
    EtatDeMaterielleDashbord
 }
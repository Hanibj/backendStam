const mongoose=require('mongoose')
const Reservation =require('../Models/Reservation')
const Reservationclient =require('../Models/ReservationClient')
const RORO =require('../Models/Roro')

const AjouterReservation =async(req,res)=>{
   const {num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible,nombreroro,statue,client} =req.body
   const data={num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible,nombreroro,statue,client}
   try{
    const reserv=await Reservation.create(data)
    return res.status(200).json(reserv)}
    
    catch{
        console.log("reservation invalide")
        return res.status(400).json(error);
    }
    
}
const ModifierReservation =async(req,res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'reservation is invalide'})
}

  const reserv =await Reservation.findByIdAndUpdate({_id:id},{...req.body})
if(!reserv){
console.log("reservation invalide")
  return res.status(400).json(error);
}  
  
  res.status(200).json(reserv)




}
const SupprimerReservation =async(req,res)=>{
   const {id} =req.params
   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'reservation is invalide'})
}
   const reserv =await Reservation.findOneAndDelete({_id:id})
console.log(id)
   if(!reserv){
    console.log("reservation invalide")
  return res.status(400).json(error);
   }
res.status(200).json(reserv)
}
const GetReservation =async(req,res)=>{
  

    const reserv=await Reservation.find({})
  
    if (!reserv){
        console.log("reservation invalide")
        return res.status(400).json(error)
    }
res.status(200).json(reserv)
}

const GetSingleResrvation =async(req,res)=>{
    const {id}= req.params
    if(! mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'id invalide'})
    }
    const reserv =await Reservation.findById({_id:id})
    if(!reserv){
        console.log("reservation introuvable")
        return res.status(400).json(error)
    }
    res.status(200).json(reserv)
}
const AjouterRoro =async(req,res)=>{
  const {nbrrorodisponible,num,armateur}= req.body
  const data={
    nombre:nbrrorodisponible,
    numero:num,
    armateur:armateur
  }
   try{
      const ros=await RORO.create(data)
      return res.status(200).json(ros)
   }catch{
     console.log('erreur RORO')
     return res.status(400).json(error)
   }
   
}
const GetRoro =async (req,res)=>{
  const {numero,armateur}= req.params
console.log(numero)
console.log(armateur)
  

    const roro=await RORO.find({ numero:numero, armateur:armateur})
    const nombre=roro.nombre
    console.log(roro)
    if (!roro){
        console.log("RORO invalide")
        return res.status(400).json(error)
    }
res.status(200).json({roro})

}
const ModifierRoro =async(req,res)=>{
//  const {id}=req.params
  const {nbrrorodisponible,num,armateur}= req.body
  console.log(nbrrorodisponible)
  // const data={
  //   nombre:nbrrorodisponible,
  //   numero:num,
  //   armateur:armateur
  // }
   try{
      const ros=await RORO.findOneAndUpdate({ numero:num,armateur:armateur},{nombre:nbrrorodisponible, numero:num,armateur:armateur})
      return res.status(200).json(ros)
   }catch{
     console.log('erreur RORO')
     return res.status(400).json(error)
   }
   
}
const SuppremierRoro =async(req,res)=>{
  //  const {id}=req.params
    const {num,armateur}= req.params
    // const data={
    //   nombre:nbrrorodisponible,
    //   numero:num,
    //   armateur:armateur
    // }
     try{
        const ros=await RORO.findOneAndDelete({ numero:num,armateur:armateur})
        return res.status(200).json(ros)
     }catch{
       console.log('erreur RORO')
       return res.status(400).json(error)
     }
     
  }
  const AjouterReservationRoro =async(req,res)=>{
    const {num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible,nombreroro,statue,client} =req.body
    const data={num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible,nombreroro,statue,client}
    console.log(nbrrorodisponible)
    try{
     const reserv=await Reservationclient.create(data)
     return res.status(200).json(reserv)}
     
     catch{
         console.log("reservation invalide")
         return res.status(400).json();
     }
     
 }
 const ModifierReservationClient =async(req,res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'reservation is invalide'})
}

  const reserv =await Reservationclient.findByIdAndUpdate({_id:id},{...req.body})
if(!reserv){
console.log("reservation invalide")
  return res.status(400).json(error);
}  
  
  res.status(200).json(reserv)




}

const GetSingleResrvationClient =async(req,res)=>{
  const {id}= req.params
  if(! mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({error:'id invalide'})
  }
  const reserv =await Reservationclient.findById({_id:id})
  console.log(reserv)
  if(!reserv){
      console.log("reservation introuvable")
      return res.status(400).json(error)
  }
  res.status(200).json(reserv)
}


const GetReservationClient =async(req,res)=>{
  

    const reserv=await Reservationclient.find({})
  
    if (!reserv){
        console.log("reservation invalide")
        return res.status(400).json(error)
    }
res.status(200).json(reserv)
}
const GetResrvationByClient =async(req,res)=>{
  const {client}=req.params
console.log(client)
  const reserv=await Reservationclient.find({client:client})
console.log(reserv)
  if (!reserv){
      console.log("reservation invalide")
      return res.status(400).json(error)
  }
res.status(200).json(reserv)
}

const SupprimerReservationClient =async(req,res)=>{
  const {id} =req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(404).json({error:'reservation is invalide'})
}
  const reserv =await Reservationclient.findOneAndDelete({_id:id})
console.log(id)
  if(!reserv){
   console.log("reservation invalide")
 return res.status(400).json(error);
  }
res.status(200).json(reserv)
}
const NombreTotaleReservation = async (req,res)=>{
  try{
  const ReservationData = await Reservationclient.find({});
  const ReservationDataTerminer= await Reservationclient.find({ statue: "terminer"})
  const ReservationDataEnCour= await Reservationclient.find({ statue: "en cour"})
  const ReservationDataPasEnCour= await Reservationclient.find({ statue: 'pas encore'})

  const totalCount = ReservationData.length;
  const totalTerminer= ReservationDataTerminer.length;
  const totalEnCour= ReservationDataEnCour.length;
  const totalPasEnCour= ReservationDataPasEnCour.length;
 
  const responseData = {
    totalCount,
    totalTerminer,
    totalEnCour,
    totalPasEnCour
};

// Send the response
res.json(responseData);
}
catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}
}
const ReservationParClient =async(req,res)=>{
  const {email}=req.params
  console.log(email)
  try {
    const clien = await Reservationclient.find({client:email});
    const clients=clien.length;
    console.log(clients)
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue.' });
  }
}
module.exports={
    AjouterReservation,
    ModifierReservation,
    SupprimerReservation,
    GetReservation,
    GetSingleResrvation,
    AjouterRoro,
    ModifierRoro,
    GetRoro,
    SuppremierRoro,
    AjouterReservationRoro,
    ModifierReservationClient,
    GetSingleResrvationClient,
    GetReservationClient,
    GetResrvationByClient,
    SupprimerReservationClient,
    NombreTotaleReservation,
    ReservationParClient
}
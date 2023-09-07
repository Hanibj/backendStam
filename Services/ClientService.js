//const Employee =require('../models/employee')
const mongoose=require('mongoose')
const jwt =require('jsonwebtoken');
const User=require('../Models/User')



const createToken =(_id) =>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'2d'})
}




//Profile
const GetProfile= async (req,res) => {
    const {email}=req.params
 
   


    const user= await User.find({email:email});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:200,data:user})

}

const updateClientProfile= async (req,res) => {
    const {email}=req.params
 
    const Emplo= await User.findOneAndUpdate({email: email},{...req.body});
    if (!Emplo){
    return res.status(400).json({error: 'Client introvable'})
}
res.status(200).json(Emplo)
}
const AllClient= async (req,res) => {
  
    const Emplo= await User.find({});
    if (!Emplo){
    return res.status(400).json({error: 'Client introvable'})
}
res.status(200).json(Emplo)
}
module.exports={
   
    GetProfile,
    updateClientProfile,
    AllClient



}


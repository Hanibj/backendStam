const mongoose =require('mongoose')
const User =require('../Models/User')


const SigninUser = async (req,res) =>{
    const {email,password}= req.body;
    
    try{
        const user =await User.Signin(email,password);
        console.log(user)
        // create token
        // const token = createToken(user._id)
        return  res.status(200).json({email,typeus:user.typeus})
       }catch(error){
           res.status(400).json({error:error.message})

    }

};
const SignupClient = async (req,res) =>{
    const {nom,prenom,email,password,entreprise,typeus}= req.body;
      
     try{
        const exists =await User.findOne({email})
        if (exists){
           throw error ('Email used')
        }
    //    const salt= await bcrypt.genSalt(10);
    //    const hash =await bcrypt.hash(password, salt);
     
         const user =await User.create({nom,prenom,email,password,entreprise,typeus});
         console.log(user);
         // create token
        //  const token = createToken(user._id)
         return res.status(200).json({email,typeus:user.typeus})
        }catch(error){
            console.log(error)
            res.status(400).json({error:error.message})

     }


};

const ResetPassword= async (req,res) => {
 
    console.log(req.body)
    const email=req.body.email
    
   const user= await User.findOneAndUpdate({email: email},{...req.body});
   console.log(user)
   if (!user){
   return res.status(400).json({error: 'user introvable'})
 }
 res.status(200).json(user)
 }


 module.exports ={
    ResetPassword,
    SigninUser,
    SignupClient
 }
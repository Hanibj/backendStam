
const mongoose=require('mongoose')
const User =require('../Models/User')

//Sign-in 


const GetProfile= async (req,res) => {
    const {email}=req.params
 
   


    const user= await User.find({email:email});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:200,data:user})

}

const updateProfile= async (req,res) => {
    const {id}=req.params
     
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Admin is invalide'})
    }
    const Admin= await User.findOneAndUpdate({_id: id},{...req.body});
    if (!Admin){
    return res.status(400).json({error: 'Admin introvable'})
}
res.status(200).json(Admin)
}



module.exports={

    GetProfile,
    updateProfile,

}


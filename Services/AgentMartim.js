const mongoose =require('mongoose')

const AgentMaritime=require('../Models/AgentMaritin')


const AjouterAgentMartime =async(req,res)=>{
     const {
        nomnavire,
        nom,
        numesale,
        portchargement,
        portdechargement,
        numdouanier,
        nature,
        poid,
        nomdestinateur
    }=req.body
    const data= {       
        nomnavire,
        nom,
        numesale,
        portchargement,
        portdechargement,
        numdouanier,
        nature,
        poid,
        nomdestinateur}
  try{
    const agent =await AgentMaritime.create(data) 
    res.status(200).json(data)
  }catch{
    console.log('erreur d ajout')
    return res.status(400).json(error)
  }
}

const ModifierAgentMartim =async (req,res)=>{
        const {id}= req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:'id invalide'})
        }
        const agent =await AgentMaritime.findByIdAndUpdate({_id:id},{...req.body})
        if(!agent){
            console.log("erreur de modification")
            return res.status(400).json(error)
        }
        res.status(200).json(agent)
    }
    const SupprimerAgentMartim =async (req,res)=>{
        const {id}= req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:'id invalide'})
        }
        const agent =await AgentMaritime.findByIdAndDelete({_id:id})
        if(!agent){
            console.log("erreur de suppresion")
            return res.status(400).json(error)
        }
        res.status(200).json(agent)
    }
    const GetSingleAgent =async (req,res)=>{
        const {id}= req.params
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error:'id invalide'})
        }
        const agent =await AgentMaritime.findById({_id:id})
        if(!agent){
            console.log("erreur de de fetch")
            return res.status(400).json(error)
        }
        res.status(200).json(agent)
    }
    const GetAgent =async (req,res)=>{
     

        const agent =await AgentMaritime.find({})
        if(!agent){
            console.log("erreur de de fetch")
            return res.status(400).json(error)
        }
        console.log(agent)
        console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh')
        res.status(200).json(agent)
    }
module.exports={
    AjouterAgentMartime,
    ModifierAgentMartim,
    SupprimerAgentMartim,
    GetSingleAgent,
    GetAgent
}

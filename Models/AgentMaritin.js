const mongoose=require ('mongoose')

const Schema= mongoose.Schema

var agentMaritineSchemaa=new mongoose.Schema({
    nomnavire:{type:String},
        nom:{type:String},
        numesale:{type:String},
        portchargement:{type:String},
        portdechargement:{type:String},
        numdouanier:{type :String},
        nature:{type:String},
        poid:{type:String},
        nomdestinateur:{type:String},

})

module.exports=mongoose.model("AgentMaritime",agentMaritineSchemaa)
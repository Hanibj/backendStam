const mongoose=require("mongoose")


const Schema=mongoose.schema




var reservationclientSchema =new mongoose.Schema({
    num :{type :String, require:true},
    armateur:{type :String, require:true},
    agentMaritime:{type :String, require:true},
    itineraire:{type :String, require:true},
    frequencedetouchee:{type :String, require:true},
    nbrrorodisponible:{type :Number, require:true},
    nombreroro:{type :Number},
    statue:{type :String},
    client:{type:String},
})
module.exports = mongoose.model('Reservationclient', reservationclientSchema);
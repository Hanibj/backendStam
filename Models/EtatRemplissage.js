const mongoose =require("mongoose")
const Schema =mongoose.Schema

var etatremplissageSchema =new mongoose.Schema({
    numescale:{type :String, require:true},
    chargement:{type :String, require:true},
    dechargement:{type :String, require:true},
    postion:{type :String, require:true},
    status:{type :String, require:true},
})
module.exports = mongoose.model("EtatRemplissage",etatremplissageSchema)
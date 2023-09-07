const mongoose =require("mongoose")

const Schema =mongoose.Schema

var roroSchema = new mongoose.Schema({
    nombre: {type:Number,require:true},
    numero: {type:String,require:true},
    armateur: {type:String,require:true},

})

module.exports=mongoose.model("Roro",roroSchema)

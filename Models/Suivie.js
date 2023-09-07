const mongoose =require("mongoose")

const Schema =mongoose.Schema


var suivieSchema =new mongoose.Schema({
    dateentree:{type :String, require:true},
    datesortie:{type :String, require:true},
    numcolis:{type :String, require:true},
    localisation:{type :String, require:true},
    nom:{type :String, require:true},
    numdouanier:{type :String},

})

module.exports = mongoose.model('Suivie', suivieSchema);
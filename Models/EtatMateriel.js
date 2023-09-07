const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var etatmaterielShema = new mongoose.Schema({
  num: { type: String, require: true },
  numgarge: { type: String, require: true },
  type: { type: String, require: true },
  statue: { type: String, require: true },
  remarque: { type: String, require: true },
});

module.exports = mongoose.model("EtatMateriel", etatmaterielShema);

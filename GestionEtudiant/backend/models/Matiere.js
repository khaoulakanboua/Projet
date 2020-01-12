const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let matiereSchema = new Schema({

  NomM: {
    type: String,
    required: true
  },
  Ens: {
    type: String,
    required: true
  }
},)

module.exports = mongoose.model('Matiere', matiereSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  numA: {
    type: Number,
    required: true
  },
  cne: {
    type: String,
    required: true
  }, 
  A: {
    type: Number,
    required: true
  }
},)

module.exports = mongoose.model('Student', studentSchema)
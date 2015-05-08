var mongoose = require('mongoose');
var shortid= require('shortid');

var patientsSchema = mongoose.Schema({
  name: String,
  dob: String,
  social: String,
  amount: Number
});


// Our team model
var Patient = mongoose.model('patient', patientsSchema);

// Make team model available through exports/require
module.exports = Patient;
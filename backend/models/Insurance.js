const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  idProof: String,
  companyName: String,
  insuranceId: String,
  medicalCert: String
});

module.exports = mongoose.model("Insurance", insuranceSchema);

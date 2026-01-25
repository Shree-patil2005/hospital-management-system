const mongoose = require("mongoose");

const medicineOrderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  medicine: String,
  paymentMode: {
    type: String,
    default: "Cash on Delivery"
  }
});

module.exports = mongoose.model("MedicineOrder", medicineOrderSchema);

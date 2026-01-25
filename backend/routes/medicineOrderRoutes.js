const express = require("express");
const router = express.Router();
const MedicineOrder = require("../models/MedicineOrder");

router.post("/order", async (req, res) => {
  try {
    const order = new MedicineOrder(req.body);
    await order.save();
    res.json({ message: "Medicine ordered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error placing order" });
  }
});

module.exports = router;

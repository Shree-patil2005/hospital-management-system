const express = require("express");
const router = express.Router();
const Insurance = require("../models/Insurance");

router.post("/add", async (req, res) => {
  try {
    const insurance = new Insurance(req.body);
    await insurance.save();
    res.json({ message: "Insurance details saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving insurance details" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/add", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting feedback" });
  }
});

module.exports = router;

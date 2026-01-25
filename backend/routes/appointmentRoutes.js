const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Book appointment
router.post("/book", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json({ message: "Appointment booked successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment" });
  }
});

// Get all appointments (for Appointment Status page)
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

module.exports = router;

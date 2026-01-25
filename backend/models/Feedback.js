const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  rating: Number,
  feedback: String
});

module.exports = mongoose.model("Feedback", feedbackSchema);

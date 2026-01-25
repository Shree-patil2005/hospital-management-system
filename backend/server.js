const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const medicineOrderRoutes = require("./routes/medicineOrderRoutes");
const insuranceRoutes = require("./routes/insuranceRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/patient", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/medicine", medicineOrderRoutes);
app.use("/api/insurance", insuranceRoutes);
app.use("/api/feedback", feedbackRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

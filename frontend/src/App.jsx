import { Routes, Route, useNavigate } from "react-router-dom";
import Patient from "./patient";
import Admin from "./admin";
import AdminDashboard from "./adminDashboard";
import HospitalInfo from "./hospitalInfo";
import PatientDashboard from "./patientDashboard";
import AppointmentStatus from "./AppointmentStatus";
import OrderMedicine from "./OrderMedicine";
import Insurance from "./insurance";
import Feedback from "./feedback";
import hospitalBg from "./assets/hospital2.jfif";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      
      {/* 1. Simple Navigation Header */}
      <header className="bg-blue-700 text-white p-4 text-center shadow-md">
        <h1 className="text-xl font-bold uppercase tracking-wide">
          Patil Bhandu Hospital Management System
        </h1>
      </header>

      {/* 2. Main Grid Container */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 items-center grow">
        
        {/* Left Side: Buttons */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome</h2>
          <p className="text-gray-600 mb-6">Select a portal to continue:</p>
          
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => navigate("/admin")}
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Admin Login
            </button>

            <button 
              onClick={() => navigate("/patient")}
              className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              Patient Portal
            </button>

            <button 
              onClick={() => navigate("/hospital-info")}
              className="w-full bg-gray-800 text-white py-3 rounded font-semibold hover:bg-gray-900 transition"
            >
              Hospital Information
            </button>
          </div>
        </div>

        {/* Right Side: Simple Image Display */}
        <div className="hidden md:block">
          <img 
            src={hospitalBg} 
            alt="Hospital" 
            className="rounded-lg shadow-xl w-full h-100 object-cover border-4 border-white"
          />
        </div>

      </main>

      {/* 3. Simple Footer */}
      <footer className="bg-gray-200 p-4 text-center text-gray-700 text-sm">
        © 2025 Patil Bhandu Hospital | Secure Management Portal
      </footer>
    </div>
  );
}


// App component remains the same for routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/hospital-info" element={<HospitalInfo />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/appointment-status" element={<AppointmentStatus />} />
      <Route path="/order-medicine" element={<OrderMedicine />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
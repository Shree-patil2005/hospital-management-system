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
    
    <div className="min-h-screen flex flex-col bg-[#f8fafc]" 
         style={{ 
           backgroundColor: "#f8fafc",
           backgroundImage: `
             radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
             radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%),
             radial-gradient(at 100% 0%, rgba(59, 130, 246, 0.05) 0px, transparent 50%)
           ` 
         }}>
      
      
      <header className="bg-blue-700 text-white p-5 text-center shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          Welcome to Bhakti  Hospital
        </h1>
      </header>

      
      <main className="flex flex-col md:grid md:grid-cols-2 gap-8 p-6 md:p-16 items-center grow max-w-7xl mx-auto w-full">
        
        
        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white w-full order-2 md:order-1">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800">Welcome</h2>
            <div className="h-1.5 w-12 bg-blue-600 rounded-full mt-2"></div>
            <p className="text-gray-500 mt-4 font-medium text-sm md:text-base">
              Authorized access only. Please select your portal to continue.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => navigate("/admin")}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-md active:scale-95"
            >
              Admin Login
            </button>

            <button 
              onClick={() => navigate("/patient")}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-md active:scale-95"
            >
              Patient Portal
            </button>

            <button 
              onClick={() => navigate("/hospital-info")}
              className="w-full bg-gray-800 text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-all shadow-md active:scale-95"
            >
              Hospital Information
            </button>
          </div>
        </div>

        
        <div className="relative w-full order-1 md:order-2 group">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src={hospitalBg} 
              alt="Hospital" 
              className="w-full h-64 md:h-112.5 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-blue-900 via-blue-900/80 to-transparent p-6 text-center">
              <p className="text-white font-bold text-xl md:text-2xl italic tracking-wide">
                "Trust, Care, and Excellence"
              </p>
            </div>
          </div>
        </div>

      </main>

      
      <footer className="bg-blue-500 backdrop-blur-md p-4 text-center text-white-500 text-sm border-t border-gray-200">
        © 2025 Bhakti Hospital | Secure Management Portal
      </footer>
    </div>
  );
}


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
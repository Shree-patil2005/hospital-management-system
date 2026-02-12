import { useNavigate } from "react-router-dom";
import hospitalBg from "./assets/hospital2.jfif"; 

export default function HospitalInfo() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("hospitalInfo"));

  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <h2 className="text-red-600 font-bold text-xl mb-4">No Data Available</h2>
          <button onClick={() => navigate("/")} className="text-blue-600 underline">Go Back Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      
      <header className="bg-blue-800 text-white py-3 px-6 shadow-md flex justify-between items-center">
        <h2 className="font-bold uppercase tracking-wide">Welcome to Bhakti  Hospital</h2>
        <button onClick={() => navigate("/")} className="text-xs bg-white text-blue-800 px-3 py-1 rounded font-bold">BACK</button>
      </header>

      
      <main className="grow grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 items-start max-w-7xl mx-auto w-full">
        
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-2xl font-black text-blue-900 mb-2 uppercase">Hospital Resources</h1>
          <p className="text-gray-500 text-sm mb-6 font-bold">Real-time availability of hospital assets.</p>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["Available Beds", data.beds],
              ["Ambulances", data.ambulance],
              ["Ventilators", data.ventilators],
              ["Oxygen (kg)", data.oxygen],
              ["Private Rooms", data.rooms],
              ["ICU Units", data.icu],
            ].map(([label, value]) => (
              <div key={label} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-gray-500 text-[10px] font-black uppercase">{label}</p>
                <p className="text-xl font-bold text-blue-700">{value}</p>
              </div>
            ))}
          </div>

          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-blue-900 font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Doctors Currently on Duty
            </h3>
            <p className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 italic border border-gray-200">
              {data.doctors}
            </p>
          </div>
        </div>

        
        <div className="hidden md:block sticky top-24">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img src={hospitalBg} alt="Hospital" className="w-full h-125 object-cover" />
            <div className="absolute inset-0 bg-blue-900/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 to-transparent text-white">
              <p className="text-lg font-bold">24/7 Patient Support</p>
              <p className="text-xs opacity-80">Committed to providing the best healthcare facilities.</p>
            </div>
          </div>
        </div>
      </main>

      
      <footer className="bg-slate-900 text-white py-6 text-center text-xs">
        © 2025 Bhakti Hospital Management System | Serving with Excellence
      </footer>
    </div>
  );
}
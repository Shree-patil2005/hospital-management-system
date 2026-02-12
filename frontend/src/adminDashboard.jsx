import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    beds: "",
    ambulance: "",
    ventilators: "",
    oxygen: "",
    rooms: "",
    icu: "",
    nurses: "",
    doctors: "",
    patients: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    
    localStorage.setItem("hospitalInfo", JSON.stringify(data));
    alert("Hospital data updated successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      
      <header className="bg-slate-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <h2 className="font-bold tracking-widest uppercase text-sm">Admin Control Center</h2>
        </div>
        <button 
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-xs font-bold transition"
        >
          LOGOUT
        </button>
      </header>

      
      <main className="grow p-6 md:p-12 max-w-4xl mx-auto w-full">
        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden">
          
          
          <div className="bg-emerald-600 p-6 text-white text-center">
            <h1 className="text-2xl font-black uppercase">Update Hospital Resources</h1>
            <p className="text-emerald-100 text-xs mt-1">Changes made here will reflect on the Public Info Page</p>
          </div>

          <div className="p-6 md:p-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ["beds", "Total Beds Available"],
                ["ambulance", "Ambulances on Call"],
                ["ventilators", "Ventilator Count"],
                ["oxygen", "Oxygen Stock (kg)"],
                ["rooms", "Special Rooms"],
                ["icu", "ICU Beds"],
                ["nurses", "Nurses on Shift"],
                ["patients", "Current Patients"]
              ].map(([name, label]) => (
                <div key={name} className="flex flex-col">
                  <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 ml-1">{label}</label>
                  <input
                    name={name}
                    type="number" 
                    onChange={handleChange}
                    placeholder="0"
                    className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition"
                  />
                </div>
              ))}
            </div>

            
            <div className="mt-8">
              <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 ml-1">Staffing (Doctor Names & Schedules)</label>
              <textarea
                name="doctors"
                rows="4"
                onChange={handleChange}
                placeholder="Ex: Dr. Patil (Morning), Dr. Kulkarni (Night)..."
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none"
              />
            </div>

            
            <button
              onClick={handleSave}
              className="w-full mt-10 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-lg shadow-emerald-100 transition-all active:scale-95"
            >
              Confirm & Update Portal
            </button>
          </div>
        </div>
      </main>

      
      <footer className="py-6 text-center text-gray-400 text-[10px] uppercase font-bold">
        Secure Admin Access — Bhakti Hospital Management
      </footer>
    </div>
  );
}
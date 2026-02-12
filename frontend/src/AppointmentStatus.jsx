import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppointmentStatus() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  
  useEffect(() => {
    fetch("https://hospital-management-system-0s9h.onrender.com/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  
  const navItems = [
    { label: "Book", icon: "📅", path: "/patient-dashboard" },
    { label: "Status", icon: "📋", path: "/appointment-status" },
    { label: "Medicine", icon: "💊", path: "/order-medicine" },
    { label: "Insurance", icon: "🛡️", path: "/insurance" },
    { label: "Feedback", icon: "⭐", path: "/feedback" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      
      
      <aside className="hidden md:flex w-72 bg-emerald-800 text-white p-6 shadow-2xl flex-col shrink-0">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-black uppercase tracking-tighter">Patil Bhandu</h2>
          <p className="text-[10px] text-emerald-300 font-bold uppercase tracking-widest">Healthcare Portal</p>
        </div>
        
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 w-full px-5 py-3.5 rounded-xl transition-all font-bold text-sm ${
                item.label === "Status" 
                ? "bg-white text-emerald-800 shadow-lg" 
                : "hover:bg-emerald-700 text-emerald-100"
              }`}
            >
              <span>{item.icon}</span>
              {item.label === "Book" ? "Book Appointment" : `${item.label} Check`}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => navigate("/")}
          className="mt-auto bg-emerald-900 hover:bg-red-900 p-4 rounded-xl text-xs font-bold transition-colors"
        >
          LOGOUT
        </button>
      </aside>

      
      <div className="flex-1 flex flex-col">
        
        
        <header className="bg-white shadow-sm p-4 flex justify-between items-center border-b border-slate-100 md:hidden">
          <h1 className="font-black text-emerald-800 uppercase tracking-tight text-sm">Appointment Status</h1>
          <button onClick={() => navigate("/")} className="text-xs font-bold text-red-600">EXIT</button>
        </header>

        
        <nav className="md:hidden bg-white border-b flex overflow-x-auto p-2 gap-2 scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border transition-all ${
                item.label === "Status" 
                ? "bg-emerald-600 text-white border-emerald-600 shadow-md" 
                : "bg-slate-50 text-slate-600 border-slate-100"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        
        <main className="p-4 md:p-10 grow">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-800 mb-6 uppercase tracking-tight">Your Medical Visits</h2>
            
            
            <div className="hidden md:block bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="p-5 text-[10px] font-black uppercase text-slate-400">Patient Name</th>
                    <th className="p-5 text-[10px] font-black uppercase text-slate-400">Contact</th>
                    <th className="p-5 text-[10px] font-black uppercase text-slate-400">Date</th>
                    <th className="p-5 text-[10px] font-black uppercase text-slate-400 text-right">Time Slot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {appointments.length > 0 ? (
                    appointments.map((a) => (
                      <tr key={a._id} className="hover:bg-emerald-50/30 transition-colors">
                        <td className="p-5 text-sm font-bold text-slate-700">{a.name}</td>
                        <td className="p-5 text-sm text-slate-500">{a.phone}</td>
                        <td className="p-5 text-sm font-medium text-slate-600">{a.date}</td>
                        <td className="p-5 text-sm text-right">
                          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-black text-[10px]">
                            {a.time}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="p-20 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                        No Bookings Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            
            <div className="md:hidden space-y-4">
              {appointments.map((a) => (
                <div key={a._id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Confirmed</span>
                    <span className="text-xs font-bold text-slate-400">{a.date}</span>
                  </div>
                  <h4 className="font-black text-slate-800 uppercase tracking-tight">{a.name}</h4>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-xs text-slate-500 font-bold">{a.phone}</p>
                    <p className="bg-slate-100 px-3 py-1 rounded-lg text-xs font-black text-slate-700">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="p-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          © 2025 Bhakti Bhandu Hospital | Portal Version 1.0
        </footer>
      </div>
    </div>
  );
}
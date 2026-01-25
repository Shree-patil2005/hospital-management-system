import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientDashboard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  // Simple logic to set the minimum booking date (2 days from now)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 2);
  const minDateStr = minDate.toISOString().split("T")[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/appointments/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Error booking appointment. Please try again.");
    }
  };

  const navItems = [
    { label: "Book", icon: "📅", path: "/patient-dashboard" },
    { label: "Status", icon: "📋", path: "/appointment-status" },
    { label: "Medicine", icon: "💊", path: "/order-medicine" },
    { label: "Insurance", icon: "🛡️", path: "/insurance" },
    { label: "Feedback", icon: "⭐", path: "/feedback" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      
      {/* 1. Sidebar - Navigation for Desktop */}
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
                item.label === "Book" 
                ? "bg-white text-emerald-800 shadow-lg" 
                : "hover:bg-emerald-700 text-emerald-100"
              }`}
            >
              <span>{item.icon}</span>
              {item.label} Appointment
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

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Mobile Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center border-b border-slate-100 md:hidden">
          <h1 className="font-black text-emerald-800 uppercase tracking-tight">Patil Bhandu</h1>
          <button onClick={() => navigate("/")} className="text-xs font-bold text-red-600">EXIT</button>
        </header>

        {/* Mobile Horizontal Menu */}
        <nav className="md:hidden bg-white border-b flex overflow-x-auto p-2 gap-2 scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border transition-all ${
                item.label === "Book" 
                ? "bg-emerald-600 text-white border-emerald-600 shadow-md" 
                : "bg-slate-50 text-slate-600 border-slate-100"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        {/* Form Section */}
        <main className="grow flex items-center justify-center p-4 md:p-12">
          <div className="w-full max-w-lg">
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
              
              <div className="bg-emerald-600 p-6 text-white text-center">
                <h3 className="text-2xl font-black uppercase">Book Appointment</h3>
                <p className="text-emerald-100 text-xs font-bold mt-1 uppercase tracking-widest">Secure your time-slot online</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter patient's name"
                    required
                    onChange={handleChange}
                    className="w-full mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    required
                    onChange={handleChange}
                    className="w-full mt-1 p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      min={minDateStr}
                      required
                      onChange={handleChange}
                      className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Preferred Time</label>
                    <input
                      type="time"
                      name="time"
                      required
                      onChange={handleChange}
                      className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl text-sm font-black uppercase tracking-widest shadow-lg shadow-emerald-100 transition-all active:scale-[0.98] mt-4">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </main>

        <footer className="p-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest bg-white md:bg-transparent">
          © 2025 Patil Bhandu Hospital Management
        </footer>
      </div>
    </div>
  );
}
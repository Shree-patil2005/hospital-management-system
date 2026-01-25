import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Patient() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup
      ? "http://localhost:5000/api/patient/signup"
      : "http://localhost:5000/api/patient/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        if (!isSignup) {
          localStorage.setItem("patient", JSON.stringify(data.patient));
          navigate("/patient-dashboard");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Header (Consistent with MSRTC Style) */}
      <header className="bg-emerald-700 text-white py-2 px-4 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-md">
        <span>Emergency: 108 / 102</span>
        <div className="flex gap-4">
          
          <span className="cursor-pointer hover:underline" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Register"}
          </span>
        </div>
      </header>

      {/* 2. Brand Section */}
      <div className="bg-white py-4 px-6 flex justify-between items-center border-b shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h1 className="text-emerald-800 font-black text-xl md:text-2xl leading-tight uppercase">
              Patil Bhandu Hospital
            </h1>
            <p className="text-slate-500 text-xs md:text-sm font-bold">Comprehensive Patient Care & Management</p>
          </div>
        </div>
      </div>

      {/* 3. Main Content (The Grid System) */}
      <main className="grow max-w-7xl mx-auto w-full p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT COLUMN: The Form */}
        <div className="order-1 md:order-1 flex justify-center md:justify-start">
          <div className="bg-white shadow-2xl border border-emerald-100 rounded-2xl overflow-hidden w-full max-w-md">
            <div className="bg-emerald-600 p-5 flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide">
                {isSignup ? "Patient Registration" : "Patient Access"}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              {isSignup && (
                <div>
                  <label className="text-[10px] font-black text-emerald-600 block mb-1 uppercase tracking-widest">Full Name</label>
                  <input
                    required
                    name="name"
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
              )}
              
              <div>
                <label className="text-[10px] font-black text-emerald-600 block mb-1 uppercase tracking-widest">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="name@email.com"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-[10px] font-black text-emerald-600 block mb-1 uppercase tracking-widest">Password</label>
                <input
                  required
                  type="password"
                  name="password"
                  className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] uppercase text-sm tracking-widest"
              >
                {isSignup ? "Create Account" : "Secure Login"}
              </button>
              
              <p 
                className="text-xs text-center text-slate-500 mt-4 cursor-pointer hover:text-emerald-600 transition-colors font-medium"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Already have a patient ID? Login here" : "Don't have an account? Sign up now"}
              </p>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: Info Panel (Mobile Responsive: disappears/stays below) */}
        <div className="order-2 md:order-2 space-y-6">
          <div className="bg-emerald-50 p-6 md:p-10 rounded-3xl border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -mr-16 -mt-16"></div>
            
            <h2 className="text-2xl md:text-4xl font-black text-emerald-800 mb-4 leading-tight">
              Your Health, <br /> Our Commitment.
            </h2>
            
            <p className="text-emerald-700/80 leading-relaxed text-sm md:text-base mb-6">
              Access your medical history, book appointments, and connect with your doctors instantly through the Patil Bhandu Patient Portal.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100">
                <p className="text-emerald-600 font-bold text-xl">24/7</p>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Support</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100">
                <p className="text-emerald-600 font-bold text-xl">100%</p>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Secure Data</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* 5. Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 text-center">
        <p className="text-xs font-medium opacity-60">© 2025 Patil Bhandu Hospital Management System. All Rights Reserved.</p>
        <p className="text-[10px] text-emerald-500 mt-2 uppercase tracking-widest font-black">Quality Care Always</p>
      </footer>
    </div>
  );
}
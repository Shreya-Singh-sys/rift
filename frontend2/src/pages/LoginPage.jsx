// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { User, Lock, Mail, ArrowRight } from "lucide-react";

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);

//   // Animation variants for the flip effect
//   const variants = {
//     initial: { rotateY: -90, opacity: 0 },
//     animate: { rotateY: 0, opacity: 1 },
//     exit: { rotateY: 90, opacity: 0 },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-center justify-center p-6 font-inter">
//       {/* Background Decorative Blobs */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] bg-indigo-200/30 rounded-full blur-[100px]" />
//       </div>

//       <div className="relative w-full max-w-4xl h-[600px] perspective-1000">
//         <AnimatePresence mode="wait">
//           {isLogin ? (
//             <motion.div
//               key="login"
//               variants={variants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="absolute inset-0 bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-2xl flex overflow-hidden"
//             >
//               {/* Left Side: Welcome */}
//               <div className="hidden lg:flex w-1/2 bg-violet-600 items-center justify-center p-12 text-white">
//                 <div className="text-center">
//                   <h2 className="text-5xl font-black mb-6 tracking-tighter">WELCOME <br/> BACK!</h2>
//                   <p className="text-violet-100 font-medium opacity-90">Enter your details to continue your wellness journey.</p>
//                 </div>
//               </div>

//               {/* Right Side: Form */}
//               <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
//                 <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-widest">Login</h3>
//                 <div className="space-y-6">
//                   <InputGroup icon={<User size={20}/>} label="Username" placeholder="Enter username" />
//                   <InputGroup icon={<Lock size={20}/>} label="Password" type="password" placeholder="••••••••" />
                  
//                   <button className="w-full bg-violet-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all flex items-center justify-center gap-2 mt-4">
//                     LOGIN <ArrowRight size={20} />
//                   </button>
//                 </div>
//                 <p className="mt-8 text-center text-slate-500 font-bold text-sm">
//                   Don't have an account? 
//                   <button onClick={() => setIsLogin(false)} className="ml-2 text-violet-600 hover:underline">Sign Up</button>
//                 </p>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="register"
//               variants={variants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="absolute inset-0 bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-2xl flex flex-row-reverse overflow-hidden"
//             >
//               {/* Left Side: Welcome */}
//               <div className="hidden lg:flex w-1/2 bg-violet-600 items-center justify-center p-12 text-white">
//                 <div className="text-center">
//                   <h2 className="text-5xl font-black mb-6 tracking-tighter">WELCOME!</h2>
//                   <p className="text-violet-100 font-medium opacity-90">Join the Sentinel community and track your health today.</p>
//                 </div>
//               </div>

//               {/* Right Side: Form */}
//               <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
//                 <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-widest">Register</h3>
//                 <div className="space-y-5">
//                   <InputGroup icon={<User size={20}/>} label="Username" placeholder="Pick a username" />
//                   <InputGroup icon={<Mail size={20}/>} label="Email" placeholder="you@example.com" />
//                   <InputGroup icon={<Lock size={20}/>} label="Password" type="password" placeholder="Create password" />
                  
//                   <button className="w-full bg-violet-600 text-white py-4 rounded-2xl font-black shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all flex items-center justify-center gap-2 mt-2">
//                     REGISTER <ArrowRight size={20} />
//                   </button>
//                 </div>
//                 <p className="mt-8 text-center text-slate-500 font-bold text-sm">
//                   Already have an account? 
//                   <button onClick={() => setIsLogin(true)} className="ml-2 text-violet-600 hover:underline">Sign In</button>
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// function InputGroup({ icon, label, type = "text", placeholder }) {
//   return (
//     <div className="space-y-2">
//       <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</label>
//       <div className="relative group">
//         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-500 transition-colors">
//           {icon}
//         </div>
//         <input 
//           type={type}
//           placeholder={placeholder}
//           className="w-full bg-slate-50 border-2 border-slate-100 pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-violet-500 focus:bg-white transition-all font-medium text-slate-700"
//         />
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { User, Lock, Mail, ArrowRight, Activity, TrendingUp, Heart } from "lucide-react";
// import "./LoginPage.css";


// export default function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true);

//   // Animation variants mapped to the "diagonal hinge" flip in the video
//   const cardVariants = {
//     initial: { 
//       rotateY: -90, 
//       x: "15%", 
//       opacity: 0,
//       skewY: -5 
//     },
//     animate: { 
//       rotateY: 0, 
//       x: 0, 
//       opacity: 1,
//       skewY: 0,
//       transition: { 
//         duration: 0.8, 
//         ease: [0.22, 1, 0.36, 1] // Snappy "landing" effect
//       }
//     },
//     exit: { 
//       rotateY: 90, 
//       x: "-15%", 
//       opacity: 0,
//       skewY: 5,
//       transition: { duration: 0.5, ease: "easeIn" }
//     },
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 lg:p-8 overflow-hidden relative font-inter">
      
//       {/* Background Animated Blobs (Violet & Pink) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         <motion.div
//           animate={{ x: [0, 40, -20, 0], y: [0, 20, 40, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-[5%] right-[10%] w-[600px] h-[600px] bg-violet-200/40 rounded-full blur-[120px]"
//         />
//         <motion.div
//           animate={{ x: [0, -40, 20, 0], y: [0, 40, -20, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[100px]"
//         />
//       </div>

//       {/* 3D Perspective Wrapper */}
//       <div className="relative w-full max-w-5xl h-[650px] z-10" style={{ perspective: "2000px" }}>
//         <AnimatePresence mode="wait">
//           {isLogin ? (
//             <motion.div
//               key="login"
//               variants={cardVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               className="absolute inset-0 bg-white/80 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl flex overflow-hidden origin-center"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Left Side: Violet Branding */}
//               <div className="hidden lg:flex w-5/12 bg-violet-600 p-12 text-white flex-col justify-center relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)]" />
//                 <h2 className="text-6xl font-black leading-[0.9] mb-6 tracking-tighter z-10">
//                   WELCOME <br /> BACK!
//                 </h2>
//                 <p className="text-violet-100 font-medium z-10 opacity-90">
//                   Access your Sentinel wellness dashboard.
//                 </p>
//               </div>

//               {/* Right Side: Form */}
//               <div className="w-full lg:w-7/12 p-12 lg:p-20 flex flex-col justify-center">
//                 <header className="mb-10">
//                   <h3 className="text-xs font-black text-violet-500 uppercase tracking-[0.4em] mb-2">Platform Access</h3>
//                   <h1 className="text-4xl font-black text-slate-900 tracking-tight">Login</h1>
//                 </header>
                
//                 <div className="space-y-6">
//                   <Input icon={<User />} label="Username" placeholder="your_name" />
//                   <Input icon={<Lock />} label="Password" type="password" placeholder="••••••••" />
                  
//                   <button className="w-full bg-violet-600 text-white py-5 rounded-2xl font-black shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all flex items-center justify-center gap-3 mt-4 group">
//                     SIGN IN <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>

//                 <footer className="mt-12 text-center text-slate-500 font-bold text-sm">
//                   Don't have an account? 
//                   <button onClick={() => setIsLogin(false)} className="ml-2 text-violet-600 hover:underline">Create One</button>
//                 </footer>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="register"
//               variants={cardVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               className="absolute inset-0 bg-white/80 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl flex flex-row-reverse overflow-hidden origin-center"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Branding Sidebar */}
//               <div className="hidden lg:flex w-5/12 bg-violet-600 p-12 text-white flex-col justify-center relative overflow-hidden">
//                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.15),transparent)]" />
//                 <h2 className="text-6xl font-black leading-[0.9] mb-6 tracking-tighter z-10">
//                   JOIN THE <br /> MOVEMENT.
//                 </h2>
//                 <p className="text-violet-100 font-medium z-10 opacity-90">
//                   Start tracking your emotional health today.
//                 </p>
//               </div>

//               {/* Form Sidebar */}
//               <div className="w-full lg:w-7/12 p-12 lg:p-20 flex flex-col justify-center">
//                 <header className="mb-10">
//                   <h3 className="text-xs font-black text-violet-500 uppercase tracking-[0.4em] mb-2">Registration</h3>
//                   <h1 className="text-4xl font-black text-slate-900 tracking-tight">Sign Up</h1>
//                 </header>

//                 <div className="space-y-5">
//                   <Input icon={<User />} label="Full Name" placeholder="John Doe" />
//                   <Input icon={<Mail />} label="Email Address" placeholder="john@example.com" />
//                   <Input icon={<Lock />} label="Create Password" type="password" placeholder="••••••••" />
                  
//                   <button className="w-full bg-violet-600 text-white py-5 rounded-2xl font-black shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all flex items-center justify-center gap-3 mt-4 group">
//                     REGISTER NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>

//                 <footer className="mt-12 text-center text-slate-500 font-bold text-sm">
//                   Already a member? 
//                   <button onClick={() => setIsLogin(true)} className="ml-2 text-violet-600 hover:underline">Log In</button>
//                 </footer>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// // Reusable Input Component for clean code
// function Input({ icon, label, type = "text", placeholder }) {
//   return (
//     <div className="space-y-2">
//       <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">{label}</label>
//       <div className="relative group">
//         <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-600 transition-colors">
//           {React.cloneElement(icon, { size: 20 })}
//         </div>
//         <input 
//           type={type}
//           placeholder={placeholder}
//           className="w-full bg-slate-100/50 border-2 border-slate-100 pl-14 pr-6 py-4 rounded-2xl outline-none focus:border-violet-500 focus:bg-white transition-all font-medium text-slate-700 placeholder:text-slate-400"
//         />
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, Mail, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import "./LoginPage.css";

// ── Simple localStorage-based auth (no backend needed for auth) ──
const USERS_KEY = "aline_users";

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); } catch { return []; }
}
function saveUser(name, email, password) {
  const users = getUsers();
  if (users.find((u) => u.email === email)) return false; // duplicate
  users.push({ name, email, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}
function checkLogin(email, password) {
  const users = getUsers();
  return users.find((u) => u.email === email && u.password === password) || null;
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  // ── Login state ──
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // ── Register state ──
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");

  const cardVariants = {
    initial: { rotateY: -90, x: "15%", opacity: 0, skewY: -5 },
    animate: {
      rotateY: 0, x: 0, opacity: 1, skewY: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      rotateY: 90, x: "-15%", opacity: 0, skewY: 5,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const bubbleAnimate = (xRange, yRange, duration) => ({
    animate: { x: xRange, y: yRange },
    transition: { duration: duration / 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
  });

  // ── Handlers ──
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError("Please fill in all fields.");
      return;
    }
    const user = checkLogin(loginEmail.trim(), loginPassword);
    if (!user) {
      setLoginError("Invalid email or password. Register first if you don't have an account.");
      return;
    }
    localStorage.setItem("aline_current_user", user.name);
    window.location.assign("/dashboard");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegError("");
    setRegSuccess("");
    if (!regName.trim() || !regEmail.trim() || !regPassword.trim() || !regConfirm.trim()) {
      setRegError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regEmail)) {
      setRegError("Enter a valid email address.");
      return;
    }
    if (regPassword.length < 6) {
      setRegError("Password must be at least 6 characters.");
      return;
    }
    if (regPassword !== regConfirm) {
      setRegError("Passwords do not match.");
      return;
    }
    const ok = saveUser(regName.trim(), regEmail.trim(), regPassword);
    if (!ok) {
      setRegError("An account with this email already exists.");
      return;
    }
    setRegSuccess("Account created! Redirecting to login...");
    setTimeout(() => {
      setRegSuccess("");
      setRegName(""); setRegEmail(""); setRegPassword(""); setRegConfirm("");
      setIsLogin(true);
    }, 1500);
  };

  const switchToRegister = () => { setLoginError(""); setIsLogin(false); };
  const switchToLogin    = () => { setRegError(""); setRegSuccess(""); setIsLogin(true); };

  return (
    <div className="auth-page-root">
      <button
        type="button"
        className="absolute top-5 left-5 z-30 border border-violet-300 bg-white/90 text-violet-700 rounded-full px-4 py-2 font-extrabold shadow-lg shadow-violet-200 hover:bg-white transition-all"
        onClick={() => window.location.assign("/")}
      >
        ← Home
      </button>

      {/* Background Blobs */}
      <div className="blob-container">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, 20, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="bg-blob blob-violet"
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="bg-blob blob-pink"
        />
      </div>

      <div className="perspective-container">
        <AnimatePresence mode="wait">

          {/* ── LOGIN CARD ── */}
          {isLogin ? (
            <motion.div key="login" variants={cardVariants} initial="initial" animate="animate" exit="exit" className="auth-card">
              <div className="auth-sidebar">
                <motion.div className="bubble b1" {...bubbleAnimate([0, 15], [0, 25], 4)} />
                <motion.div className="bubble b2" {...bubbleAnimate([0, -20], [0, -30], 6)} />
                <motion.div className="bubble b3" {...bubbleAnimate([0, 10], [0, 15], 5)} />
                <motion.div className="bubble b4" {...bubbleAnimate([0, -10], [0, 20], 7)} />
                <motion.div className="bubble b5" {...bubbleAnimate([0, 20], [0, -10], 8)} />
                <motion.div className="bubble b6" {...bubbleAnimate([0, -15], [0, -15], 9)} />
                <div className="sidebar-overlay" />
                <h2 className="sidebar-title">WELCOME<br />BACK!</h2>
                <p className="sidebar-subtitle">Sign in to launch the Aline.AI healing agent.</p>
              </div>

              <div className="auth-form-area">
                <header className="form-header">
                  <h3 className="form-category">Platform Access</h3>
                  <h1 className="form-title">Login</h1>
                </header>
                <form className="form-inputs" onSubmit={handleLogin} noValidate>
                  <ControlledInput
                    icon={<Mail />} label="Email Address"
                    type="email" placeholder="you@example.com"
                    value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <ControlledInput
                    icon={<Lock />} label="Password"
                    type="password" placeholder="••••••••"
                    value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  {loginError && (
                    <div className="auth-error">
                      <AlertCircle size={15} /> {loginError}
                    </div>
                  )}
                  <button type="submit" className="btn-submit">
                    SIGN IN <ArrowRight className="btn-icon" />
                  </button>
                </form>
                <footer className="form-footer">
                  Don't have an account?{" "}
                  <button type="button" onClick={switchToRegister} className="toggle-btn">Create One</button>
                </footer>
              </div>
            </motion.div>

          ) : (
            /* ── REGISTER CARD ── */
            <motion.div key="register" variants={cardVariants} initial="initial" animate="animate" exit="exit" className="auth-card reverse">
              <div className="auth-sidebar">
                <motion.div className="bubble b1" {...bubbleAnimate([0, 15], [0, 25], 4)} />
                <motion.div className="bubble b2" {...bubbleAnimate([0, -20], [0, -30], 6)} />
                <motion.div className="bubble b3" {...bubbleAnimate([0, 10], [0, 15], 5)} />
                <motion.div className="bubble b4" {...bubbleAnimate([0, -10], [0, 20], 7)} />
                <motion.div className="bubble b5" {...bubbleAnimate([0, 20], [0, -10], 8)} />
                <motion.div className="bubble b6" {...bubbleAnimate([0, -15], [0, -15], 9)} />
                <div className="sidebar-overlay" />
                <h2 className="sidebar-title">JOIN THE<br />MISSION.</h2>
                <p className="sidebar-subtitle">Create your account and start healing CI/CD pipelines with AI.</p>
              </div>

              <div className="auth-form-area">
                <header className="form-header">
                  <h3 className="form-category">Registration</h3>
                  <h1 className="form-title">Sign Up</h1>
                </header>
                <form className="form-inputs" onSubmit={handleRegister} noValidate>
                  <ControlledInput
                    icon={<User />} label="Full Name"
                    placeholder="Akhand Pratap Singh"
                    value={regName} onChange={(e) => setRegName(e.target.value)}
                  />
                  <ControlledInput
                    icon={<Mail />} label="Email Address"
                    type="email" placeholder="you@example.com"
                    value={regEmail} onChange={(e) => setRegEmail(e.target.value)}
                  />
                  <ControlledInput
                    icon={<Lock />} label="Password"
                    type="password" placeholder="Min. 6 characters"
                    value={regPassword} onChange={(e) => setRegPassword(e.target.value)}
                  />
                  <ControlledInput
                    icon={<Lock />} label="Confirm Password"
                    type="password" placeholder="Repeat password"
                    value={regConfirm} onChange={(e) => setRegConfirm(e.target.value)}
                  />
                  {regError && (
                    <div className="auth-error">
                      <AlertCircle size={15} /> {regError}
                    </div>
                  )}
                  {regSuccess && (
                    <div className="auth-success">
                      <CheckCircle2 size={15} /> {regSuccess}
                    </div>
                  )}
                  <button type="submit" className="btn-submit">
                    CREATE ACCOUNT <ArrowRight className="btn-icon" />
                  </button>
                </form>
                <footer className="form-footer">
                  Already a member?{" "}
                  <button type="button" onClick={switchToLogin} className="toggle-btn">Log In</button>
                </footer>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ControlledInput({ icon, label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <div className="input-field-wrapper group">
        <div className="input-icon">{React.cloneElement(icon, { size: 20 })}</div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-field"
          autoComplete={type === "password" ? "current-password" : type === "email" ? "email" : "name"}
        />
      </div>
    </div>
  );
}

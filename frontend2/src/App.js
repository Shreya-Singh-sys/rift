// import { motion } from "framer-motion";
// import { ArrowRight, BarChart3, Brain, Sparkles } from "lucide-react";

// export default function App() {
//   return (
//     <div className="bg-darkbg text-white min-h-screen overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       <DashboardPreview />
//       <Features />
//       <Footer />
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */

// function Navbar() {
//   return (
//     <div className="flex justify-between items-center px-8 py-6">
//       <h1 className="text-xl font-bold">Anius</h1>
//       <div className="hidden md:flex gap-8 text-gray-300">
//         <a href="#">About</a>
//         <a href="#">Features</a>
//         <a href="#">Pricing</a>
//         <a href="#">Blog</a>
//       </div>
//       <button className="bg-primary px-5 py-2 rounded-full shadow-glow">
//         Buy template
//       </button>
//     </div>
//   );
// }

// /* ================= HERO ================= */

// function Hero() {
//   return (
//     <section className="relative text-center pt-20 pb-32">
      
//       {/* Glowing Background */}
//       <div className="absolute inset-0 flex justify-center">
//         <div className="w-[500px] h-[500px] bg-primary opacity-20 blur-3xl rounded-full"></div>
//       </div>

//       {/* Animated Dots Circle */}
//       <motion.div
//         initial={{ rotate: 0 }}
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//         className="mx-auto mb-10 w-64 h-64 rounded-full border border-purple-500 flex items-center justify-center relative"
//       >
//         <Brain className="text-primary w-12 h-12" />
//       </motion.div>

//       <p className="text-gray-400 mb-6">
//         Our AI-powered suite empowers your business
//       </p>

//       <h1 className="text-5xl md:text-6xl font-bold mb-8">
//         Building AI solution
//       </h1>

//       <div className="flex justify-center gap-6">
//         <button className="bg-primary px-6 py-3 rounded-full shadow-glow">
//           Get started
//         </button>
//         <button className="bg-white text-black px-6 py-3 rounded-full">
//           Contact sale
//         </button>
//       </div>
//     </section>
//   );
// }

// /* ================= DASHBOARD PREVIEW ================= */

// function DashboardPreview() {
//   return (
//     <section className="px-6 md:px-20 mb-32">
//       <div className="bg-[#0F172A] rounded-3xl p-8 backdrop-blur-lg border border-purple-500/20 shadow-xl">
//         <div className="grid md:grid-cols-2 gap-10">

//           {/* Left Content */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">
//               The Potential of AI Power
//             </h2>
//             <p className="text-gray-400 mb-6">
//               Unlock new possibilities with AI-driven insights and automation.
//             </p>

//             <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-xl">
//               <Sparkles className="mb-4" />
//               <p>AI Generated Article Preview</p>
//             </div>
//           </div>

//           {/* Right Chart Preview */}
//           <div className="flex items-center justify-center">
//             <BarChart3 className="w-32 h-32 text-primary" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= FEATURES ================= */

// function Features() {
//   const features = [
//     {
//       icon: <Sparkles />,
//       title: "AI-Powered Collaboration",
//       desc: "Experience seamless teamwork.",
//     },
//     {
//       icon: <Brain />,
//       title: "Effortless Scheduling",
//       desc: "AI manages your workflow.",
//     },
//     {
//       icon: <ArrowRight />,
//       title: "AI Expansion",
//       desc: "Extend AI into your ecosystem.",
//     },
//   ];

//   return (
//     <section className="text-center px-6 pb-32">
//       <h2 className="text-4xl font-bold mb-16">
//         Artistry at Your Fingertips
//       </h2>

//       <div className="grid md:grid-cols-3 gap-10">
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#0F172A] p-8 rounded-2xl border border-purple-500/20 backdrop-blur-lg"
//           >
//             <div className="text-primary mb-4">{item.icon}</div>
//             <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//             <p className="text-gray-400">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= FOOTER ================= */

// function Footer() {
//   return (
//     <footer className="text-center py-12 border-t border-purple-500/20">
//       <h2 className="text-3xl font-bold">
//         Business Growth through AI Excellence
//       </h2>
//     </footer>
//   );
// }


// import { motion } from "framer-motion";
// import { GitBranch, Cpu, ShieldCheck, Zap } from "lucide-react";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#050816_100%)] text-white overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       <AgentFlow />
//       <Features />
//       <Footer />
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */

// function Navbar() {
//   return (
//     <div className="flex justify-between items-center px-8 py-6">
//       <h1 className="text-xl font-bold text-purple-400">
//         RIFT AI DevOps Agent
//       </h1>
//       <button className="bg-purple-600 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition">
//         Launch Agent
//       </button>
//     </div>
//   );
// }

// /* ================= HERO ================= */

// function Hero() {
//   return (
//     <section className="text-center py-24 relative">
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl md:text-6xl font-bold mb-6"
//       >
//         Autonomous CI/CD Failure
//         <span className="text-purple-400"> Fixing Agent</span>
//       </motion.h1>

//       <p className="text-gray-400 max-w-2xl mx-auto mb-8">
//         AI-powered multi-agent system that detects, fixes, verifies,
//         and redeploys your broken pipelines automatically.
//       </p>

//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="flex justify-center gap-6"
//       >
//         <button className="bg-purple-600 px-6 py-3 rounded-full shadow-purple-500/40 shadow-lg hover:scale-105 transition">
//           Analyze Repository
//         </button>
//         <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
//           View Dashboard
//         </button>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= AI AGENT FLOW VISUAL ================= */

// function AgentFlow() {
//   const steps = [
//     "Clone Repository",
//     "Run Tests",
//     "Detect Failures",
//     "Generate Fix",
//     "Commit & Push",
//     "Monitor CI",
//   ];

//   return (
//     <section className="py-24 px-6">
//       <h2 className="text-3xl font-bold text-center mb-16">
//         AI Agent Workflow
//       </h2>

//       <div className="flex flex-wrap justify-center gap-10">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.1 }}
//             className="bg-[#111827] p-6 rounded-xl border border-purple-500/20 backdrop-blur-lg text-center w-52"
//           >
//             <Cpu className="mx-auto mb-4 text-purple-400" />
//             <p>{step}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= FEATURES ================= */

// function Features() {
//   const features = [
//     {
//       icon: <ShieldCheck />,
//       title: "Sandboxed Execution",
//       desc: "Secure Docker-based code execution.",
//     },
//     {
//       icon: <GitBranch />,
//       title: "Smart Branch Naming",
//       desc: "Automatic TEAM_LEADER_AI_Fix format enforcement.",
//     },
//     {
//       icon: <Zap />,
//       title: "Retry Intelligence",
//       desc: "Adaptive fix strategy across CI iterations.",
//     },
//   ];

//   return (
//     <section className="py-24 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-16">
//         Enterprise-Grade Reliability
//       </h2>

//       <div className="grid md:grid-cols-3 gap-10">
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#111827] p-8 rounded-2xl border border-purple-500/20 backdrop-blur-lg"
//           >
//             <div className="text-purple-400 mb-4 flex justify-center">
//               {item.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//             <p className="text-gray-400">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= FOOTER ================= */

// function Footer() {
//   return (
//     <footer className="py-12 text-center border-t border-purple-500/20">
//       <p className="text-gray-400">
//         © 2026 RIFT Autonomous DevOps Agent — Built for CI/CD Excellence
//       </p>
//     </footer>
//   );
// }





// import { motion } from "framer-motion";
// import { Search, Sparkles, Image, Headphones } from "lucide-react";

// export default function App() {
//   return (
//     <div className="bg-[#f8f9fc] min-h-screen text-gray-900">
//       <Navbar />
//       <Hero />
//       <Gallery />
//       <Features />
//       <CTASection />
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */

// function Navbar() {
//   return (
//     <div className="flex justify-between items-center px-8 py-6 bg-white shadow-sm">
//       <h1 className="text-xl font-bold text-purple-600">Aine</h1>

//       <div className="hidden md:flex gap-8 text-gray-600">
//         <a href="#">Home</a>
//         <a href="#">Pages</a>
//         <a href="#">Portfolio</a>
//         <a href="#">Blog</a>
//         <a href="#">Contact</a>
//       </div>

//       <div className="flex gap-4 items-center">
//         <button className="text-gray-600">Login</button>
//         <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition">
//           Join AI
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ================= HERO ================= */

// function Hero() {
//   return (
//     <section className="px-8 md:px-20 py-20 grid md:grid-cols-2 gap-10 items-center">
      
//       {/* LEFT CONTENT */}
//       <div>
//         <p className="text-purple-600 font-semibold mb-4">
//           NEXT-GENERATION OF AI IMAGES
//         </p>

//         <h1 className="text-5xl font-bold leading-tight mb-6">
//           Imagine AI based
//           <br />
//           developer platform
//         </h1>

//         <p className="text-gray-600 mb-8">
//           Cost-effective solution to generate powerful AI tools and art generation.
//           What will you create?
//         </p>

//         {/* SEARCH BAR */}
//         <div className="flex bg-white rounded-xl shadow-md overflow-hidden max-w-lg">
//           <input
//             type="text"
//             placeholder="Search styles for AI images"
//             className="flex-1 px-4 py-3 outline-none"
//           />
//           <select className="px-3 bg-gray-100 border-none outline-none">
//             <option>Replicate</option>
//             <option>DALL·E</option>
//           </select>
//           <button className="bg-purple-600 text-white px-6 hover:bg-purple-700 transition">
//             Generate
//           </button>
//         </div>

//         {/* TAGS */}
//         <div className="flex gap-3 mt-6 flex-wrap">
//           {["Business", "Intelligence", "Corporate"].map((tag, index) => (
//             <span
//               key={index}
//               className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT IMAGE PLACEHOLDER */}
//       <motion.div
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="flex justify-center"
//       >
//         <img
//           src="/ai1.jpeg"
//           alt="Robot hand holding an AI brain"
//           className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
//         />
//       </motion.div>
//     </section>
//   );
// }

// /* ================= GALLERY ================= */

// function Gallery() {
//   const images = [1, 2, 3, 4];

//   return (
//     <section className="px-8 md:px-20 py-20">
//       <div className="grid md:grid-cols-4 gap-6">
//         {images.map((_, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             className="h-60 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl shadow-lg"
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= FEATURES ================= */

// function Features() {
//   const features = [
//     {
//       icon: <Image size={30} />,
//       title: "Image generator",
//       desc: "Create stunning AI-powered visuals easily.",
//     },
//     {
//       icon: <Sparkles size={30} />,
//       title: "Creative tools",
//       desc: "Professional AI design features.",
//     },
//     {
//       icon: <Search size={30} />,
//       title: "Ease of access",
//       desc: "Simple and intuitive interface.",
//     },
//     {
//       icon: <Headphones size={30} />,
//       title: "Excellent support",
//       desc: "24/7 expert assistance.",
//     },
//   ];

//   return (
//     <section className="bg-white py-20 px-8 md:px-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold">
//           Bring your imagination to the screen
//         </h2>
//         <p className="text-gray-600 mt-4">
//           Create something that has never been seen before.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-4 gap-10">
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -8 }}
//             className="bg-[#f9fafc] p-8 rounded-xl shadow-md text-center"
//           >
//             <div className="text-purple-600 mb-4 flex justify-center">
//               {item.icon}
//             </div>
//             <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= CTA ================= */

// function CTASection() {
//   return (
//     <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
//       <h2 className="text-4xl font-bold mb-6">
//         How to generate AI images
//       </h2>
//       <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
//         Open AI Image Generator
//       </button>
//     </section>
//   );
// }



// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Search, Sparkles, Terminal, Cpu, Zap, Activity, Github, CheckCircle, AlertCircle } from "lucide-react";

// export default function App() {
//   return (
//     <div className="bg-[#f8f9fc] min-h-screen text-gray-900 font-sans">
//       <Navbar />
//       <Hero />
//       <AgentStats />
//       <PipelineMonitor />
//       <Features />
//       <CTASection />
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */

// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
//       <div className="flex items-center gap-2">
//         <div className="bg-indigo-600 p-1.5 rounded-lg">
//           <Zap className="text-white" size={20} />
//         </div>
//         <h1 className="text-xl font-bold tracking-tight text-indigo-600">AeroFix AI</h1>
//       </div>

//       <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
//         <a href="#" className="hover:text-indigo-600 transition">Agent Logs</a>
//         <a href="#" className="hover:text-indigo-600 transition">Integrations</a>
//         <a href="#" className="hover:text-indigo-600 transition">Performance</a>
//         <a href="#" className="hover:text-indigo-600 transition">Docs</a>
//       </div>

//       <div className="flex gap-4 items-center">
//         <button className="text-sm font-medium text-gray-600">Sign In</button>
//         <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 shadow-md transition">
//           Deploy Agent
//         </button>
//       </div>
//     </nav>
//   );
// }

// /* ================= HERO (REACTIONARY REPO INPUT) ================= */

// function Hero() {
//   return (
//     <section className="px-8 md:px-20 py-24 grid md:grid-cols-2 gap-12 items-center">
//       <div>
//         <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide">
//           <Sparkles size={14} /> AGENTIC SYSTEMS TRACK 2026
//         </div>

//         <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-slate-900">
//           Autonomous CI/CD
//           <br />
//           <span className="text-indigo-600">Healing Agent</span>
//         </h1>

//         <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
//           The first agentic developer platform that clones, analyzes, and heals 
//           failing pipelines automatically. Zero human intervention required.
//         </p>

//         {/* REPO SEARCH BAR */}
//         <div className="flex bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-1.5 max-w-xl">
//           <div className="flex items-center pl-4 text-slate-400">
//             <Github size={20} />
//           </div>
//           <input
//             type="text"
//             placeholder="Enter GitHub Repository URL..."
//             className="flex-1 px-4 py-4 outline-none text-slate-700 placeholder:text-slate-400"
//           />
//           <button className="bg-indigo-600 text-white px-8 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2">
//             Heal Repo <Zap size={18} fill="currentColor" />
//           </button>
//         </div>

//         <div className="flex gap-4 mt-8 flex-wrap">
//           {["Python", "Node.js", "Go", "TypeScript"].map((tag, index) => (
//             <span key={index} className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-md text-xs font-bold border border-slate-200">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* AGENT VISUALIZATION */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative"
//       >
//         <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800">
//            <div className="flex items-center gap-2 mb-4">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               <span className="text-slate-500 text-xs font-mono ml-2">agent@aerofix: ~ /bin/bash</span>
//            </div>
//            <div className="font-mono text-sm space-y-2 text-indigo-400">
//               <p className="text-white">$ aerofix analyze https://github.com/app/main</p>
//               <p className="text-slate-400">● Scanning repository structure...</p>
//               <p className="text-red-400">✖ Logic error found in src/auth.ts:142</p>
//               <p className="text-green-400">✔ Generating targeted fix using AI-01...</p>
//               <p className="text-slate-400">● Running CI verification tests...</p>
//               <p className="text-green-500 font-bold animate-pulse">● PIPELINE HEALED: 100% Success</p>
//            </div>
//         </div>
//         <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
//            <div className="flex items-center gap-3">
//               <Activity className="text-indigo-600" />
//               <div>
//                  <p className="text-xs text-slate-500 font-bold">RECOVERY RATE</p>
//                  <p className="text-xl font-black text-slate-900">94.8%</p>
//               </div>
//            </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= PIPELINE MONITOR ================= */

// function PipelineMonitor() {
//   const tasks = [
//     { id: "FE-90", status: "Fixed", icon: <CheckCircle className="text-green-500" />, type: "Syntax" },
//     { id: "BE-12", status: "Healing", icon: <Activity className="text-indigo-500 animate-spin" />, type: "Logic" },
//     { id: "CI-04", status: "Fixed", icon: <CheckCircle className="text-green-500" />, type: "Dependency" },
//     { id: "QA-88", status: "Analyzing", icon: <Search className="text-slate-400" />, type: "Security" },
//   ];

//   return (
//     <section className="px-8 md:px-20 py-10">
//       <h2 className="text-sm font-black text-slate-400 mb-6 tracking-widest uppercase">Live Agent Activity</h2>
//       <div className="grid md:grid-cols-4 gap-6">
//         {tasks.map((task, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -5 }}
//             className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between"
//           >
//             <div>
//               <p className="text-xs font-bold text-slate-400">{task.id}</p>
//               <p className="font-bold text-slate-800">{task.type} Fix</p>
//               <p className="text-xs text-indigo-600 font-medium">{task.status}</p>
//             </div>
//             {task.icon}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= FEATURES ================= */

// function Features() {
//   const features = [
//     {
//       icon: <Terminal size={30} />,
//       title: "Autonomous Repair",
//       desc: "Agent clones and fixes broken code automatically.",
//     },
//     {
//       icon: <Cpu size={30} />,
//       title: "Agentic Logic",
//       desc: "Multi-agent systems verify fixes before committing.",
//     },
//     {
//       icon: <Activity size={30} />,
//       title: "CI/CD Monitor",
//       desc: "Real-time dashboard for all pipeline health metrics.",
//     },
//     {
//       icon: <AlertCircle size={30} />,
//       title: "Root Cause Analysis",
//       desc: "Instant breakdown of why the build failed initially.",
//     },
//   ];

//   return (
//     <section className="bg-slate-50 py-24 px-8 md:px-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-slate-900">
//           DevOps Automation Reimagined
//         </h2>
//         <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
//           Let your AI agent handle the 4 AM pager calls. AeroFix detects, debugs, and deploys 
//           emergency fixes while you sleep.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-4 gap-10">
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
//             className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 text-center transition-all"
//           >
//             <div className="text-indigo-600 mb-6 flex justify-center">
//               {item.icon}
//             </div>
//             <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
//             <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= AGENT STATS COMPONENT ================= */
// function AgentStats() {
//   const slides = [
//     {
//       title: "Pipeline Recovery + Refactors",
//       bullets: [
//         "CI/CD failure triage",
//         "Dependency drift cleanup",
//         "Automated rollback fallback",
//       ],
//       ticket: "Fix failing workflow in .github/workflows/deploy.yml",
//       metric: "94.8%",
//       metricLabel: "RECOVERY RATE",
//     },
//     {
//       title: "Data Engineering + Analysis",
//       bullets: [
//         "ETL job regression fixes",
//         "Schema migration validation",
//         "Runtime memory optimizations",
//       ],
//       ticket: "Patch ETL null pointer in jobs/transform.ts",
//       metric: "47s",
//       metricLabel: "AVG FIX TIME",
//     },
//     {
//       title: "Bugs + Backlog Work",
//       bullets: [
//         "Ticket resolution",
//         "Flaky test stabilization",
//         "Backlog PR auto-generation",
//       ],
//       ticket: "Resolve auth race condition in src/auth.ts",
//       metric: "12",
//       metricLabel: "ACTIVE JOBS",
//     },
//   ];
//   const [active, setActive] = useState(0);
//   const current = slides[active];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 3200);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   return (
//     <section className="px-8 md:px-20 py-12 bg-white border-y border-slate-100">
//       <div className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-400 rounded-3xl p-4 md:p-6 shadow-xl border border-cyan-300/30 overflow-hidden">
//         <div className="grid grid-cols-12 gap-3 md:gap-4">
//           <div className="hidden md:block col-span-1 rounded-2xl bg-white/20 backdrop-blur-sm min-h-[280px]" />
//           <div className="hidden md:block col-span-1 rounded-2xl bg-white/25 backdrop-blur-sm min-h-[280px]" />

//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 10, scale: 0.98 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.45 }}
//             className="col-span-12 md:col-span-9 rounded-2xl bg-white/10 border border-white/30 backdrop-blur-sm p-5 md:p-6"
//           >
//             <div className="grid md:grid-cols-2 gap-6 items-center">
//               <div className="text-white">
//                 <h3 className="text-3xl font-bold mb-5 leading-tight">{current.title}</h3>
//                 <ul className="space-y-3 text-cyan-50/95">
//                   {current.bullets.map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
//                       <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/90" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex items-center gap-2 mt-8">
//                   {slides.map((_, idx) => (
//                     <button
//                       key={idx}
//                       type="button"
//                       onClick={() => setActive(idx)}
//                       className={`h-1.5 rounded-full transition-all ${
//                         idx === active ? "w-9 bg-white" : "w-5 bg-white/50"
//                       }`}
//                       aria-label={`Show slide ${idx + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-4 text-slate-700">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="rounded-lg border border-slate-100 p-3">
//                     <p className="text-[11px] font-black text-slate-400 uppercase mb-2">Fix Task</p>
//                     <p className="text-xs leading-relaxed">{current.ticket}</p>
//                   </div>
//                   <div className="rounded-lg border border-slate-100 p-3">
//                     <p className="text-[11px] font-black text-slate-400 uppercase mb-2">Agent Workspace</p>
//                     <p className="text-xs font-mono text-indigo-600">$ run heal --target=repo</p>
//                     <p className="text-xs font-mono text-slate-500 mt-2">tests: pass</p>
//                     <p className="text-xs font-mono text-green-600">status: healed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <div className="hidden md:flex col-span-1 rounded-2xl bg-white/20 backdrop-blur-sm min-h-[280px] items-end justify-center p-3">
//             <div className="text-center text-white">
//               <p className="text-[10px] font-bold tracking-wider">{current.metricLabel}</p>
//               <p className="text-2xl font-black">{current.metric}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// /* ================= CTA ================= */

// function CTASection() {
//   return (
//     <section className="py-24 px-8 text-center bg-indigo-600 text-white relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//           <div className="grid grid-cols-12 h-full w-full">
//             {Array.from({length: 144}).map((_, i) => (
//               <div key={i} className="border border-white/20 h-20 w-full"></div>
//             ))}
//           </div>
//       </div>
      
//       <div className="relative z-10">
//         <h2 className="text-4xl md:text-5xl font-black mb-8">
//           Stop Debugging. Start Building.
//         </h2>
//         <p className="mb-10 text-indigo-100 text-lg max-w-xl mx-auto">
//           Integrate the AeroFix Agent into your GitHub Actions or GitLab CI in under 2 minutes.
//         </p>
//         <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 shadow-2xl transition-all flex items-center gap-3 mx-auto">
//           Start Autonomous Healing <Terminal size={20} />
//         </button>
//       </div>
//     </section>
//   );
// }



// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Search, Sparkles, Terminal, Cpu, Zap, 
//   Activity, Github, CheckCircle, AlertCircle 
// } from "lucide-react";

// export default function App() {
//   return (
//     <div className="bg-[#f8f9fc] min-h-screen text-gray-900 font-sans">
//       <Navbar />
//       <Hero />
//       <AgentStats />
//       <PipelineMonitor />
//       <Features />
//       <CTASection />
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */
// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
//       <div className="flex items-center gap-2">
//         <div className="bg-violet-600 p-1.5 rounded-lg shadow-lg shadow-violet-200">
//           <Zap className="text-white" size={20} />
//         </div>
//         <h1 className="text-xl font-bold tracking-tight text-violet-600">AeroFix AI</h1>
//       </div>

//       <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
//         <a href="#" className="hover:text-violet-600 transition">Agent Logs</a>
//         <a href="#" className="hover:text-violet-600 transition">Integrations</a>
//         <a href="#" className="hover:text-violet-600 transition">Performance</a>
//         <a href="#" className="hover:text-violet-600 transition">Docs</a>
//       </div>

//       <div className="flex gap-4 items-center">
//         <button className="text-sm font-medium text-gray-600">Sign In</button>
//         <button className="bg-violet-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-violet-700 shadow-md transition-all">
//           Deploy Agent
//         </button>
//       </div>
//     </nav>
//   );
// }

// /* ================= HERO ================= */
// function Hero() {
//   return (
//     <section className="px-8 md:px-20 py-24 grid md:grid-cols-2 gap-12 items-center">
//       <motion.div
//         initial={{ opacity: 0, x: -30 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-wide border border-violet-100">
//           <Sparkles size={14} /> AGENTIC SYSTEMS TRACK 2026
//         </div>

//         <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-slate-900">
//           Autonomous CI/CD
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
//             Healing Agent
//           </span>
//         </h1>

//         <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
//           The first agentic developer platform that clones, analyzes, and heals 
//           failing pipelines automatically. Zero human intervention required.
//         </p>

//         {/* REPO SEARCH BAR */}
//         <div className="flex bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-1.5 max-w-xl">
//           <div className="flex items-center pl-4 text-slate-400">
//             <Github size={20} />
//           </div>
//           <input
//             type="text"
//             placeholder="Enter GitHub Repository URL..."
//             className="flex-1 px-4 py-4 outline-none text-slate-700 placeholder:text-slate-400"
//           />
//           <button className="bg-violet-600 text-white px-8 rounded-xl font-bold hover:bg-violet-700 transition-all flex items-center gap-2">
//             Heal Repo <Zap size={18} fill="currentColor" />
//           </button>
//         </div>
//       </motion.div>

//       {/* AGENT TERMINAL VISUALIZATION */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative"
//       >
//         <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800">
//           <div className="flex items-center gap-2 mb-4">
//             <div className="w-3 h-3 rounded-full bg-red-500"></div>
//             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//             <div className="w-3 h-3 rounded-full bg-green-500"></div>
//             <span className="text-slate-500 text-xs font-mono ml-2">agent@aerofix: ~ /bin/bash</span>
//           </div>
//           <div className="font-mono text-sm space-y-2 text-violet-400">
//             <p className="text-white">$ aerofix analyze https://github.com/repo/main</p>
//             <p className="text-slate-400">● Scanning repository structure...</p>
//             <p className="text-rose-400">✖ Logic error found in src/auth.ts:142</p>
//             <p className="text-emerald-400">✔ Generating targeted fix using AI-01...</p>
//             <p className="text-slate-400">● Running CI verification tests...</p>
//             <p className="text-emerald-500 font-bold animate-pulse">● PIPELINE HEALED: 100% Success</p>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= AGENT STATS (VIOLET CAROUSEL) ================= */
// function AgentStats() {
//   const slides = [
//     {
//       title: "Pipeline Recovery + Refactors",
//       bullets: ["CI/CD failure triage & auto-fix", "Dependency drift cleanup", "Automated rollback fallback"],
//       ticket: "Fix failing workflow in .github/workflows/deploy.yml",
//       metric: "94.8%",
//       metricLabel: "RECOVERY RATE",
//     },
//     {
//       title: "Data Engineering + Analysis",
//       bullets: ["ETL job regression fixes", "Schema migration validation", "Runtime memory optimizations"],
//       ticket: "Patch ETL null pointer in jobs/transform.ts",
//       metric: "47s",
//       metricLabel: "AVG FIX TIME",
//     },
//     {
//       title: "Bugs + Backlog Work",
//       bullets: ["Auto-ticket resolution", "Flaky test stabilization", "Backlog PR generation"],
//       ticket: "Resolve auth race condition in src/auth.ts",
//       metric: "12",
//       metricLabel: "ACTIVE JOBS",
//     },
//   ];

//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((prev) => (prev + 1) % slides.length);
//     }, 4500);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const current = slides[active];

//   return (
//     <section className="px-8 md:px-20 py-16 bg-white border-y border-slate-100">
//       <div className="bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-500 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
//         <div className="bg-white/5 backdrop-blur-md rounded-[2.3rem] p-8 md:p-12 border border-white/20">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
//             <motion.div 
//               key={`text-${active}`}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="md:col-span-7 text-white"
//             >
//               <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">{current.title}</h3>
//               <ul className="space-y-4 mb-10">
//                 {current.bullets.map((item, idx) => (
//                   <li key={idx} className="flex items-center gap-3 text-lg font-medium text-purple-100">
//                     <div className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex gap-3">
//                 {slides.map((_, idx) => (
//                   <button key={idx} onClick={() => setActive(idx)} className={`h-2 rounded-full transition-all duration-500 ${idx === active ? "w-12 bg-white" : "w-3 bg-white/30"}`} />
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div 
//               key={`card-${active}`}
//               initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
//               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//               className="md:col-span-5"
//             >
//               <div className="bg-white rounded-3xl shadow-2xl p-6 border border-slate-200">
//                 <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4 text-violet-600">
//                   <Terminal size={18} />
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Agent Workspace</span>
//                 </div>
//                 <div className="space-y-6">
//                   <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
//                     <p className="text-[10px] font-black text-violet-600 uppercase mb-2">Target Task</p>
//                     <p className="text-sm font-semibold text-slate-700">{current.ticket}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="p-4 bg-violet-50 rounded-2xl border border-violet-100 text-center">
//                       <p className="text-[10px] font-bold text-violet-400 uppercase mb-1">{current.metricLabel}</p>
//                       <p className="text-2xl font-black text-violet-700">{current.metric}</p>
//                     </div>
//                     <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
//                       <p className="text-[10px] font-bold text-emerald-400 uppercase mb-1">Status</p>
//                       <div className="flex items-center justify-center gap-1">
//                         <CheckCircle size={14} className="text-emerald-500" />
//                         <p className="text-sm font-bold text-emerald-700">Verified</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= PIPELINE MONITOR ================= */
// function PipelineMonitor() {
//   const tasks = [
//     { id: "FE-90", status: "Fixed", icon: <CheckCircle className="text-emerald-500" />, type: "Syntax" },
//     { id: "BE-12", status: "Healing", icon: <Activity className="text-violet-500 animate-spin" />, type: "Logic" },
//     { id: "CI-04", status: "Fixed", icon: <CheckCircle className="text-emerald-500" />, type: "Dependency" },
//     { id: "QA-88", status: "Analyzing", icon: <Search className="text-slate-400" />, type: "Security" },
//   ];

//   return (
//     <section className="px-8 md:px-20 py-10">
//       <h2 className="text-sm font-black text-slate-400 mb-6 tracking-widest uppercase">Live Agent Activity</h2>
//       <div className="grid md:grid-cols-4 gap-6">
//         {tasks.map((task, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -5 }}
//             className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between"
//           >
//             <div>
//               <p className="text-xs font-bold text-slate-400">{task.id}</p>
//               <p className="font-bold text-slate-800">{task.type} Fix</p>
//               <p className="text-xs text-violet-600 font-medium">{task.status}</p>
//             </div>
//             {task.icon}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= FEATURES ================= */
// function Features() {
//   const features = [
//     { icon: <Terminal size={30} />, title: "Autonomous Repair", desc: "Agent clones and fixes broken code automatically." },
//     { icon: <Cpu size={30} />, title: "Agentic Logic", desc: "Multi-agent systems verify fixes before committing." },
//     { icon: <Activity size={30} />, title: "CI/CD Monitor", desc: "Real-time dashboard for all pipeline health metrics." },
//     { icon: <AlertCircle size={30} />, title: "Root Cause Analysis", desc: "Instant breakdown of why the build failed initially." },
//   ];

//   return (
//     <section className="bg-slate-50 py-24 px-8 md:px-20">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-extrabold text-slate-900">Automation Reimagined</h2>
//       </div>
//       <div className="grid md:grid-cols-4 gap-10">
//         {features.map((item, index) => (
//           <motion.div key={index} whileHover={{ y: -8 }} className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 text-center">
//             <div className="text-violet-600 mb-6 flex justify-center">{item.icon}</div>
//             <h3 className="font-bold text-xl mb-3">{item.title}</h3>
//             <p className="text-slate-500 text-sm">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= CTA ================= */
// function CTASection() {
//   return (
//     <section className="py-24 px-8 text-center bg-violet-600 text-white relative overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//           <div className="grid grid-cols-12 h-full w-full">
//             {Array.from({length: 144}).map((_, i) => (<div key={i} className="border border-white/20 h-20 w-full" />))}
//           </div>
//       </div>
//       <div className="relative z-10">
//         <h2 className="text-4xl md:text-5xl font-black mb-8">Stop Debugging. Start Building.</h2>
//         <button className="bg-white text-violet-600 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 shadow-2xl transition-all flex items-center gap-3 mx-auto">
//           Start Autonomous Healing <Terminal size={20} />
//         </button>
//       </div>
//     </section>
//   );
// }


// import { useEffect, useState, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { 
//   Search, Sparkles, Terminal, Cpu, Zap, 
//   Activity, Github, CheckCircle, AlertCircle,
//   ShieldCheck, Globe, Code2, ArrowRight
// } from "lucide-react";

// export default function App() {
//   return (
//     <div className="bg-[#030712] min-h-screen text-slate-200 font-sans selection:bg-violet-500/30 selection:text-violet-200">
//       <BackgroundEffects />
//       <Navbar />
//       <Hero />
//       <AgentStats />
//       <BentoDashboard />
//       <TechStackTicker />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// }

// /* ================= BACKGROUND DECORATIONS ================= */
// function BackgroundEffects() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {/* Animated Grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
//       {/* Floating Glow Orbs */}
//       <motion.div 
//         animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//         className="absolute -top-20 -left-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" 
//       />
//       <motion.div 
//         animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//         className="absolute top-1/2 -right-20 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[100px]" 
//       />
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */
// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-5 sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-slate-950/50">
//       <div className="flex items-center gap-3 group cursor-pointer">
//         <div className="bg-gradient-to-tr from-violet-600 to-fuchsia-600 p-2 rounded-xl shadow-lg shadow-violet-500/20 group-hover:rotate-12 transition-transform">
//           <Zap className="text-white fill-white" size={20} />
//         </div>
//         <h1 className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
//           AEROFIX<span className="text-violet-500">.AI</span>
//         </h1>
//       </div>

//       <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-400">
//         <a href="#" className="hover:text-white transition-colors">Neural Logs</a>
//         <a href="#" className="hover:text-white transition-colors">Swarm Config</a>
//         <a href="#" className="hover:text-white transition-colors">API Shell</a>
//       </div>

//       <div className="flex gap-4 items-center">
//         <button className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Login</button>
//         <button className="relative group overflow-hidden bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-black transition-all hover:pr-8">
//           <span className="relative z-10 flex items-center gap-2">DEPLOY AGENT <ArrowRight size={16} /></span>
//           <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//         </button>
//       </div>
//     </nav>
//   );
// }

// /* ================= HERO ================= */
// function Hero() {
//   return (
//     <section className="relative z-10 px-8 md:px-20 pt-32 pb-20 text-center">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-400 px-4 py-1.5 rounded-full text-[10px] font-black mb-8 tracking-[0.2em] border border-violet-500/20 uppercase">
//           <Sparkles size={12} className="animate-pulse" /> Agentic Autonomy Protocol v2.0
//         </div>

//         <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
//           The Future of Code <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500">
//             Heals Itself.
//           </span>
//         </h1>

//         <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
//           AeroFix orchestrates a swarm of specialized agents to clone, triage, 
//           and commit fixes to your repositories. No tickets. No downtime.
//         </p>

//         <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
//           <div className="flex bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 p-1.5 w-full max-w-lg focus-within:border-violet-500/50 transition-colors">
//             <div className="flex items-center pl-4 text-slate-500"><Github size={20} /></div>
//             <input
//               type="text"
//               placeholder="Paste GitHub repository URL..."
//               className="bg-transparent flex-1 px-4 py-3 outline-none text-white placeholder:text-slate-600 text-sm"
//             />
//             <button className="bg-violet-600 hover:bg-violet-500 text-white px-6 rounded-xl font-bold transition-all shadow-lg shadow-violet-600/20">
//               HEAL
//             </button>
//           </div>
//           <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">or press <kbd className="bg-slate-800 px-2 py-1 rounded border border-slate-700">⌘ K</kbd></p>
//         </div>
//       </motion.div>

//       {/* Hero Terminal Component */}
//       <div className="max-w-4xl mx-auto rounded-2xl bg-slate-950 border border-white/10 shadow-2xl shadow-violet-900/20 overflow-hidden">
//         <div className="flex items-center justify-between px-4 py-3 bg-slate-900/50 border-b border-white/5">
//           <div className="flex gap-2">
//             <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
//             <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
//             <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
//           </div>
//           <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">AeroFix Subprocess: 0x44F2</span>
//           <Activity size={12} className="text-violet-500 animate-pulse" />
//         </div>
//         <div className="p-6 font-mono text-xs text-left space-y-2 leading-relaxed h-48 overflow-hidden">
//           <p className="text-violet-400"># Initializing Neural Swarm...</p>
//           <p className="text-slate-300">$ <span className="text-emerald-400">Cloning</span> repository: <span className="underline">RIFT-26/Production-API</span></p>
//           <p className="text-slate-300">$ <span className="text-emerald-400">Analyzing</span> AST for logic bottlenecks...</p>
//           <p className="text-rose-500">! Found CRITICAL vulnerability in auth_middleware.py:L89</p>
//           <p className="text-slate-500">» Agent 'Surgeon-01' generating patch...</p>
//           <p className="text-indigo-400">» Verified patch with 14 automated unit tests.</p>
//           <p className="text-emerald-500 font-bold">» PUSHED FIX: [AI-AGENT] Resolves CVE-2026-X</p>
//           <p className="animate-pulse text-violet-500">█</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= BENTO DASHBOARD ================= */
// function BentoDashboard() {
//   return (
//     <section className="px-8 md:px-20 py-32 relative z-10">
//       <div className="text-center mb-16">
//         <h2 className="text-3xl font-black mb-4">Neural Observability</h2>
//         <p className="text-slate-500 text-sm font-medium uppercase tracking-[0.3em]">Watch your swarm in action</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
//         {/* Large Cell: Live Activity */}
//         <div className="md:col-span-2 md:row-span-2 bg-slate-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group">
//           <div className="absolute top-0 right-0 p-8 text-violet-500/20 group-hover:text-violet-500/40 transition-colors">
//             <Activity size={120} />
//           </div>
//           <h3 className="text-xl font-black mb-6 flex items-center gap-2"><Globe size={20} className="text-violet-500"/> Swarm Telemetry</h3>
//           <div className="space-y-4">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                   <span className="text-xs font-bold text-slate-300">Agent Alpha-{i}</span>
//                 </div>
//                 <span className="text-[10px] font-mono text-slate-500">Fixing Type-Errors in /src</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Medium Cell: Score */}
//         <div className="md:col-span-2 bg-gradient-to-br from-violet-600/20 to-transparent border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
//           <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Efficiency Score</h3>
//           <div className="flex items-baseline gap-2">
//             <span className="text-7xl font-black text-white">99.2</span>
//             <span className="text-violet-400 font-bold">pts</span>
//           </div>
//           <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
//             <motion.div initial={{ width: 0 }} whileInView={{ width: '99%' }} className="h-full bg-violet-500" />
//           </div>
//         </div>

//         {/* Small Cell: Security */}
//         <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center">
//           <ShieldCheck size={40} className="text-emerald-500" />
//           <p className="text-xs font-bold text-slate-300 uppercase tracking-tighter">Security Verified</p>
//         </div>

//         {/* Small Cell: Repo Stats */}
//         <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 text-center">
//           <Code2 size={40} className="text-indigo-500" />
//           <p className="text-xs font-bold text-slate-300 uppercase tracking-tighter">1.2M Lines Scanned</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ================= AGENT STATS CAROUSEL (Updated) ================= */
// function AgentStats() {
//   const slides = [
//     { title: "Neural Debugging", desc: "Agents map your code into vector space to find subtle logic flaws human eyes miss.", icon: <Cpu /> },
//     { title: "Swarm Verification", desc: "Every fix is cross-verified by three separate agents to ensure 0% regression rate.", icon: <ShieldCheck /> },
//     { title: "Zero-Latency CD", desc: "Autonomous pipelines that move code from fix to production in under 60 seconds.", icon: <Zap /> }
//   ];
//   const [idx, setIdx] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setIdx(p => (p + 1) % slides.length), 4000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section className="px-8 md:px-20 py-20 bg-slate-950/50 relative overflow-hidden">
//        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//        <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="space-y-6"
//           >
//             <div className="inline-block p-4 rounded-2xl bg-violet-500/10 text-violet-400 mb-4">
//               {slides[idx].icon}
//             </div>
//             <h3 className="text-4xl font-black text-white">{slides[idx].title}</h3>
//             <p className="text-slate-400 text-lg leading-relaxed">{slides[idx].desc}</p>
//           </motion.div>
//        </div>
//        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//     </section>
//   );
// }

// /* ================= TECH STACK TICKER ================= */
// function TechStackTicker() {
//   return (
//     <div className="py-20 border-y border-white/5 bg-slate-950/30 overflow-hidden">
//       <div className="flex gap-20 whitespace-nowrap animate-marquee opacity-30 grayscale hover:grayscale-0 transition-all">
//         {['GITHUB', 'GITLAB', 'JENKINS', 'DOCKER', 'KUBERNETES', 'PYTHON', 'NODEJS', 'CIRCLECI'].map(s => (
//           <span key={s} className="text-2xl font-black tracking-widest text-slate-600">{s}</span>
//         ))}
//         {/* Repeat for seamless loop */}
//         {['GITHUB', 'GITLAB', 'JENKINS', 'DOCKER', 'KUBERNETES', 'PYTHON', 'NODEJS', 'CIRCLECI'].map(s => (
//           <span key={s + '2'} className="text-2xl font-black tracking-widest text-slate-600">{s}</span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ================= CTA SECTION ================= */
// function CTASection() {
//   return (
//     <section className="py-32 px-8 text-center relative">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-600/10 blur-[120px] rounded-full" />
//       <div className="relative z-10">
//         <h2 className="text-5xl font-black mb-8">Ready to Automate <br />Your Technical Debt?</h2>
//         <p className="text-slate-400 mb-12 max-w-md mx-auto font-medium">Connect your repo and watch your CI/CD pipeline heal in minutes, not days.</p>
//         <button className="bg-violet-600 hover:bg-violet-500 text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-violet-600/40">
//           DEPLOY SYSTEM SWARM
//         </button>
//       </div>
//     </section>
//   );
// }

// /* ================= FOOTER ================= */
// function Footer() {
//   return (
//     <footer className="px-8 md:px-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
//       <p>© 2026 AeroFix AI • Agentic Autonomy Protocol</p>
//       <div className="flex gap-8 mt-4 md:mt-0">
//         <a href="#">Terms</a>
//         <a href="#">Privacy</a>
//         <a href="#">Security Shell</a>
//       </div>
//     </footer>
//   );
// }









// import { useEffect, useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Terminal, Cpu, Zap, Activity, Github, 
//   CheckCircle, ShieldCheck, Code2, ArrowRight,
//   Sun, Moon, Layers, Play
// } from "lucide-react";

// export default function App() {
//   const [isDark, setIsDark] = useState(true);

//   return (
//     <div className={`${isDark ? 'bg-[#030712] text-slate-200' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-700 font-sans`}>
//       <Navbar isDark={isDark} setIsDark={setIsDark} />
      
//       <div className="relative overflow-hidden bg-[#030712] text-white">
//         <BackgroundGlow />
//         <Hero />
//       </div>

//       <div className={`h-24 bg-gradient-to-b ${isDark ? 'from-[#030712] to-slate-900' : 'from-[#030712] to-slate-50'}`} />

//       <div className="relative z-10 px-8 md:px-20 pb-20">
//         <AgentStats isDark={isDark} />
//         <BentoDashboard isDark={isDark} />
//         <TechStackTicker />
//         <CTASection isDark={isDark} />
//       </div>

//       <Footer />
//     </div>
//   );
// }

// /* ================= NAVBAR (Fixed Github Icon usage) ================= */
// function Navbar({ isDark, setIsDark }) {
//   return (
//     <nav className={`flex justify-between items-center px-8 py-5 sticky top-0 z-50 backdrop-blur-xl border-b ${isDark ? 'border-white/5 bg-slate-950/50' : 'border-slate-200 bg-white/70'}`}>
//       <div className="flex items-center gap-3">
//         <div className="bg-gradient-to-tr from-violet-600 to-fuchsia-600 p-2 rounded-xl">
//           <Zap className="text-white" size={20} />
//         </div>
//         <h1 className={`text-xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
//           AEROFIX<span className="text-violet-500">.AI</span>
//         </h1>
//       </div>

//       <div className="flex items-center gap-6">
//         <a href="https://github.com" className={`${isDark ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-900'} transition-colors`}>
//           <Github size={20} />
//         </a>
//         <button 
//           onClick={() => setIsDark(!isDark)}
//           className={`p-2 rounded-full border ${isDark ? 'border-white/10 text-yellow-400 hover:bg-white/5' : 'border-slate-300 text-indigo-600 hover:bg-slate-100'} transition-all`}
//         >
//           {isDark ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//         <button className="bg-violet-600 text-white px-6 py-2 rounded-full text-xs font-black shadow-lg shadow-violet-500/30">
//           DEPLOY AGENT
//         </button>
//       </div>
//     </nav>
//   );
// }

// function BackgroundGlow() {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] opacity-50" />
//     </div>
//   );
// }

// /* ================= HERO (Fixed Terminal Icon usage) ================= */
// function Hero() {
//   return (
//     <section className="relative z-10 px-8 md:px-20 pt-24 pb-10 text-center">
//       <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
//         <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter">
//           Code That <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">
//             Heals Itself.
//           </span>
//         </h1>
//         <div className="flex justify-center gap-2 mb-8 text-violet-400 font-mono text-sm">
//           <Terminal size={18} /> <span>agent_protocol_v2.sh</span>
//         </div>
//         <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
//           The first multi-agent DevOps swarm that detects, triages, and fixes production bugs in real-time.
//         </p>
//         <div className="max-w-3xl mx-auto bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 p-2 flex gap-2">
//           <input className="bg-transparent flex-1 px-4 text-white outline-none" placeholder="Enter Repo URL..." />
//           <button className="bg-white text-black px-8 py-3 rounded-xl font-black flex items-center gap-2">
//             START HEALING <Play size={16} fill="black" />
//           </button>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= BENTO BOX (Fixed Cpu, CheckCircle usage) ================= */
// function BentoDashboard({ isDark }) {
//   const cardClass = `border transition-all duration-500 rounded-3xl p-8 backdrop-blur-sm ${
//     isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xl shadow-slate-200/50'
//   }`;

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} md:col-span-2 flex flex-col justify-between h-80`}>
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="text-xl font-black flex items-center gap-2"><Activity size={20} className="text-violet-500"/> Neural Triage</h3>
//             <p className="text-slate-500 text-sm mt-2 font-medium">Monitoring 42 active repository branches</p>
//           </div>
//           <Cpu className="text-violet-500 opacity-50" size={32} />
//         </div>
//         <div className="flex gap-2 items-end h-32">
//           {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
//             <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="flex-1 bg-violet-500/40 rounded-t-lg" />
//           ))}
//         </div>
//       </motion.div>

//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} flex flex-col items-center justify-center text-center`}>
//         <ShieldCheck size={60} className="text-emerald-500 mb-4" />
//         <p className="text-2xl font-black">100% Secure</p>
//         <div className="flex items-center gap-1 text-emerald-500 mt-2">
//            <CheckCircle size={14} />
//            <p className="text-xs font-bold uppercase tracking-widest">Verified by Swarm</p>
//         </div>
//       </motion.div>

//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} flex flex-col justify-between`}>
//         <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Total Fixes</h3>
//         <span className="text-6xl font-black">1,284</span>
//         <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs">
//           <ArrowRight size={14} className="-rotate-45" /> +22% this week
//         </div>
//       </motion.div>

//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} md:col-span-2 flex items-center gap-8`}>
//         <div className="p-4 bg-indigo-500/10 rounded-2xl">
//           <Code2 size={40} className="text-indigo-500" />
//         </div>
//         <div>
//           <h3 className="font-black text-lg">Cross-File Dependency Analysis</h3>
//           <p className="text-slate-500 text-sm">Agentic systems understanding complex architectural ripples.</p>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= AGENT STATS (Fixed Hook Dependency Warning) ================= */
// function AgentStats({ isDark }) {
//   const [idx, setIdx] = useState(0);
  
//   // Using useMemo for data to ensure reference stability
//   const data = useMemo(() => [
//     { label: "AGENT UPTIME", val: "99.98%" },
//     { label: "AVG HEAL TIME", val: "42 SEC" },
//     { label: "SUCCESS RATE", val: "94.2%" }
//   ], []);

//   useEffect(() => {
//     // Correctly referencing data.length in the dependency array
//     const t = setInterval(() => setIdx(p => (p + 1) % data.length), 3000);
//     return () => clearInterval(t);
//   }, [data.length]);

//   return (
//     <div className={`mt-20 flex justify-between p-10 rounded-[2.5rem] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200'}`}>
//        <AnimatePresence mode="wait">
//           <motion.div key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full flex justify-around">
//             <div className="text-center">
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">{data[idx].label}</p>
//               <p className={`text-5xl font-black ${isDark ? 'text-white' : 'text-indigo-600'}`}>{data[idx].val}</p>
//             </div>
//           </motion.div>
//        </AnimatePresence>
//     </div>
//   );
// }

// /* ================= MARQUEE TICKER (Fixed Layers Icon usage) ================= */
// function TechStackTicker() {
//   return (
//     <div className="py-20 overflow-hidden flex flex-col items-center">
//       <div className="flex items-center gap-2 text-slate-500 mb-8 font-bold text-xs tracking-widest opacity-50 uppercase">
//         <Layers size={14} /> <span>Multi-Layer Integrations</span>
//       </div>
//       <div className="animate-marquee gap-20 opacity-20 grayscale">
//         {['GITHUB', 'GITLAB', 'JENKINS', 'DOCKER', 'KUBERNETES', 'PYTHON', 'NODEJS', 'REACT'].map((s, i) => (
//           <span key={i} className="text-4xl font-black tracking-widest">{s}</span>
//         ))}
//         {['GITHUB', 'GITLAB', 'JENKINS', 'DOCKER', 'KUBERNETES', 'PYTHON', 'NODEJS', 'REACT'].map((s, i) => (
//           <span key={i + 10} className="text-4xl font-black tracking-widest">{s}</span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function CTASection({ isDark }) {
//   return (
//     <section className={`py-20 rounded-[3rem] text-center relative overflow-hidden ${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-50 border border-indigo-100 text-indigo-950'}`}>
//       <div className="relative z-10">
//         <h2 className="text-5xl font-black mb-6">Ready to Scale?</h2>
//         <button className={`${isDark ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'} px-10 py-4 rounded-full font-black text-lg transition-transform hover:scale-110`}>
//           CONNECT YOUR STACK
//         </button>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="py-10 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest border-t border-white/5 mt-20">
//       © 2026 AeroFix AI • Lucknow Hub • Agentic Systems Track
//     </footer>
//   );
// }


// import { useEffect, useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Terminal,Sparkles, Cpu, Zap, Activity, Github, 
//   CheckCircle, ShieldCheck, Code2, ArrowRight,
//   Sun, Moon, Layers, Play
// } from "lucide-react";

// export default function App() {
//   const [isDark, setIsDark] = useState(false); // Default to Light Theme

//   return (
//     <div className={`${isDark ? 'bg-[#030712] text-slate-200' : 'bg-white text-slate-900'} min-h-screen transition-colors duration-700 font-sans`}>
//       <Navbar isDark={isDark} setIsDark={setIsDark} />
      
//       {/* HERO SECTION: ADAPTIVE LIGHT THEME */}
//       <div className={`relative overflow-hidden ${isDark ? 'bg-[#030712]' : 'bg-slate-50'}`}>
//         <BackgroundGlow isDark={isDark} />
//         <Hero isDark={isDark} />
//       </div>

//       <div className="relative z-10 px-8 md:px-20 pb-20">
//         <AgentStats isDark={isDark} />
//         <BentoDashboard isDark={isDark} />
//         <TechStackTicker isDark={isDark} />
//         <CTASection isDark={isDark} />
//       </div>

//       <Footer isDark={isDark} />
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */
// function Navbar({ isDark, setIsDark }) {
//   return (
//     <nav className={`flex justify-between items-center px-8 py-5 sticky top-0 z-50 backdrop-blur-xl border-b ${isDark ? 'border-white/5 bg-slate-950/50' : 'border-slate-200/60 bg-white/80'}`}>
//       <div className="flex items-center gap-3">
//         <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
//           <Zap className="text-white" size={20} />
//         </div>
//         <h1 className={`text-xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
//           AEROFIX<span className="text-indigo-600">.AI</span>
//         </h1>
//       </div>

//       <div className="flex items-center gap-6">
//         <a href="#" className={`${isDark ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-900'} transition-colors`}>
//           <Github size={20} />
//         </a>
//         <button 
//           onClick={() => setIsDark(!isDark)}
//           className={`p-2 rounded-full border ${isDark ? 'border-white/10 text-yellow-400 hover:bg-white/5' : 'border-slate-300 text-indigo-600 hover:bg-slate-100'} transition-all`}
//         >
//           {isDark ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//         <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-xs font-black shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
//           DEPLOY AGENT
//         </button>
//       </div>
//     </nav>
//   );
// }

// /* ================= BACKGROUND DECO ================= */
// function BackgroundGlow({ isDark }) {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] opacity-40 ${isDark ? 'bg-indigo-600/20' : 'bg-indigo-400/10'}`} />
//       {!isDark && (
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
//       )}
//     </div>
//   );
// }

// /* ================= HERO ================= */
// function Hero({ isDark }) {
//   return (
//     <section className="relative z-10 px-8 md:px-20 pt-24 pb-16 text-center">
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//         <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black mb-8 tracking-[0.2em] uppercase border ${isDark ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-100'}`}>
//           <Sparkles size={12} /> Autonomous Agent Protocol
//         </div>
//         <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
//           Code That <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500">
//             Heals Itself.
//           </span>
//         </h1>
//         <div className="flex justify-center gap-2 mb-8 text-indigo-600 font-mono text-sm font-bold opacity-80">
//           <Terminal size={18} /> <span>sh run_healing_swarm.sh</span>
//         </div>
//         <p className={`text-lg mb-12 max-w-xl mx-auto font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
//           Connect your repository and let AeroFix deploy a specialized agent swarm to resolve CI/CD failures instantly.
//         </p>
//         <div className={`max-w-3xl mx-auto rounded-2xl border p-2 flex gap-2 shadow-2xl transition-all ${isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white border-slate-200 shadow-slate-200/50'}`}>
//           <input className={`bg-transparent flex-1 px-4 outline-none font-medium ${isDark ? 'text-white' : 'text-slate-900'}`} placeholder="Enter GitHub Repo URL..." />
//           <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-indigo-700 transition-colors">
//             START HEALING <Play size={16} fill="white" />
//           </button>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= BENTO BOX (Light Theme Optimized) ================= */
// function BentoDashboard({ isDark }) {
//   const cardClass = `border transition-all duration-500 rounded-3xl p-8 backdrop-blur-sm ${
//     isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-xl shadow-slate-200/40 hover:shadow-indigo-100'
//   }`;

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} md:col-span-2 flex flex-col justify-between h-80`}>
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="text-xl font-black flex items-center gap-2"><Activity size={20} className="text-indigo-600"/> Neural Triage</h3>
//             <p className="text-slate-500 text-sm mt-2 font-medium">Real-time repository health monitor</p>
//           </div>
//           <Cpu className="text-indigo-600 opacity-40" size={32} />
//         </div>
//         <div className="flex gap-2 items-end h-32">
//           {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
//             <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="flex-1 bg-indigo-500/30 rounded-t-lg" />
//           ))}
//         </div>
//       </motion.div>

//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} flex flex-col items-center justify-center text-center`}>
//         <ShieldCheck size={60} className="text-emerald-500 mb-4" />
//         <p className="text-2xl font-black">100% Secure</p>
//         <div className="flex items-center gap-1 text-emerald-600 mt-2">
//            <CheckCircle size={14} />
//            <p className="text-xs font-bold uppercase tracking-widest">Verified by Swarm</p>
//         </div>
//       </motion.div>

//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} flex flex-col justify-between`}>
//         <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Total Fixes</h3>
//         <span className="text-6xl font-black text-indigo-600">1,284</span>
//         <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
//           <ArrowRight size={14} className="-rotate-45" /> +22% this week
//         </div>
//       </motion.div>

//       <motion.div whileHover={{ y: -5 }} className={`${cardClass} md:col-span-2 flex items-center gap-8`}>
//         <div className="p-4 bg-indigo-50 rounded-2xl">
//           <Code2 size={40} className="text-indigo-600" />
//         </div>
//         <div>
//           <h3 className="font-black text-lg">Architectural ripples analysis</h3>
//           <p className="text-slate-500 text-sm">Deep learning systems identifying cross-file dependency breaks.</p>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* ================= AGENT STATS (Light Theme Swiper) ================= */
// function AgentStats({ isDark }) {
//   const [idx, setIdx] = useState(0);
//   const data = useMemo(() => [
//     { label: "AGENT UPTIME", val: "99.98%" },
//     { label: "AVG HEAL TIME", val: "42 SEC" },
//     { label: "SUCCESS RATE", val: "94.2%" }
//   ], []);

//   useEffect(() => {
//     const t = setInterval(() => setIdx(p => (p + 1) % data.length), 3000);
//     return () => clearInterval(t);
//   }, [data.length]);

//   return (
//     <div className={`mt-20 flex justify-between p-12 rounded-[3rem] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100 shadow-inner'}`}>
//        <AnimatePresence mode="wait">
//           <motion.div key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full flex justify-around">
//             <div className="text-center">
//               <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-3">{data[idx].label}</p>
//               <p className={`text-6xl font-black ${isDark ? 'text-white' : 'text-indigo-700'}`}>{data[idx].val}</p>
//             </div>
//           </motion.div>
//        </AnimatePresence>
//     </div>
//   );
// }

// function TechStackTicker({ isDark }) {
//   return (
//     <div className="py-24 overflow-hidden flex flex-col items-center">
//       <div className="flex items-center gap-2 text-slate-400 mb-8 font-bold text-xs tracking-[0.2em] opacity-60 uppercase">
//         <Layers size={14} /> <span>Enterprise Integrations</span>
//       </div>
//       <div className={`animate-marquee gap-24 opacity-30 grayscale hover:grayscale-0 transition-all ${isDark ? 'text-white' : 'text-slate-900'}`}>
//         {['GITHUB', 'GITLAB', 'DOCKER', 'KUBERNETES', 'NODEJS', 'PYTHON', 'REACT', 'JENKINS'].map((s, i) => (
//           <span key={i} className="text-4xl font-black tracking-widest">{s}</span>
//         ))}
//         {['GITHUB', 'GITLAB', 'DOCKER', 'KUBERNETES', 'NODEJS', 'PYTHON', 'REACT', 'JENKINS'].map((s, i) => (
//           <span key={i + 10} className="text-4xl font-black tracking-widest">{s}</span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function CTASection({ isDark }) {
//   return (
//     <section className={`py-24 rounded-[3.5rem] text-center relative overflow-hidden ${isDark ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200'}`}>
//       <div className="relative z-10">
//         <h2 className="text-5xl font-black mb-6 tracking-tight">Deploy Your AI Swarm.</h2>
//         <p className="mb-10 text-indigo-100 font-medium max-w-md mx-auto">Scale your engineering team's output by automating the 40% of time spent debugging.</p>
//         <button className="bg-white text-indigo-600 px-12 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform">
//           CONNECT YOUR REPOSITORY
//         </button>
//       </div>
//     </section>
//   );
// }

// function Footer({ isDark }) {
//   return (
//     <footer className={`py-12 text-center text-[10px] font-black uppercase tracking-widest border-t mt-20 ${isDark ? 'border-white/5 text-slate-600' : 'border-slate-100 text-slate-400'}`}>
//       © 2026 AeroFix AI • RIFT Hackathon • Agentic Systems Track
//     </footer>
//   );
// }



// import { useEffect, useState } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { 
//   Zap, Activity, Github, Shield, Clock, Play, Layers, 
//   Code, Check, TrendingUp
// } from "lucide-react";

// export default function App() {
//   const [activeCard, setActiveCard] = useState(0);
//   const { scrollYProgress } = useScroll();

//   return (
//     <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 min-h-screen font-inter transition-all duration-1000">
//       <FloatingParticles />
//       <Navbar />
      
//       {/* HERO WITH PARALLAX */}
//       <HeroSection scrollYProgress={scrollYProgress} />
      
//       <div className="relative z-10 px-6 lg:px-16 pb-24 space-y-24">
//         <StatsCarousel activeCard={activeCard} setActiveCard={setActiveCard} />
//         <DynamicGrid />
//         <TechCarousel />
//         <ActionHero />
//       </div>
      
//       <Footer />
//     </div>
//   );
// }

// // Floating Particles Background
// function FloatingParticles() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {[...Array(12)].map((_, i) => (
//         <motion.div 
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
//           animate={{
//             x: [0, 100, -100, 0],
//             y: [0, -50, 100, 0],
//             scale: [1, 1.2, 0.8, 1],
//             opacity: [0.3, 0.8, 0.3, 0.3]
//           }}
//           transition={{
//             duration: 20 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             left: `${10 + i * 7}%`,
//             top: `${15 + i * 6}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // Navbar with glassmorphism
// function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="sticky top-6 z-50 backdrop-blur-3xl bg-white/60 border border-white/80 rounded-3xl shadow-2xl px-8 py-4 flex items-center justify-between mx-6 lg:mx-16 transition-all duration-500"
//     >
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl"
//       >
//         <Zap className="w-6 h-6 text-white" />
//         <h1 className="text-2xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
//           AEROFIX<span className="text-white">.AI</span>
//         </h1>
//       </motion.div>

//       <div className="flex items-center gap-4">
//         <motion.a 
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           href="#" 
//           className="p-2 hover:bg-white/40 rounded-xl transition-all"
//         >
//           <Github className="w-5 h-5" />
//         </motion.a>
        
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-black shadow-2xl hover:shadow-purple-500/25 transition-all"
//         >
//           DEPLOY AGENT
//         </motion.button>
//       </div>
//     </motion.nav>
//   );
// }

// // Hero with layered parallax
// function HeroSection({ scrollYProgress }) {
//   const parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const parallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 pt-32 overflow-hidden">
//       {/* Background layers */}
//       <motion.div 
//         style={{ y: parallax1 }}
//         className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl -z-10"
//       />
      
//       <motion.div 
//         style={{ y: parallax2 }}
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-3xl -z-10"
//       />

//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-center max-w-5xl mx-auto z-10"
//       >
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 mb-12 font-mono text-sm tracking-widest uppercase"
//         >
//           <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse" />
//           Autonomous Agent Protocol
//         </motion.div>

//         <motion.h1 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-7xl lg:text-9xl font-black leading-[0.85] mb-12"
//         >
//           Code That <br />
//           <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
//             Heals Itself.
//           </span>
//         </motion.h1>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex flex-col lg:flex-row items-center gap-8 mb-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/80 shadow-xl"
//         >
//           <div className="flex items-center gap-3 text-indigo-500 font-mono text-xl font-bold">
//             <TerminalIcon className="w-8 h-8" />
//             <span>$ sh run_healing_swarm.sh</span>
//           </div>
          
//           <div className="flex-1 max-w-md">
//             <input 
//               className="w-full bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-200 font-mono text-lg placeholder-slate-400 focus:outline-none focus:border-indigo-400 transition-all"
//               placeholder="Enter GitHub Repo URL..."
//             />
//           </div>
          
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3 transition-all"
//           >
//             START HEALING <Play className="w-6 h-6 ml-1" />
//           </motion.button>
//         </motion.div>

//         <motion.p 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="text-xl font-medium max-w-2xl mx-auto text-slate-600"
//         >
//           Connect your repository and let AeroFix deploy a specialized agent swarm to resolve CI/CD failures instantly.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }

// // Animated Stats Carousel
// function StatsCarousel({ activeCard, setActiveCard }) {
//   const stats = [
//     { label: "AGENT UPTIME", value: "99.98%", icon: Shield, color: "from-emerald-500 to-teal-500" },
//     { label: "AVG HEAL TIME", value: "42 SEC", icon: Clock, color: "from-indigo-500 to-blue-500" },
//     { label: "SUCCESS RATE", value: "94.2%", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % stats.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [stats.length, setActiveCard]);

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="relative p-12 lg:p-20 rounded-3xl bg-gradient-to-r from-white/90 to-slate-100/90 backdrop-blur-xl border border-white/80 shadow-2xl"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeCard}
//           initial={{ opacity: 0, scale: 0.8, x: 50 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           exit={{ opacity: 0, scale: 0.8, x: -50 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="flex items-end lg:items-center gap-8 lg:gap-20"
//         >
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className={`flex-1 text-center ${idx === activeCard ? 'scale-110' : 'scale-75 opacity-40'}`}
//               animate={idx === activeCard ? { scale: [1, 1.05, 1] } : {}}
//             >
//               <div className={`w-24 h-24 mx-auto mb-6 p-6 rounded-3xl bg-gradient-to-r ${stat.color} shadow-2xl flex items-center justify-center`}>
//                 <stat.icon className="w-12 h-12 text-white" />
//               </div>
//               <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-75">{stat.label}</p>
//               <p className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 {stat.value}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//           {stats.map((_, idx) => (
//             <motion.div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all ${idx === activeCard ? 'w-8 bg-indigo-500 scale-110' : 'bg-slate-300'}`}
//               whileHover={{ scale: 1.3 }}
//             />
//           ))}
//         </div>
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// // Dynamic 3D Grid
// function DynamicGrid() {
//   const cards = [
//     {
//       title: "Neural Triage",
//       desc: "Real-time repository health monitor",
//       icon: Activity,
//       color: "from-indigo-500 to-blue-500",
//       data: [40, 70, 45, 90, 65, 80, 50]
//     },
//     {
//       title: "100% Secure",
//       desc: "Verified by Swarm Intelligence",
//       icon: Shield,
//       color: "from-emerald-500 to-teal-500",
//       value: "1,284"
//     },
//     {
//       title: "Architectural Analysis",
//       desc: "Deep learning cross-file dependency detection",
//       icon: Code,
//       color: "from-purple-500 to-pink-500"
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {cards.map((card, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           whileHover={{ y: -20, rotateX: 5, rotateY: 5 }}
//           transition={{ duration: 0.5 }}
//           className="group relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden h-[22rem] flex flex-col justify-between"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
          
//           <div>
//             <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
//               <card.icon className="w-10 h-10 text-white" />
//             </div>
//             <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600">{card.title}</h3>
//             <p className="text-slate-600 font-medium opacity-90">{card.desc}</p>
//           </div>

//           {card.data ? (
//             <div className="flex gap-2 h-24 mt-8">
//               {card.data.map((height, i) => (
//                 <motion.div
//                   key={i}
//                   className="flex-1 bg-gradient-to-t from-indigo-500 to-blue-500 rounded-xl group-hover:from-indigo-600 group-hover:to-blue-600"
//                   initial={{ height: 0 }}
//                   whileHover={{ height: `${height + 20}%` }}
//                   transition={{ duration: 0.4, delay: i * 0.05 }}
//                 />
//               ))}
//             </div>
//           ) : card.value ? (
//             <div className="mt-auto">
//               <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
//                 {card.value}
//               </div>
//               <div className="flex items-center gap-2 text-emerald-600 font-bold mt-4">
//                 <Check className="w-4 h-4" />
//                 <span className="text-sm uppercase tracking-wider">+22% this week</span>
//               </div>
//             </div>
//           ) : null}
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// // Infinite Tech Carousel
// function TechCarousel() {
//   const tech = ['GITHUB', 'GITLAB', 'DOCKER', 'K8S', 'NODEJS', 'PYTHON', 'REACT', 'JENKINS', 'VERCEL', 'AWS'];

//   return (
//     <div className="py-32 relative overflow-hidden">
//       <motion.h3 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-center text-2xl font-black mb-16 flex items-center justify-center gap-4 text-slate-600"
//       >
//         <Layers className="w-10 h-10" />
//         Enterprise Integrations
//       </motion.h3>
      
//       <div className="relative">
//         {/* Track 1 */}
//         <div className="flex animate-scroll gap-16 whitespace-nowrap">
//           {[...tech, ...tech].map((item, i) => (
//             <motion.span
//               key={i}
//               whileHover={{ scale: 1.1, color: "#6366f1" }}
//               className="text-5xl font-black tracking-widest bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-2xl"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
        
//         {/* Track 2 - Offset */}
//         <div className="flex animate-scroll-2 gap-16 whitespace-nowrap absolute top-1/2 -translate-y-1/2">
//           {[...tech, ...tech].map((item, i) => (
//             <motion.span
//               key={i + 100}
//               whileHover={{ scale: 1.1, color: "#6366f1" }}
//               className="text-5xl font-black tracking-widest bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-2xl"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Hero CTA Section
// function ActionHero() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       className="relative py-32 px-12 rounded-[4rem] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center overflow-hidden shadow-2xl shadow-indigo-500/50"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,.3),transparent),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.2),transparent)]" />
      
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.02, 1]
//         }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="relative z-10 max-w-4xl mx-auto"
//       >
//         <h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">
//           Deploy Your AI Swarm.
//         </h2>
//         <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
//           Scale your engineering team's output by automating the 40% of time spent debugging.
//         </p>
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-white text-indigo-600 px-16 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300"
//         >
//           CONNECT YOUR REPOSITORY
//         </motion.button>
//       </motion.div>
//     </motion.section>
//   );
// }

// function Footer() {
//   return (
//     <motion.footer 
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="py-16 text-center text-sm font-black uppercase tracking-[0.2em] border-t border-white/60 bg-white/70 backdrop-blur-sm"
//     >
//       © 2026 AeroFix AI • RIFT Hackathon • Agentic Systems Track
//     </motion.footer>
//   );
// }

// // Icons
// const TerminalIcon = ({ className }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4 4 4-4m0 6l-4-4-4 4" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//   </svg>
// );






// import { useEffect, useState } from "react";
// import { 
//   motion, 
//   AnimatePresence, 
//   useScroll, 
//   useTransform, 
//   useMotionValue 
// } from "framer-motion";
// import { 
//   Zap, Activity, Github, Shield, Clock, Play, Layers, 
//   Code, Check, TrendingUp
// } from "lucide-react";

// // =============== 3D Tilt Hook ===============
// function useCardTilt() {
//   const x = useMotionValue(0.5); // normalized 0–1
//   const y = useMotionValue(0.5);

//   // Map normalized x,y to rotation angles
//   const rotateX = useTransform(y, [0, 1], [8, -8]);   // top -> tilt back
//   const rotateY = useTransform(x, [0, 1], [-8, 8]);   // left -> tilt right

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width;   // 0–1
//     const py = (e.clientY - rect.top) / rect.height;   // 0–1
//     x.set(px);
//     y.set(py);
//   };

//   const resetTilt = () => {
//     x.set(0.5);
//     y.set(0.5);
//   };

//   return { rotateX, rotateY, handleMouseMove, resetTilt };
// }

// export default function App() {
//   const [activeCard, setActiveCard] = useState(0);
//   const { scrollYProgress } = useScroll();

//   return (
//     <>
//       {/* global keyframes for glow pulse */}
//       <style jsx global>{`
//         @keyframes glowPulse {
//           0% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
//           50% { box-shadow: 0 0 40px rgba(255,255,255,0.7); }
//           100% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
//         }
//       `}</style>

//       <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 min-h-screen font-inter transition-all duration-1000">
//         <FloatingParticles />
//         <Navbar />
        
//         {/* HERO WITH PARALLAX */}
//         <HeroSection scrollYProgress={scrollYProgress} />
        
//         <div className="relative z-10 px-6 lg:px-16 pb-24 space-y-24">
//           <StatsCarousel activeCard={activeCard} setActiveCard={setActiveCard} />
//           <DynamicGrid />
//           <TechCarousel />
//           <ActionHero />
//         </div>
        
//         <Footer />
//       </div>
//     </>
//   );
// }


// // =============== Floating Particles Background ===============
// function FloatingParticles() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {[...Array(12)].map((_, i) => (
//         <motion.div 
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
//           animate={{
//             x: [0, 100, -100, 0],
//             y: [0, -50, 100, 0],
//             scale: [1, 1.2, 0.8, 1],
//             opacity: [0.3, 0.8, 0.3, 0.3]
//           }}
//           transition={{
//             duration: 20 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             left: `${10 + i * 7}%`,
//             top: `${15 + i * 6}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }


// // =============== Navbar with glassmorphism ===============
// function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="sticky top-6 z-50 backdrop-blur-3xl bg-white/60 border border-white/80 rounded-3xl shadow-2xl px-8 py-4 flex items-center justify-between mx-6 lg:mx-16 transition-all duration-500"
//     >
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl"
//       >
//         <Zap className="w-6 h-6 text-white" />
//         <h1 className="text-2xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
//           AEROFIX<span className="text-white">.AI</span>
//         </h1>
//       </motion.div>

//       <div className="flex items-center gap-4">
//         <motion.a 
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           whileTap={{ scale: 0.9, rotate: -15 }}
//           href="#" 
//           className="p-2 hover:bg-white/40 rounded-xl transition-all"
//         >
//           <Github className="w-5 h-5" />
//         </motion.a>
        
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-2xl font-black shadow-2xl hover:shadow-purple-500/25 transition-all"
//         >
//           DEPLOY AGENT
//         </motion.button>
//       </div>
//     </motion.nav>
//   );
// }


// // =============== Hero with layered parallax ===============
// function HeroSection({ scrollYProgress }) {
//   const parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const parallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 pt-32 overflow-hidden">
//       {/* Background layers */}
//       <motion.div 
//         style={{ y: parallax1 }}
//         className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl -z-10"
//       />
      
//       <motion.div 
//         style={{ y: parallax2 }}
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-3xl -z-10"
//       />

//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-center max-w-5xl mx-auto z-10"
//       >
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 mb-12 font-mono text-sm tracking-widest uppercase"
//         >
//           <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse" />
//           Autonomous Agent Protocol
//         </motion.div>

//         <motion.h1 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-7xl lg:text-9xl font-black leading-[0.85] mb-12"
//         >
//           Code That <br />
//           <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
//             Heals Itself.
//           </span>
//         </motion.h1>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="flex flex-col lg:flex-row items-center gap-8 mb-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/80 shadow-xl"
//         >
//           <div className="flex items-center gap-3 text-indigo-500 font-mono text-xl font-bold">
//             <TerminalIcon className="w-8 h-8" />
//             <span>$ sh run_healing_swarm.sh</span>
//           </div>
          
//           <div className="flex-1 max-w-md">
//             <input 
//               className="w-full bg-white/70 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-200 font-mono text-lg placeholder-slate-400 focus:outline-none focus:border-indigo-400 transition-all"
//               placeholder="Enter GitHub Repo URL..."
//             />
//           </div>
          
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3 transition-all"
//           >
//             START HEALING <Play className="w-6 h-6 ml-1" />
//           </motion.button>
//         </motion.div>

//         <motion.p 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="text-xl font-medium max-w-2xl mx-auto text-slate-600"
//         >
//           Connect your repository and let AeroFix deploy a specialized agent swarm to resolve CI/CD failures instantly.
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// }


// // =============== Animated Stats Carousel ===============
// function StatsCarousel({ activeCard, setActiveCard }) {
//   const stats = [
//     { label: "AGENT UPTIME", value: "99.98%", icon: Shield, color: "from-emerald-500 to-teal-500" },
//     { label: "AVG HEAL TIME", value: "42 SEC", icon: Clock, color: "from-indigo-500 to-blue-500" },
//     { label: "SUCCESS RATE", value: "94.2%", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % stats.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [stats.length, setActiveCard]);

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="relative p-12 lg:p-20 rounded-3xl bg-gradient-to-r from-white/90 to-slate-100/90 backdrop-blur-xl border border-white/80 shadow-2xl"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeCard}
//           initial={{ opacity: 0, scale: 0.8, x: 50 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           exit={{ opacity: 0, scale: 0.8, x: -50 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="flex items-end lg:items-center gap-8 lg:gap-20"
//         >
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className={`flex-1 text-center ${idx === activeCard ? 'scale-110' : 'scale-75 opacity-40'}`}
//               animate={idx === activeCard ? { scale: [1, 1.05, 1] } : {}}
//             >
//               <div className={`w-24 h-24 mx-auto mb-6 p-6 rounded-3xl bg-gradient-to-r ${stat.color} shadow-2xl flex items-center justify-center`}>
//                 <stat.icon className="w-12 h-12 text-white" />
//               </div>
//               <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-75">{stat.label}</p>
//               <p className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 {stat.value}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//           {stats.map((_, idx) => (
//             <motion.div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all ${idx === activeCard ? 'w-8 bg-indigo-500 scale-110' : 'bg-slate-300'}`}
//               whileHover={{ scale: 1.3 }}
//             />
//           ))}
//         </div>
//       </AnimatePresence>
//     </motion.div>
//   );
// }


// // =============== Dynamic 3D Grid with tilt + float ===============
// function DynamicGrid() {
//   const cards = [
//     {
//       title: "Neural Triage",
//       desc: "Real-time repository health monitor",
//       icon: Activity,
//       color: "from-indigo-500 to-blue-500",
//       data: [40, 70, 45, 90, 65, 80, 50]
//     },
//     {
//       title: "100% Secure",
//       desc: "Verified by Swarm Intelligence",
//       icon: Shield,
//       color: "from-emerald-500 to-teal-500",
//       value: "1,284"
//     },
//     {
//       title: "Architectural Analysis",
//       desc: "Deep learning cross-file dependency detection",
//       icon: Code,
//       color: "from-purple-500 to-pink-500"
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {cards.map((card, idx) => (
//         <DynamicGridCard key={idx} card={card} idx={idx} />
//       ))}
//     </div>
//   );
// }

// function DynamicGridCard({ card, idx }) {
//   const { rotateX, rotateY, handleMouseMove, resetTilt } = useCardTilt();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       style={{ rotateX, rotateY }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       animate={{ y: [0, -6, 0] }}
//       transition={{ y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut" } }}
//       className="group relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden h-[22rem] flex flex-col justify-between"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

//       <div>
//         <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
//           <card.icon className="w-10 h-10 text-white" />
//         </div>
//         <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600">{card.title}</h3>
//         <p className="text-slate-600 font-medium opacity-90">{card.desc}</p>
//       </div>

//       {card.data ? (
//         <div className="flex gap-2 h-24 mt-8">
//           {card.data.map((height, i) => (
//             <motion.div
//               key={i}
//               className="flex-1 bg-gradient-to-t from-indigo-500 to-blue-500 rounded-xl group-hover:from-indigo-600 group-hover:to-blue-600"
//               initial={{ height: 0 }}
//               whileHover={{ height: `${height + 20}%` }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//             />
//           ))}
//         </div>
//       ) : card.value ? (
//         <div className="mt-auto">
//           <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
//             {card.value}
//           </div>
//           <div className="flex items-center gap-2 text-emerald-600 font-bold mt-4">
//             <Check className="w-4 h-4" />
//             <span className="text-sm uppercase tracking-wider">+22% this week</span>
//           </div>
//         </div>
//       ) : null}
//     </motion.div>
//   );
// }


// // =============== Infinite Tech Carousel (dual, pause on hover) ===============
// function TechCarousel() {
//   const tech = ['GITHUB', 'GITLAB', 'DOCKER', 'K8S', 'NODEJS', 'PYTHON', 'REACT', 'JENKINS', 'VERCEL', 'AWS'];

//   return (
//     <div className="py-32 relative overflow-hidden">
//       <motion.h3 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-center text-2xl font-black mb-16 flex items-center justify-center gap-4 text-slate-600"
//       >
//         <Layers className="w-10 h-10" />
//         Enterprise Integrations
//       </motion.h3>
      
//       <div className="relative">
//         {/* Track 1 */}
//         <div className="flex animate-scroll gap-16 whitespace-nowrap">
//           {[...tech, ...tech].map((item, i) => (
//             <motion.span
//               key={i}
//               whileHover={{ scale: 1.1, color: "#6366f1" }}
//               className="text-5xl font-black tracking-widest bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-2xl"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
        
//         {/* Track 2 - Offset */}
//         <div className="flex animate-scroll-2 gap-16 whitespace-nowrap absolute top-1/2 -translate-y-1/2">
//           {[...tech, ...tech].map((item, i) => (
//             <motion.span
//               key={i + 100}
//               whileHover={{ scale: 1.1, color: "#6366f1" }}
//               className="text-5xl font-black tracking-widest bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-2xl"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scroll-2 {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 40s linear infinite;
//         }
//         .animate-scroll-2 {
//           animation: scroll-2 40s linear infinite reverse;
//         }
//         .animate-scroll:hover,
//         .animate-scroll-2:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// }


// // =============== Hero CTA Section with glowing button ===============
// function ActionHero() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       className="relative py-32 px-12 rounded-[4rem] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center overflow-hidden shadow-2xl shadow-indigo-500/50"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,.3),transparent),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.2),transparent)]" />
      
//       <motion.div 
//         animate={{ scale: [1, 1.02, 1] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="relative z-10 max-w-4xl mx-auto"
//       >
//         <h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">
//           Deploy Your AI Swarm.
//         </h2>
//         <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
//           Scale your engineering team's output by automating the 40% of time spent debugging.
//         </p>
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-white text-indigo-600 px-16 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300"
//           animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 40px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0)"] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           CONNECT YOUR REPOSITORY
//         </motion.button>
//       </motion.div>
//     </motion.section>
//   );
// }


// // =============== Footer ===============
// function Footer() {
//   return (
//     <motion.footer 
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="py-16 text-center text-sm font-black uppercase tracking-[0.2em] border-t border-white/60 bg-white/70 backdrop-blur-sm"
//     >
//       © 2026 AeroFix AI • RIFT Hackathon • Agentic Systems Track
//     </motion.footer>
//   );
// }


// // =============== Icons ===============
// const TerminalIcon = ({ className }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4 4 4-4m0 6l-4-4-4 4" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//   </svg>
// );


// import { useEffect, useState } from "react";
// import { 
//   motion, 
//   AnimatePresence, 
//   useScroll, 
//   useTransform, 
//   useMotionValue 
// } from "framer-motion";
// import { 
//   Zap, Activity, Github, Shield, Clock, Play, Layers, 
//   Code, Check, TrendingUp, Cpu, Globe, ArrowRight
// } from "lucide-react";

// // =============== 3D Tilt Hook ===============
// function useCardTilt() {
//   const x = useMotionValue(0.5);
//   const y = useMotionValue(0.5);

//   const rotateX = useTransform(y, [0, 1], [8, -8]);
//   const rotateY = useTransform(x, [0, 1], [-8, 8]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width;
//     const py = (e.clientY - rect.top) / rect.height;
//     x.set(px);
//     y.set(py);
//   };

//   const resetTilt = () => {
//     x.set(0.5);
//     y.set(0.5);
//   };

//   return { rotateX, rotateY, handleMouseMove, resetTilt };
// }

// export default function App() {
//   const [activeCard, setActiveCard] = useState(0);
//   const { scrollYProgress } = useScroll();

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes glowPulse {
//           0% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
//           50% { box-shadow: 0 0 40px rgba(255,255,255,0.7); }
//           100% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
//         }
//       `}</style>

//       <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 min-h-screen font-inter transition-all duration-1000">
//         <FloatingParticles />
//         <Navbar />
        
//         <HeroSection scrollYProgress={scrollYProgress} />
        
//         <div className="relative z-10 px-6 lg:px-16 pb-24 space-y-24">
//           <StatsCarousel activeCard={activeCard} setActiveCard={setActiveCard} />
//           <DynamicGrid />
//           <TechCarousel />
//           <ActionHero />
//         </div>
        
//         <Footer />
//       </div>
//     </>
//   );
// }

// // =============== Floating Particles Background ===============
// function FloatingParticles() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {[...Array(12)].map((_, i) => (
//         <motion.div 
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
//           animate={{
//             x: [0, 100, -100, 0],
//             y: [0, -50, 100, 0],
//             scale: [1, 1.2, 0.8, 1],
//             opacity: [0.3, 0.8, 0.3, 0.3]
//           }}
//           transition={{
//             duration: 20 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             left: `${10 + i * 7}%`,
//             top: `${15 + i * 6}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // =============== Navbar with glassmorphism ===============
// function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="sticky top-6 z-50 backdrop-blur-3xl bg-white/60 border border-white/80 rounded-3xl shadow-2xl px-8 py-4 flex items-center justify-between mx-6 lg:mx-16 transition-all duration-500"
//     >
//       <div className="flex items-center gap-12">
//         <motion.div 
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl cursor-pointer"
//         >
//           <Zap className="w-6 h-6 text-white" />
//           <h1 className="text-2xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
//             Agent<span className="text-white">.AI</span>
//           </h1>
//         </motion.div>

//         <div className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-widest text-slate-500 uppercase">
//           <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
//           <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
//           {/* <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a> */}
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         <motion.a 
//           whileHover={{ scale: 1.1, rotate: 360 }}
//           whileTap={{ scale: 0.9, rotate: -15 }}
//           href="#" 
//           className="p-2 hover:bg-white/40 rounded-xl transition-all"
//         >
//           <Github className="w-5 h-5 text-slate-700" />
//         </motion.a>
        
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black shadow-2xl hover:bg-indigo-600 transition-all flex items-center gap-2"
//         >
//           LAUNCH CONSOLE <ArrowRight className="w-4 h-4" />
//         </motion.button>
//       </div>
//     </motion.nav>
//   );
// }

// // =============== Updated Hero (Clean & Impactful) ===============
// function HeroSection({ scrollYProgress }) {
//   const parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const parallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-16 pt-32 overflow-hidden">
//       <motion.div 
//         style={{ y: parallax1 }}
//         className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl -z-10"
//       />
//       <motion.div 
//         style={{ y: parallax2 }}
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-3xl -z-10"
//       />

//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-center max-w-5xl mx-auto z-10"
//       >
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white mb-12 font-mono text-sm tracking-widest uppercase shadow-xl shadow-indigo-200"
//         >
//           <Cpu className="w-4 h-4 animate-spin-slow" />
//           Autonomous Agent Protocol 
//         </motion.div>

//         <motion.h1 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-7xl lg:text-[10rem] font-black leading-[0.85] mb-8 tracking-tighter"
//         >
//           Code That <br />
//           <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
//             Heals Itself.
//           </span>
//         </motion.h1>

//         <motion.p 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.8 }}
//           className="text-2xl font-medium max-w-3xl mx-auto text-slate-600 leading-relaxed mb-12"
//         >
//           AgentAI deploys specialized agentic swarms that monitor your repository 24/7, 
//           identifying and repairing CI/CD regressions before they hit production.
//         </motion.p>
//         <br></br>
//         <motion.div
//            initial={{ opacity: 0 }}
//            animate={{ opacity: 1 }}
//            transition={{ delay: 1.2 }}
//            className="flex flex-wrap justify-center gap-6"
//         >
//             <button className="bg-indigo-600 text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-3">
//               START AUTONOMOUS FIXING <Play className="w-5 h-5 fill-current" />
//             </button>
//             <button className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-3xl font-black text-lg hover:border-indigo-600 transition-all">
//               VIEW DOCUMENTATION
//             </button>
//         </motion.div>
//       </motion.div>
//     </section>
    
//   );
// }

// // =============== Animated Stats Carousel ===============
// function StatsCarousel({ activeCard, setActiveCard }) {
//   const stats = [
//     { label: "AGENT UPTIME", value: "99.98%", icon: Shield, color: "from-emerald-500 to-teal-500" },
//     { label: "AVG HEAL TIME", value: "42 SEC", icon: Clock, color: "from-indigo-500 to-blue-500" },
//     { label: "SUCCESS RATE", value: "94.2%", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % stats.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [stats.length, setActiveCard]);

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="relative p-12 lg:p-20 rounded-3xl bg-gradient-to-r from-white/90 to-slate-100/90 backdrop-blur-xl border border-white/80 shadow-2xl"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeCard}
//           initial={{ opacity: 0, scale: 0.8, x: 50 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           exit={{ opacity: 0, scale: 0.8, x: -50 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="flex items-end lg:items-center gap-8 lg:gap-20"
//         >
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className={`flex-1 text-center ${idx === activeCard ? 'scale-110' : 'scale-75 opacity-40'}`}
//               animate={idx === activeCard ? { scale: [1, 1.05, 1] } : {}}
//             >
//               <div className={`w-24 h-24 mx-auto mb-6 p-6 rounded-3xl bg-gradient-to-r ${stat.color} shadow-2xl flex items-center justify-center`}>
//                 <stat.icon className="w-12 h-12 text-white" />
//               </div>
//               <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-75">{stat.label}</p>
//               <p className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 {stat.value}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//           {stats.map((_, idx) => (
//             <motion.div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all ${idx === activeCard ? 'w-8 bg-indigo-500 scale-110' : 'bg-slate-300'}`}
//               whileHover={{ scale: 1.3 }}
//             />
//           ))}
//         </div>
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// // =============== Dynamic 3D Grid Card ===============
// function DynamicGridCard({ card, idx }) {
//   const { rotateX, rotateY, handleMouseMove, resetTilt } = useCardTilt();

//   return (
    
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       style={{ rotateX, rotateY }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       animate={{ y: [0, -6, 0] }}
//       transition={{ y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut" } }}
//       className="group relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden h-[22rem] flex flex-col justify-between"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

//       <div>
//         <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
//           <card.icon className="w-10 h-10 text-white" />
//         </div>
//         <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600">{card.title}</h3>
//         <p className="text-slate-600 font-medium opacity-90">{card.desc}</p>
//       </div>

//       {card.data ? (
//         <div className="flex gap-2 h-24 mt-8">
//           {card.data.map((height, i) => (
//             <motion.div
//               key={i}
//               className="flex-1 bg-gradient-to-t from-indigo-500 to-blue-500 rounded-xl group-hover:from-indigo-600 group-hover:to-blue-600"
//               initial={{ height: 0 }}
//               whileHover={{ height: `${height + 20}%` }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//             />
//           ))}
//         </div>
//       ) : card.value ? (
//         <div className="mt-auto">
//           <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
//             {card.value}
//           </div>
//           <div className="flex items-center gap-2 text-emerald-600 font-bold mt-4">
//             <Check className="w-4 h-4" />
//             <span className="text-sm uppercase tracking-wider">+22% this week</span>
//           </div>
//         </div>
//       ) : null}
//     </motion.div>
//   );
// }

// function DynamicGrid() {
//   const cards = [
//     {
//       title: "Neural Triage",
//       desc: "Real-time repository health monitor",
//       icon: Activity,
//       color: "from-indigo-500 to-blue-500",
//       data: [40, 70, 45, 90, 65, 80, 50]
//     },
//     {
//       title: "100% Secure",
//       desc: "Verified by Swarm Intelligence",
//       icon: Shield,
//       color: "from-emerald-500 to-teal-500",
//       value: "1,284"
//     },
//     {
//       title: "Architectural Analysis",
//       desc: "Deep learning cross-file dependency detection",
//       icon: Code,
//       color: "from-purple-500 to-pink-500"
//     }
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {cards.map((card, idx) => (
//         <DynamicGridCard key={idx} card={card} idx={idx} />
//       ))}
//     </div>
//   );
// }

// // =============== Infinite Tech Carousel ===============
// function TechCarousel() {
//   const tech = ['GITHUB', 'DOCKER', 'K8S', 'NODEJS', 'PYTHON', 'REACT',  'VERCEL', 'AWS'];

//   return (
//     <div className="py-32 relative overflow-hidden">
//       <motion.h3 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-center text-2xl font-black mb-16 flex items-center justify-center gap-4 text-slate-600"
//       >
//         <Layers className="w-10 h-10" />
//         Enterprise Integrations
//       </motion.h3>
      
//       <div className="relative">
//         <div className="flex animate-scroll gap-16 whitespace-nowrap">
//           {[...tech, ...tech].map((item, i) => (
//             <motion.span
//               key={i}
//               whileHover={{ scale: 1.1, color: "#6366f1" }}
//               className="text-5xl font-black tracking-widest bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-2xl"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
        
//         <div className="flex animate-scroll-2 gap-16 whitespace-nowrap absolute top-1/2 -translate-y-1/2">
//           {[...tech, ...tech].map((item, i) => (
//             <motion.span
//               key={i + 100}
//               whileHover={{ scale: 1.1, color: "#6366f1" }}
//               className="text-5xl font-black tracking-widest bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent drop-shadow-2xl"
//             >
//               {item}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scroll-2 {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll { animation: scroll 40s linear infinite; }
//         .animate-scroll-2 { animation: scroll-2 40s linear infinite reverse; }
//         .animate-scroll:hover, .animate-scroll-2:hover { animation-play-state: paused; }
//       `}</style>
//     </div>
//   );
// }

// // =============== Hero CTA Section ===============
// function ActionHero() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, scale: 0.9 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       className="relative py-32 px-12 rounded-[4rem] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center overflow-hidden shadow-2xl shadow-indigo-500/50"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,.3),transparent),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.2),transparent)]" />
      
//       <motion.div 
//         animate={{ scale: [1, 1.02, 1] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="relative z-10 max-w-4xl mx-auto"
//       >
//         <h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">
//           Deploy Your AI Swarm.
//         </h2>
//         <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
//           Scale your engineering team's output by automating the 40% of time spent debugging regressions.
//         </p>
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-white text-indigo-600 px-16 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-white/50 transition-all duration-300"
//           animate={{ boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 40px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0)"] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           CONNECT YOUR REPOSITORY
//         </motion.button>
//       </motion.div>
//     </motion.section>
//   );
// }

// // =============== Enhanced Footer ===============
// function Footer() {
//   return (
//     <motion.footer 
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       className="pt-24 pb-12 px-6 lg:px-16 bg-white border-t border-slate-200"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
//         <div className="col-span-1 md:col-span-1">
//             <div className="flex items-center gap-3 mb-6">
//                 <Zap className="w-6 h-6 text-indigo-600" />
//                 <span className="text-2xl font-black tracking-tighter">AEROFIX.AI</span>
//             </div>
//             <p className="text-slate-500 font-medium leading-relaxed">
//                 Empowering the next generation of autonomous engineering through swarm intelligence.
//             </p>
//         </div>
//         <div>
//             <h4 className="font-black text-xs tracking-widest uppercase mb-6 text-slate-400">Platform</h4>
//             <ul className="space-y-4 font-bold text-slate-600">
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Swarm Console</a></li>
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">API Keys</a></li>
//             </ul>
//         </div>
//         <div>
//             <h4 className="font-black text-xs tracking-widest uppercase mb-6 text-slate-400">Company</h4>
//             <ul className="space-y-4 font-bold text-slate-600">
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
//             </ul>
//         </div>
//         <div>
//             <h4 className="font-black text-xs tracking-widest uppercase mb-6 text-slate-400">Status</h4>
//             <div className="flex items-center gap-2 text-emerald-500 font-bold">
//                 <Globe className="w-4 h-4" />
//                 All Systems Operational
//             </div>
//         </div>
//       </div>
//       <div className="text-center pt-12 border-t border-slate-100 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
//         © 2026 AeroFix AI • RIFT Hackathon • Agentic Systems Track
//       </div>
//     </motion.footer>
//   );
// }



// import { useEffect, useState } from "react";
// import { 
//   motion, 
//   AnimatePresence, 
//   useScroll, 
//   useTransform, 
//   useMotionValue 
// } from "framer-motion";
// import { 
//   Zap, Activity, Shield, Clock, Play, Layers, 
//   Code, Check, TrendingUp, Cpu, Globe, ArrowRight
// } from "lucide-react";

// // =============== 3D Tilt Hook ===============
// function useCardTilt() {
//   const x = useMotionValue(0.5);
//   const y = useMotionValue(0.5);

//   const rotateX = useTransform(y, [0, 1], [8, -8]);
//   const rotateY = useTransform(x, [0, 1], [-8, 8]);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const px = (e.clientX - rect.left) / rect.width;
//     const py = (e.clientY - rect.top) / rect.height;
//     x.set(px);
//     y.set(py);
//   };

//   const resetTilt = () => {
//     x.set(0.5);
//     y.set(0.5);
//   };

//   return { rotateX, rotateY, handleMouseMove, resetTilt };
// }

// export default function App() {
//   const [activeCard, setActiveCard] = useState(0);
//   const { scrollYProgress } = useScroll();

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes glowPulse {
//           0% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
//           50% { box-shadow: 0 0 40px rgba(255,255,255,0.7); }
//           100% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
//         }
//         @keyframes scrollSeamless {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         .animate-scroll-seamless {
//           animation: scrollSeamless 30s linear infinite;
//         }
//         .animate-scroll-seamless-reverse {
//           animation: scrollSeamless 30s linear infinite reverse;
//         }
//       `}</style>

//       <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 min-h-screen font-inter transition-all duration-1000">
//         <FloatingParticles />
//         <Navbar />
        
//         <HeroSection scrollYProgress={scrollYProgress} />
        
//         {/* Distance after HERO buttons */}
//         <div className="h-24 lg:h-32" />

//         <div className="relative z-10 px-6 lg:px-16 pb-24 space-y-24">
//           <StatsCarousel activeCard={activeCard} setActiveCard={setActiveCard} />
//           <DynamicGrid />
//           <TechCarousel />
//           <ActionHero />
//         </div>
        
//         <Footer />
//       </div>
//     </>
//   );
// }

// // =============== Floating Particles Background ===============
// function FloatingParticles() {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {[...Array(12)].map((_, i) => (
//         <motion.div 
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
//           animate={{
//             x: [0, 100, -100, 0],
//             y: [0, -50, 100, 0],
//             scale: [1, 1.2, 0.8, 1],
//             opacity: [0.3, 0.8, 0.3, 0.3]
//           }}
//           transition={{
//             duration: 20 + i * 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           style={{
//             left: `${10 + i * 7}%`,
//             top: `${15 + i * 6}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // =============== Navbar: Full Width & Top 0 ===============
// function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="sticky top-0 z-50 backdrop-blur-3xl bg-white/70 border-b border-slate-200 w-full px-8 py-4 flex items-center justify-between transition-all duration-500"
//     >
//       <div className="flex items-center gap-12">
//         <motion.div 
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl cursor-pointer"
//         >
//           <Zap className="w-6 h-6 text-white" />
//           <h1 className="text-2xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
//             Agent<span className="text-white">.AI</span>
//           </h1>
//         </motion.div>

//         <div className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-widest text-slate-500 uppercase">
//           <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
//           <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         <button className="text-slate-700 font-bold hover:text-indigo-600 transition-colors mr-4">
//           Login
//         </button>
//         <motion.button 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black shadow-2xl hover:bg-indigo-600 transition-all"
//         >
//           SIGN UP
//         </motion.button>
//       </div>
//     </motion.nav>
//   );
// }

// // =============== Updated Hero (Clean & Impactful) ===============
// function HeroSection({ scrollYProgress }) {
//   const parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const parallax2 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

//   return (
//     <section className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-16 pt-24 overflow-hidden">
//       <motion.div 
//         style={{ y: parallax1 }}
//         className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl -z-10"
//       />
//       <motion.div 
//         style={{ y: parallax2 }}
//         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-3xl -z-10"
//       />

//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-center max-w-5xl mx-auto z-10"
//       >
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white mb-12 font-mono text-sm tracking-widest uppercase shadow-xl shadow-indigo-200"
//         >
//           <Cpu className="w-4 h-4 animate-spin-slow" />
//           Autonomous Agent Protocol 
//         </motion.div>

//         <motion.h1 
//           className="text-7xl lg:text-[10rem] font-black leading-[0.85] mb-8 tracking-tighter"
//         >
//           Code That <br />
//           <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
//             Heals Itself.
//           </span>
//         </motion.h1>

//         <motion.p 
//           className="text-2xl font-medium max-w-3xl mx-auto text-slate-600 leading-relaxed mb-12"
//         >
//           AgentAI deploys specialized agentic swarms that monitor your repository 24/7, 
//           identifying and repairing CI/CD regressions before they hit production.
//         </motion.p>

//         <motion.div className="flex flex-wrap justify-center gap-6">
//             <button className="bg-indigo-600 text-white px-10 py-5 rounded-3xl font-black text-lg shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-3">
//               START AUTONOMOUS FIXING <Play className="w-5 h-5 fill-current" />
//             </button>
//             <button className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-3xl font-black text-lg hover:border-indigo-600 transition-all">
//               VIEW DOCUMENTATION
//             </button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

// // =============== Seamless Tech Carousel ===============
// function TechCarousel() {
//   const tech = ['GITHUB', 'GITLAB', 'DOCKER', 'K8S', 'NODEJS', 'PYTHON', 'REACT', 'JENKINS', 'VERCEL', 'AWS'];

//   return (
//     <div className="py-24 relative overflow-hidden flex flex-col gap-8">
//       <motion.h3 
//         className="text-center text-2xl font-black mb-8 flex items-center justify-center gap-4 text-slate-400 uppercase tracking-widest"
//       >
//         <Layers className="w-8 h-8" />
//         Enterprise Integrations
//       </motion.h3>
      
//       {/* Row 1 */}
//       <div className="flex whitespace-nowrap overflow-hidden">
//         <div className="flex animate-scroll-seamless">
//           {[...tech, ...tech].map((item, i) => (
//             <span key={i} className="text-5xl lg:text-7xl font-black px-12 text-slate-200 tracking-tighter hover:text-indigo-500 transition-colors">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Row 2 */}
//       <div className="flex whitespace-nowrap overflow-hidden">
//         <div className="flex animate-scroll-seamless-reverse">
//           {[...tech, ...tech].map((item, i) => (
//             <span key={i} className="text-5xl lg:text-7xl font-black px-12 text-slate-200 tracking-tighter hover:text-purple-500 transition-colors">
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // =============== Animated Stats Carousel ===============
// function StatsCarousel({ activeCard, setActiveCard }) {
//   const stats = [
//     { label: "AGENT UPTIME", value: "99.98%", icon: Shield, color: "from-emerald-500 to-teal-500" },
//     { label: "AVG HEAL TIME", value: "42 SEC", icon: Clock, color: "from-indigo-500 to-blue-500" },
//     { label: "SUCCESS RATE", value: "94.2%", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % stats.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [stats.length, setActiveCard]);

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       className="relative p-12 lg:p-20 rounded-3xl bg-gradient-to-r from-white/90 to-slate-100/90 backdrop-blur-xl border border-white/80 shadow-2xl"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={activeCard}
//           initial={{ opacity: 0, scale: 0.8, x: 50 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           exit={{ opacity: 0, scale: 0.8, x: -50 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="flex items-end lg:items-center gap-8 lg:gap-20"
//         >
//           {stats.map((stat, idx) => (
//             <motion.div
//               key={idx}
//               className={`flex-1 text-center ${idx === activeCard ? 'scale-110' : 'scale-75 opacity-40'}`}
//               animate={idx === activeCard ? { scale: [1, 1.05, 1] } : {}}
//             >
//               <div className={`w-24 h-24 mx-auto mb-6 p-6 rounded-3xl bg-gradient-to-r ${stat.color} shadow-2xl flex items-center justify-center`}>
//                 <stat.icon className="w-12 h-12 text-white" />
//               </div>
//               <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-75">{stat.label}</p>
//               <p className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 {stat.value}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
//           {stats.map((_, idx) => (
//             <motion.div
//               key={idx}
//               className={`w-3 h-3 rounded-full transition-all ${idx === activeCard ? 'w-8 bg-indigo-500 scale-110' : 'bg-slate-300'}`}
//               whileHover={{ scale: 1.3 }}
//             />
//           ))}
//         </div>
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// // =============== Dynamic 3D Grid Card ===============
// function DynamicGridCard({ card, idx }) {
//   const { rotateX, rotateY, handleMouseMove, resetTilt } = useCardTilt();

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       style={{ rotateX, rotateY }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       animate={{ y: [0, -6, 0] }}
//       transition={{ y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut" } }}
//       className="group relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden h-[22rem] flex flex-col justify-between"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

//       <div>
//         <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
//           <card.icon className="w-10 h-10 text-white" />
//         </div>
//         <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600">{card.title}</h3>
//         <p className="text-slate-600 font-medium opacity-90">{card.desc}</p>
//       </div>

//       {card.data ? (
//         <div className="flex gap-2 h-24 mt-8">
//           {card.data.map((height, i) => (
//             <motion.div
//               key={i}
//               className="flex-1 bg-gradient-to-t from-indigo-500 to-blue-500 rounded-xl group-hover:from-indigo-600 group-hover:to-blue-600"
//               initial={{ height: 0 }}
//               whileHover={{ height: `${height + 20}%` }}
//               transition={{ duration: 0.4, delay: i * 0.05 }}
//             />
//           ))}
//         </div>
//       ) : card.value ? (
//         <div className="mt-auto">
//           <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
//             {card.value}
//           </div>
//           <div className="flex items-center gap-2 text-emerald-600 font-bold mt-4">
//             <Check className="w-4 h-4" />
//             <span className="text-sm uppercase tracking-wider">+22% this week</span>
//           </div>
//         </div>
//       ) : null}
//     </motion.div>
//   );
// }

// function DynamicGrid() {
//   const cards = [
//     { title: "Neural Triage", desc: "Real-time repository health monitor", icon: Activity, color: "from-indigo-500 to-blue-500", data: [40, 70, 45, 90, 65, 80, 50] },
//     { title: "100% Secure", desc: "Verified by Swarm Intelligence", icon: Shield, color: "from-emerald-500 to-teal-500", value: "1,284" },
//     { title: "Architectural Analysis", desc: "Deep learning cross-file dependency detection", icon: Code, color: "from-purple-500 to-pink-500" }
//   ];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//       {cards.map((card, idx) => (
//         <DynamicGridCard key={idx} card={card} idx={idx} />
//       ))}
//     </div>
//   );
// }

// // =============== Action Hero ===============
// function ActionHero() {
//   return (
//     <motion.section
//       className="relative py-32 px-12 rounded-[4rem] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center overflow-hidden shadow-2xl shadow-indigo-500/50"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,.3),transparent)]" />
//       <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity }} className="relative z-10 max-w-4xl mx-auto">
//         <h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">Deploy Your AI Swarm.</h2>
//         <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">Scale engineering output by automating debugging regressions.</p>
//         <button className="bg-white text-indigo-600 px-16 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-white/50 transition-all">
//           CONNECT YOUR REPOSITORY
//         </button>
//       </motion.div>
//     </motion.section>
//   );
// }

// // =============== Reduced Height Footer ===============
// function Footer() {
//   return (
//     <motion.footer 
//       className="pt-12 pb-8 px-6 lg:px-16 bg-white border-t border-slate-200"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//         <div>
//             <div className="flex items-center gap-3 mb-4">
//                 <Zap className="w-5 h-5 text-indigo-600" />
//                 <span className="text-xl font-black tracking-tighter">AGENT.AI</span>
//             </div>
//             <p className="text-slate-500 text-sm">Empowering autonomous engineering through swarm intelligence.</p>
//         </div>
//         <div>
//             <h4 className="font-black text-xs uppercase mb-4 text-slate-400">Platform</h4>
//             <ul className="space-y-2 text-sm font-bold text-slate-600">
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Console</a></li>
//             </ul>
//         </div>
//         <div>
//             <h4 className="font-black text-xs uppercase mb-4 text-slate-400">Company</h4>
//             <ul className="space-y-2 text-sm font-bold text-slate-600">
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
//                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
//             </ul>
//         </div>
//         <div>
//             <h4 className="font-black text-xs uppercase mb-4 text-slate-400">Status</h4>
//             <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
//                 <Globe className="w-4 h-4" /> Operational
//             </div>
//         </div>
//       </div>
//       <div className="text-center pt-8 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
//         © 2026 Agent AI • RIFT Hackathon
//       </div>
//     </motion.footer>
//   );
// }





import { useEffect, useState } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useMotionValue 
} from "framer-motion";
import { 
  Zap, Activity, Shield, Clock, Play, Layers, 
  Code, Check, TrendingUp, Cpu, Globe, ArrowRight, Heart
} from "lucide-react";

// =============== 3D Tilt Hook ===============
function useCardTilt() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const resetTilt = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return { rotateX, rotateY, handleMouseMove, resetTilt };
}

export default function App() {
  const [activeCard, setActiveCard] = useState(0);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <style jsx global>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
          50% { box-shadow: 0 0 40px rgba(255,255,255,0.7); }
          100% { box-shadow: 0 0 0px rgba(255,255,255,0.0); }
        }
        @keyframes scrollSeamless {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-seamless {
          animation: scrollSeamless 30s linear infinite;
        }
        .animate-scroll-seamless-reverse {
          animation: scrollSeamless 30s linear infinite reverse;
        }
      `}</style>

      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 min-h-screen font-inter transition-all duration-1000">
        <FloatingParticles />
        <Navbar />
        
        <HeroSection scrollYProgress={scrollYProgress} />
        
        {/* Distance after HERO buttons */}
        <div className="h-24 lg:h-32" />

        <div className="relative z-10 px-6 lg:px-16 pb-24 space-y-24">
          <StatsCarousel activeCard={activeCard} setActiveCard={setActiveCard} />
          <DynamicGrid />
          <TechCarousel />
          <ActionHero />
        </div>
        
        <Footer />
      </div>
    </>
  );
}

// =============== Floating Particles Background ===============
function FloatingParticles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.8, 0.3, 0.3]
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 7}%`,
            top: `${15 + i * 6}%`,
          }}
        />
      ))}
    </div>
  );
}

// =============== Navbar: Full Width & Top 0 ===============
function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-3xl bg-white/70 border-b border-slate-200 w-full px-8 py-4 flex items-center justify-between transition-all duration-500"
    >
      <div className="flex items-center gap-12">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl cursor-pointer"
        >
          <Zap className="w-6 h-6 text-white" />
          <h1 className="text-2xl font-black bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
            Aline<span className="text-white">.AI</span>
          </h1>
        </motion.div>

        <div className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-widest text-slate-500 uppercase">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#integrations" className="hover:text-indigo-600 transition-colors">Integrations</a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <motion.a
          href="/login"
          whileHover={{ scale: 1.03 }}
          className="text-slate-700 font-bold hover:text-indigo-600 transition-colors mr-4"
        >
          Sign In
        </motion.a>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.href = '/login?mode=register'}
          className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black shadow-2xl hover:bg-indigo-600 transition-all"
        >
          SIGN UP
        </motion.button>
      </div>
    </motion.nav>
  );
}



// =============== Hero Section ===============
function HeroSection({ scrollYProgress }) {
  const parallax1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 lg:px-20 pt-16 overflow-hidden">
      {/* Background Moving Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[5%] w-[450px] h-[450px] bg-pink-200/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full z-10">
        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-6 tracking-tighter text-slate-900">
            Welcome to <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Aline.AI
            </span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 mb-6">
            Autonomous CI/CD healing — detects, fixes &amp; pushes before you even notice.
          </h2>
          <p className="text-lg lg:text-xl font-medium text-slate-500 mb-10 max-w-xl">
            Multi-agent LangGraph system that clones your repo, runs pytest, generates AI fixes, commits with <code className="bg-slate-100 px-2 py-0.5 rounded-lg text-indigo-600 font-black">[AI-AGENT]</code> prefix, and opens a PR — zero human intervention.
          </p>
          <div className="flex gap-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.location.href = '/login'}
              className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-700 transition-all"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.location.href = '/login?mode=register'}
              className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-4 rounded-2xl font-black text-lg hover:border-indigo-400 hover:text-indigo-600 transition-all"
            >
              Create Account
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content: REPLACED CARDS WITH ANIMATED IMAGE */} 
        {/* Right Content: Increased Size Animated Image */}
<motion.div 
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ 
    opacity: 1, 
    scale: 1,
    y: [0, -20, 0] 
  }}
  transition={{ 
    opacity: { duration: 1 },
    scale: { duration: 1 },
    y: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
  }}
  className="relative flex items-center justify-center lg:justify-end w-full"
>
  <div className="relative z-10 w-full lg:w-[120%] max-w-[800px] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm">
    <img 
      src="/ai12.jpeg" 
      alt="Health Dashboard Animation" 
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Decorative glow scaled to match new size */}
  <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full scale-110 -z-10" />
</motion.div>
        


      </div>
    </section>
  );
}


// =============== Seamless Tech Carousel ===============
function TechCarousel() {
  const tech = ['GITHUB', 'GITLAB', 'DOCKER', 'K8S', 'NODEJS', 'PYTHON', 'REACT', 'JENKINS', 'VERCEL', 'AWS'];

  return (
    <div className="py-24 relative overflow-hidden flex flex-col gap-8">
      <motion.h3 
        className="text-center text-2xl font-black mb-8 flex items-center justify-center gap-4 text-slate-400 uppercase tracking-widest"
      >
        <Layers className="w-8 h-8" />
        Enterprise Integrations
      </motion.h3> 
      
      {/* Row 1 */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-scroll-seamless">
          {[...tech, ...tech].map((item, i) => (
            <span key={i} className="text-5xl lg:text-7xl font-black px-12 text-slate-200 tracking-tighter hover:text-indigo-500 transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-scroll-seamless-reverse">
          {[...tech, ...tech].map((item, i) => (
            <span key={i} className="text-5xl lg:text-7xl font-black px-12 text-slate-200 tracking-tighter hover:text-purple-500 transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// =============== Animated Stats Carousel ===============
function StatsCarousel({ activeCard, setActiveCard }) {
  const stats = [
    { label: "BUGS AUTO-FIXED", value: "1.2k+", icon: Shield, color: "from-emerald-500 to-teal-500" },
    { label: "AVG FIX TIME", value: "< 5min", icon: Clock, color: "from-indigo-500 to-blue-500" },
    { label: "SUCCESS RATE", value: "98.5%", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [stats.length, setActiveCard]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative p-12 lg:p-20 rounded-3xl bg-gradient-to-r from-white/90 to-slate-100/90 backdrop-blur-xl border border-white/80 shadow-2xl"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex items-end lg:items-center gap-8 lg:gap-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className={`flex-1 text-center ${idx === activeCard ? 'scale-110' : 'scale-75 opacity-40'}`}
              animate={idx === activeCard ? { scale: [1, 1.05, 1] } : {}}
            >
              <div className={`w-24 h-24 mx-auto mb-6 p-6 rounded-3xl bg-gradient-to-r ${stat.color} shadow-2xl flex items-center justify-center`}>
                <stat.icon className="w-12 h-12 text-white" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.3em] mb-4 opacity-75">{stat.label}</p>
              <p className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {stats.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${idx === activeCard ? 'w-8 bg-indigo-500 scale-110' : 'bg-slate-300'}`}
              whileHover={{ scale: 1.3 }}
            />
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
}

// =============== Dynamic 3D Grid Card ===============
function DynamicGridCard({ card, idx }) {
  const { rotateX, rotateY, handleMouseMove, resetTilt } = useCardTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      animate={{ y: [0, -6, 0] }}
      transition={{ y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut" } }}
      className="group relative p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden h-[22rem] flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

      <div>
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
          <card.icon className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-black mb-4 group-hover:text-indigo-600">{card.title}</h3>
        <p className="text-slate-600 font-medium opacity-90">{card.desc}</p>
      </div>

      {card.data ? (
        <div className="flex gap-2 h-24 mt-8">
          {card.data.map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-indigo-500 to-blue-500 rounded-xl group-hover:from-indigo-600 group-hover:to-blue-600"
              initial={{ height: 0 }}
              whileHover={{ height: `${height + 20}%` }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            />
          ))}
        </div>
      ) : card.value ? (
        <div className="mt-auto">
          <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            {card.value}
          </div>
          <div className="flex items-center gap-2 text-emerald-600 font-bold mt-4">
            <Check className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">+22% this week</span>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}

function DynamicGrid() {
  const cards = [
    { title: "Multi-Agent Pipeline", desc: "Analyst → Coder → Git Manager → Scorer nodes running in LangGraph with adaptive retry logic", icon: Activity, color: "from-indigo-500 to-blue-500", data: [40, 70, 45, 90, 65, 80, 50] },
    { title: "Smart Branch Naming", desc: "Auto-creates TEAM_LEADER_AI_Fix branch, commits with [AI-AGENT] prefix, opens PR — fully compliant", icon: Shield, color: "from-emerald-500 to-teal-500", value: "100%" },
    { title: "6 Bug Types Detected", desc: "SYNTAX · TYPE_ERROR · LOGIC · LINTING · IMPORT · INDENTATION — all caught by AST + pytest pipeline", icon: Code, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <DynamicGridCard key={idx} card={card} idx={idx} />
      ))}
    </div>
  );
}

// =============== Action Hero ===============
function ActionHero() {
  return (
    <motion.section
      className="relative py-32 px-12 rounded-[4rem] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center overflow-hidden shadow-2xl shadow-indigo-500/50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,.3),transparent)]" />
      <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 4, repeat: Infinity }} className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-black mb-8 leading-tight">Let the AI fix it.</h2>
        <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Paste your broken repo URL. Aline.AI clones, heals, and pushes the fix — all in under 5 minutes.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.location.href = '/login?mode=register'}
          className="bg-white text-indigo-600 px-16 py-6 rounded-3xl font-black text-xl shadow-2xl hover:shadow-white/50 transition-all"
        >
          GET STARTED NOW
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

// =============== Reduced Height Footer ===============
function Footer() {
  return (
    <motion.footer 
      className="pt-12 pb-8 px-6 lg:px-16 bg-white border-t border-slate-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Aline.AI</span>
            </div>
            <p className="text-slate-500 text-sm">Autonomous CI/CD healing agent — built for RIFT 2026 Hackathon.</p>
        </div>
        <div>
            <h4 className="font-black text-xs uppercase mb-4 text-slate-400">Platform</h4>
            <ul className="space-y-2 text-sm font-bold text-slate-600">
                <li><a href="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</a></li>
                <li><a href="/login" className="hover:text-indigo-600 transition-colors">Sign In</a></li>
            </ul>
        </div>
        <div>
            <h4 className="font-black text-xs uppercase mb-4 text-slate-400">Agent</h4>
            <ul className="space-y-2 text-sm font-bold text-slate-600">
                <li><span className="text-slate-400">LangGraph Multi-Agent</span></li>
                <li><span className="text-slate-400">Groq LLaMA-3.3-70B</span></li>
            </ul>
        </div>
        <div>
            <h4 className="font-black text-xs uppercase mb-4 text-slate-400">Status</h4>
            <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                <Globe className="w-4 h-4" /> Operational
            </div>
            <div className="mt-3">
              <a href="/login?mode=register" className="text-xs font-black text-indigo-600 hover:underline">Create Free Account →</a>
            </div>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
        © 2026 Aline.AI · RIFT Hackathon · Agentic Systems Track
      </div>
    </motion.footer>
  );
}

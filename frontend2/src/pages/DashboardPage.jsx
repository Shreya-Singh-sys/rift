import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Activity, Play, LogOut, BookOpen,
  ShieldCheck, User, GitBranch,
  Bug, CheckCircle2, XCircle, Clock,
  RefreshCw, Trophy, GitCommit, FileCode,
  AlertCircle, Link as LinkIcon, Users, Hash,
} from "lucide-react";
import "./DashboardPage.css";

const BUG_COLORS = {
  SYNTAX:      { bg: "#fee2e2", text: "#dc2626", border: "#fca5a5" },
  TYPE_ERROR:  { bg: "#ffedd5", text: "#ea580c", border: "#fdba74" },
  LOGIC:       { bg: "#fef9c3", text: "#ca8a04", border: "#fde047" },
  LINTING:     { bg: "#dbeafe", text: "#2563eb", border: "#93c5fd" },
  IMPORT:      { bg: "#f3e8ff", text: "#9333ea", border: "#d8b4fe" },
  INDENTATION: { bg: "#fce7f3", text: "#db2777", border: "#f9a8d4" },
};

export default function DashboardPage({ userName = "Vaishali" }) {
  const [loading, setLoading] = useState(false);
  const [repoUrl, setRepoUrl] = useState("");
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [maxIterations, setMaxIterations] = useState(5);
  const [updateDocs, setUpdateDocs] = useState(false);
  const [results, setResults] = useState(null);
  const [apiError, setApiError] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("aline_current_user");
    window.location.assign("/login");
  };

  const runAgent = async () => {
    if (!repoUrl || !teamName || !leaderName) {
      setApiError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setApiError(null);
    setResults(null);
    try {
      const res = await fetch("/heal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          repo_url: repoUrl,
          team_name: teamName,
          leader_name: leaderName,
          max_iterations: maxIterations,
          update_docs: updateDocs,
        }),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server error ${res.status}`);
      }
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setApiError(err.message || "Failed to connect to healing agent.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  const bubbles = [
    { className: "db-1", type: "glow", x: [0, 55, -20, 10, 0], y: [0, 90, 20, -15, 0], duration: 16, delay: 0 },
    { className: "db-2", type: "glow", x: [0, -75, 10, -20, 0], y: [0, -45, 50, 20, 0], duration: 21, delay: 0.4 },
    { className: "db-3", type: "ring", x: [0, 45, -35, 0], y: [0, 70, -25, 0], duration: 18, delay: 0.8 },
    { className: "db-4", type: "glow", x: [0, -35, 65, 0], y: [0, -70, 55, 0], duration: 24, delay: 0.2 },
    { className: "db-5", type: "ring", x: [0, 30, -20, 0], y: [0, -40, 30, 0], duration: 14, delay: 1.1 },
    { className: "db-6", type: "glow", x: [0, -25, 25, 0], y: [0, 45, -30, 0], duration: 19, delay: 0.6 },
    { className: "db-7", type: "ring", x: [0, 20, -15, 0], y: [0, 30, -20, 0], duration: 12, delay: 0.3 },
  ];

  // Derived result values
  const isPassed = results && results.status === "completed";
  const successFixes = results ? results.fixes.filter((f) => f.status === "success").length : 0;
  const baseScore = 100;
  const timeBonus = results && results.execution_time_minutes < 5 ? 10 : 0;
  const commitPenalty = results && results.total_commits > 20 ? (results.total_commits - 20) * 2 : 0;

  return (
    <div className="min-h-screen bg-slate-50 font-inter text-slate-900 relative overflow-hidden">

      {/* BACKGROUND FLOATING BUBBLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.className}
            className={`dash-bubble ${bubble.className} ${bubble.type === "ring" ? "dash-bubble--ring" : "dash-bubble--glow"}`}
            animate={{ x: bubble.x, y: bubble.y }}
            transition={{ duration: bubble.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: bubble.delay }}
          />
        ))}
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-violet-100/50 px-8 py-4 flex justify-between items-center transition-all duration-300 header-purple-line">
        <div className="flex items-center gap-5">
          <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="relative">
            <div className="bg-violet-600 p-2.5 rounded-2xl shadow-xl shadow-violet-200/50 relative z-10">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-violet-400 blur-lg rounded-full opacity-40 -z-10" />
          </motion.div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tight text-slate-900 leading-none mb-1">
              Aline<span className="text-violet-600">.AI</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Autonomous Healing Agent · RIFT 2026</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 pl-8 border-l border-slate-100">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">System Operator</p>
              <p className="text-sm font-extrabold text-slate-800">{userName}</p>
            </div>
            <div className="relative group cursor-pointer">
              <div className="w-11 h-11 bg-gradient-to-br from-violet-100 to-violet-50 rounded-2xl border-2 border-violet-200 flex items-center justify-center text-violet-700 font-black shadow-inner transition-transform group-hover:scale-105">
                {userName.charAt(0)}
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-8 space-y-8 relative z-10">

        {/* ── CONFIGURATION SECTION ── */}
        <section className="bg-white/90 backdrop-blur-sm p-12 rounded-[3.5rem] shadow-sm border border-slate-100 violet-highlight-card">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-8 bg-violet-600 rounded-full" />
            <h3 className="text-sm font-black text-violet-600 uppercase tracking-[0.3em]">Agent Configuration</h3>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col gap-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="config-label-black">GitHub Repo URL</label>
              <div className="relative group">
                <Github className="input-icon-left" size={20} />
                <input className="highlighted-input" placeholder="https://github.com/username/repo" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="space-y-3">
                <label className="config-label-black">Team Name</label>
                <div className="relative">
                  <ShieldCheck className="input-icon-left" size={20} />
                  <input className="highlighted-input" placeholder="RIFT ORGANISERS" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-3">
                <label className="config-label-black">Leader Name</label>
                <div className="relative">
                  <User className="input-icon-left" size={20} />
                  <input className="highlighted-input" placeholder="Saiyam Kumar" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} />
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-3">
              <label className="config-label-black">Max Iterations (1–10)</label>
              <div className="relative">
                <RefreshCw className="input-icon-left" size={20} />
                <input
                  type="number" min="1" max="10"
                  className="highlighted-input" value={maxIterations}
                  onChange={(e) => setMaxIterations(parseInt(e.target.value) || 5)}
                />
              </div>
            </motion.div>

            {/* Feature 3: Auto Documentation Update Toggle */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer select-none"
              onClick={() => setUpdateDocs(v => !v)}
            >
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-violet-600 flex-shrink-0" />
                <div>
                  <div className="text-sm font-black text-slate-800">Update Documentation</div>
                  <div className="text-xs font-bold text-slate-400">Append AI fix summary to README.md after healing</div>
                </div>
              </div>
              <div className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${updateDocs ? 'bg-violet-600' : 'bg-slate-200'}`}>
                <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${updateDocs ? 'translate-x-6' : 'translate-x-0.5'}`} />
              </div>
            </motion.div>

            {apiError && (
              <motion.div variants={itemVariants} className="flex items-center gap-3 px-5 py-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 font-bold text-sm">
                <AlertCircle size={18} /> {apiError}
              </motion.div>
            )}

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={runAgent}
              disabled={loading}
              className="mt-2 w-full bg-violet-600 text-white py-6 rounded-3xl font-black text-lg shadow-xl shadow-violet-200 hover:bg-violet-700 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {loading
                ? <><div className="w-6 h-6 border-[3px] border-white/30 border-t-white rounded-full animate-spin" /> HEALING IN PROGRESS...</>
                : <><Play size={22} fill="currentColor" /> START ANALYSIS</>
              }
            </motion.button>
          </motion.div>
        </section>

        {/* ── RESULTS ── */}
        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 pb-20"
            >

              {/* ── 1. RUN SUMMARY CARD ── */}
              <section className="bg-white/90 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm violet-highlight-card">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-7 bg-violet-600 rounded-full" />
                    <h3 className="text-sm font-black text-violet-600 uppercase tracking-[0.3em]">Run Summary</h3>
                  </div>
                  {/* BADGES */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      style={{
                        background: isPassed ? "#dcfce7" : "#fee2e2",
                        border: `2px solid ${isPassed ? "#86efac" : "#fca5a5"}`,
                        color: isPassed ? "#16a34a" : "#dc2626",
                      }}
                      className="flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest"
                    >
                      {isPassed ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
                      CI/CD {isPassed ? "PASSED" : "FAILED"}
                    </motion.div>
                    {updateDocs && (
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"
                        style={{ background: "#ede9fe", border: "2px solid #c4b5fd", color: "#7c3aed" }}
                      >
                        <BookOpen size={13} /> DOCS UPDATED
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {[
                    { icon: Users,    label: "Team Name",    value: results.team_name,   mono: false },
                    { icon: User,     label: "Leader Name",  value: results.leader_name, mono: false },
                    { icon: LinkIcon, label: "Repo URL",     value: results.repo_url,    mono: false, truncate: true, span: true },
                    { icon: GitBranch,label: "Branch",       value: results.branch_name || "—", mono: true, span: true },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 ${item.span ? "md:col-span-2" : ""}`}
                    >
                      <item.icon size={18} style={{ color: "#7c3aed", flexShrink: 0 }} />
                      <div className="min-w-0">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                        {item.mono
                          ? <code className="text-sm font-bold text-violet-600 break-all">{item.value}</code>
                          : <div className={`text-sm font-bold text-slate-800 ${item.truncate ? "truncate" : ""}`} title={item.truncate ? item.value : undefined}>{item.value}</div>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { icon: Bug,         label: "Total Failures",  value: results.total_failures ?? results.fixes.length, color: "#dc2626", bg: "#fee2e2" },
                    { icon: CheckCircle2,label: "Total Fixes",     value: successFixes,                                    color: "#16a34a", bg: "#dcfce7" },
                    { icon: Clock,       label: "Total Time",      value: `${results.execution_time_minutes?.toFixed(2)} min`, color: "#2563eb", bg: "#dbeafe" },
                    { icon: Hash,        label: "Iterations",      value: `${results.iterations_completed ?? "—"} / ${maxIterations}`, color: "#ca8a04", bg: "#fef9c3" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-2xl border" style={{ background: stat.bg, borderColor: stat.color + "40" }}>
                      <div className="flex items-center gap-2 mb-1">
                        <stat.icon size={15} style={{ color: stat.color }} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</span>
                      </div>
                      <div className="text-xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── 2. SCORE BREAKDOWN ── */}
              <section className="bg-white/90 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm violet-highlight-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-7 bg-violet-600 rounded-full" />
                  <h3 className="text-sm font-black text-violet-600 uppercase tracking-[0.3em]">Score Breakdown</h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Trophy,    label: "Base Score",     value: baseScore,                color: "#2563eb", bg: "#dbeafe" },
                    { icon: Clock,     label: "Time Bonus",     value: `+${timeBonus}`,           color: "#16a34a", bg: "#dcfce7" },
                    { icon: GitCommit, label: "Commit Penalty", value: `-${commitPenalty}`,       color: "#dc2626", bg: "#fee2e2" },
                    { icon: Trophy,    label: "Final Score",    value: results.final_score,       color: "#ca8a04", bg: "#fef9c3", highlight: true },
                  ].map((s) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 rounded-2xl border"
                      style={{ background: s.bg, borderColor: s.color + "50", outline: s.highlight ? `2px solid ${s.color}` : "none" }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <s.icon size={16} style={{ color: s.color }} />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                      </div>
                      <div className="text-3xl font-black" style={{ color: s.color }}>{s.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Score Progress</span>
                    <span className="text-xs font-black text-violet-600">{results.final_score} / 110</span>
                  </div>
                  <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((results.final_score / 110) * 100, 100)}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: results.final_score >= 100
                          ? "linear-gradient(90deg, #7c3aed, #22c55e)"
                          : results.final_score >= 70
                          ? "linear-gradient(90deg, #7c3aed, #3b82f6)"
                          : "linear-gradient(90deg, #ef4444, #f97316)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-slate-300 mt-1">
                    <span>0</span><span>55</span><span>110</span>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs font-bold text-slate-500 space-y-1">
                  <div>• Time bonus +10 if execution &lt; 5 minutes &nbsp;|&nbsp; Commit penalty −2 per commit over 20</div>
                  <div className="font-black text-slate-700">
                    Formula: 100 {timeBonus > 0 && `+ ${timeBonus}`} {commitPenalty > 0 && `− ${commitPenalty}`} = {results.final_score}
                  </div>
                </div>
              </section>

              {/* ── 3. CI/CD TIMELINE ── */}
              <section className="bg-white/90 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm violet-highlight-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-7 bg-violet-600 rounded-full" />
                  <h3 className="text-sm font-black text-violet-600 uppercase tracking-[0.3em]">CI/CD Execution Timeline</h3>
                </div>

                <div className="space-y-3">
                  {Array.from({ length: maxIterations }, (_, i) => {
                    const num = i + 1;
                    const completed = num <= (results.iterations_completed ?? 1);
                    return (
                      <motion.div
                        key={num}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-4 p-4 rounded-2xl border"
                        style={{
                          background: completed ? "#f3e8ff" : "#f8fafc",
                          borderColor: completed ? "#d8b4fe" : "#e2e8f0",
                        }}
                      >
                        <div className="flex-shrink-0">
                          {completed
                            ? <CheckCircle2 size={20} style={{ color: "#7c3aed" }} />
                            : <Clock size={20} style={{ color: "#cbd5e1" }} />
                          }
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-black text-slate-800">Iteration {num}</span>
                            <span className="text-xs font-black text-slate-400">{num} / {maxIterations}</span>
                          </div>
                          {completed && (
                            <div className="mt-2 w-full h-1.5 bg-violet-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                                className="h-full bg-violet-500 rounded-full"
                              />
                            </div>
                          )}
                        </div>
                        <span
                          className="text-[10px] font-black uppercase px-3 py-1 rounded-full"
                          style={completed
                            ? { background: "#ede9fe", color: "#7c3aed" }
                            : { background: "#f1f5f9", color: "#94a3b8" }
                          }
                        >
                          {completed ? "Done" : "Skipped"}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {results.branch_name && (
                  <div className="mt-5 flex items-center gap-2 px-5 py-3 bg-violet-50 rounded-2xl border border-violet-200 text-violet-700 text-sm font-bold">
                    <GitBranch size={16} />
                    <span className="font-black">Branch Created:</span>
                    <code className="bg-white px-2 py-0.5 rounded-lg text-violet-600 font-black">{results.branch_name}</code>
                  </div>
                )}
              </section>

              {/* ── 4. FIXES TABLE ── */}
              {results.fixes.length > 0 && (
                <section className="bg-white/90 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm violet-highlight-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-7 bg-violet-600 rounded-full" />
                    <h3 className="text-sm font-black text-violet-600 uppercase tracking-[0.3em]">Applied Fixes ({results.fixes.length})</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-slate-100">
                          {["File", "Bug Type", "Line", "Commit Message", "Status"].map((h) => (
                            <th key={h} className="text-left text-[10px] font-black text-slate-400 uppercase tracking-widest py-3 px-4">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {results.fixes.map((fix, idx) => {
                          const bugColor = BUG_COLORS[fix.bug_type] || BUG_COLORS.SYNTAX;
                          return (
                            <motion.tr
                              key={idx}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="border-b border-slate-50 hover:bg-violet-50/40 transition-colors"
                            >
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <FileCode size={14} style={{ color: "#7c3aed" }} />
                                  <code className="text-slate-700 font-bold text-xs">{fix.file}</code>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className="px-3 py-1 rounded-full text-[11px] font-black border"
                                  style={{ background: bugColor.bg, color: bugColor.text, borderColor: bugColor.border }}
                                >
                                  {fix.bug_type}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <code className="text-xs font-black text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">L{fix.line}</code>
                              </td>
                              <td className="py-4 px-4">
                                <span className="text-xs text-slate-500 font-bold">{fix.commit_message}</span>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  {fix.status === "success"
                                    ? <CheckCircle2 size={16} style={{ color: "#16a34a" }} />
                                    : fix.status === "failed"
                                    ? <XCircle size={16} style={{ color: "#dc2626" }} />
                                    : <AlertCircle size={16} style={{ color: "#ca8a04" }} />
                                  }
                                  <span
                                    className="text-xs font-black uppercase"
                                    style={{
                                      color: fix.status === "success" ? "#16a34a" : fix.status === "failed" ? "#dc2626" : "#ca8a04"
                                    }}
                                  >
                                    {fix.status}
                                  </span>
                                </div>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Summary Pills */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {[
                      { label: "Successful", count: successFixes,                                          bg: "#dcfce7", color: "#16a34a" },
                      { label: "Failed",     count: results.fixes.filter(f => f.status === "failed").length, bg: "#fee2e2", color: "#dc2626" },
                      { label: "Pending",    count: results.fixes.filter(f => f.status === "pending").length, bg: "#fef9c3", color: "#ca8a04" },
                    ].map((p) => (
                      <div key={p.label} className="px-4 py-2 rounded-xl font-black text-xs" style={{ background: p.bg, color: p.color }}>
                        {p.count} {p.label}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ── 5. PREDICTIVE IMPACT ANALYSIS ── */}
              {results.affected_files && results.affected_files.length > 0 && (
                <section className="bg-white/90 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm violet-highlight-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-7 bg-amber-500 rounded-full" />
                    <h3 className="text-sm font-black text-amber-600 uppercase tracking-[0.3em]">Predictive Impact Analysis</h3>
                    <span className="ml-auto px-3 py-1 bg-amber-50 border border-amber-200 text-amber-600 text-[10px] font-black uppercase rounded-full tracking-widest">Side-Effect Report</span>
                  </div>
                  <p className="text-xs font-bold text-slate-400 mb-4">These files import modules that were modified — review before merging the PR:</p>
                  <div className="space-y-2">
                    {results.affected_files.map((file, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.06 }}
                        className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-xl"
                      >
                        <FileCode size={14} className="text-amber-500 flex-shrink-0" />
                        <code className="text-xs font-bold text-amber-700">{file}</code>
                        <span className="ml-auto text-[10px] font-black text-amber-400 uppercase tracking-widest">may be affected</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-500">
                    ⚠️ Run tests on these files before merging the AI-generated PR.
                  </div>
                </section>
              )}

              {/* ── 6. DOC UPDATE CONFIRMATION ── */}
              {updateDocs && (
                <section className="bg-white/90 backdrop-blur-sm p-6 rounded-[2.5rem] shadow-sm violet-highlight-card">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-violet-50 rounded-2xl border border-violet-100 flex-shrink-0">
                      <BookOpen size={22} className="text-violet-600" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-800 mb-1">📄 Documentation Updated</div>
                      <div className="text-xs font-bold text-slate-400">AI fix summary appended to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-violet-600">README.md</code> in the cloned repo.</div>
                    </div>
                    <div className="ml-auto px-4 py-2 bg-violet-50 border border-violet-200 rounded-full text-xs font-black text-violet-600 uppercase tracking-widest flex-shrink-0">
                      ✓ Done
                    </div>
                  </div>
                </section>
              )}

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER */}
      <footer className="p-8 text-center bg-white/80 backdrop-blur-md border-t border-violet-100 violet-highlight-card relative z-10">
        <div className="flex items-center justify-center gap-4">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Aline.AI · RIFT 2026 Hackathon</p>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-slate-400 hover:text-pink-500 transition-colors font-black text-[10px] uppercase tracking-widest group"
          >
            <LogOut size={14} className="group-hover:translate-x-0.5 transition-transform" />
            <span>Logout</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

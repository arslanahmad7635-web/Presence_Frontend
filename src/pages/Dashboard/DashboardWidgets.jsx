import React from "react";
import { ChevronDown, Clock, Users, Play, ScanFace, Cpu, Database, AlertTriangle, SquareSquare } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { kpiData, weeklyAttendanceData, punctualityData, lowAttendanceStudents } from "./dashboardData";

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {kpiData.map((kpi, idx) => {
        const Icon = kpi.icon;
        return (
          <div key={idx} className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] flex flex-col justify-between min-w-0 shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 leading-tight">{kpi.title}</p>
                <h3 className="text-3xl font-extrabold text-white flex items-baseline gap-2 flex-wrap mt-1">
                  {kpi.value}
                  {kpi.subValue && <span className="text-sm font-medium text-slate-500">({kpi.subValue})</span>}
                </h3>
              </div>
              <div className={`flex items-center justify-center shrink-0 w-12 h-12 rounded-2xl ${kpi.bgColor} ${kpi.color} border ${kpi.borderColor} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5 text-xs text-slate-400 font-light">{kpi.trend}</div>
          </div>
        );
      })}
    </div>
  );
}

export function SessionControl({ isSessionActive, setIsSessionActive }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A1220] to-[#040812] shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6 sm:p-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
        <div className="flex-1">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Pipeline Control</span>
          <h2 className="text-2xl font-extrabold text-white mt-2 mb-2 tracking-tight">Active Class Session</h2>
          <p className="text-sm text-slate-400 font-light mb-6">Select a roster to initialize the vision pipeline and vector matching.</p>
          
          <div className="relative w-full max-w-md">
            <select className="w-full appearance-none bg-black/40 border border-white/10 text-white py-3 pl-5 pr-10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-medium transition-all">
              <option>CS101 - Intro to Comp Sci (Sec A)</option>
              <option>MTH205 - Calculus II</option>
              <option>PHY101 - Physics Lab</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400 pointer-events-none" />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Next: 10:00 AM - 11:30 AM</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <Users className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Expected Roster: 45</span>
            </div>
          </div>
        </div>

        <div className="shrink-0 flex items-center justify-center lg:border-l border-white/10 lg:pl-10">
          <button
            onClick={() => setIsSessionActive(!isSessionActive)}
            className="relative group flex items-center justify-center w-36 h-36 rounded-full outline-none"
          >
            {isSessionActive && (
              <div className="absolute inset-0 rounded-full border-2 border-rose-500 opacity-50 animate-ping"></div>
            )}
            <div className={`absolute inset-0 rounded-full blur-xl opacity-50 transition-colors duration-500 ${isSessionActive ? "bg-rose-600" : "bg-cyan-500"}`}></div>
            
            <div className={`relative flex flex-col items-center justify-center w-28 h-28 rounded-full shadow-2xl transition-all duration-300 border border-white/20 z-10 hover:scale-105 ${
              isSessionActive 
                ? "bg-gradient-to-br from-rose-500 to-rose-700" 
                : "bg-gradient-to-r from-cyan-400 to-blue-500"
            }`}>
              {isSessionActive ? (
                <>
                  <SquareSquare className="w-8 h-8 text-white mb-1.5" />
                  <span className="text-white font-bold text-xs uppercase tracking-wider">Halt</span>
                </>
              ) : (
                <>
                  <Play className="w-8 h-8 text-slate-900 mb-1.5 ml-1" fill="currentColor" />
                  <span className="text-slate-900 font-bold text-xs uppercase tracking-wider">Initialize</span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export function AttendanceCharts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-[#0A1220]/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-lg">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Weekly Throughput</h3>
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyAttendanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff1a" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: 'Poppins' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12, fontFamily: 'Poppins' }} />
              <RechartsTooltip 
                cursor={{ fill: "#ffffff0a" }} 
                contentStyle={{ backgroundColor: "#0A1220", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }} 
              />
              <Bar dataKey="present" name="Present %" fill="#22d3ee" radius={[4, 4, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#0A1220]/50 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-lg flex flex-col">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Punctuality Vectors</h3>
        <div className="flex-1 h-52 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={punctualityData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                {punctualityData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <RechartsTooltip 
                contentStyle={{ backgroundColor: "#0A1220", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-extrabold text-white drop-shadow-md">75%</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">On Time</span>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-5 mt-4">
          {punctualityData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}80` }}></span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SystemPipeline() {
  const PipelineCard = ({ icon: Icon, title, description, active }) => (
    <div className="bg-white/[0.02] rounded-2xl p-4 border border-white/10 flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
      <div className="p-3 bg-cyan-950/30 rounded-xl text-cyan-400 border border-cyan-500/20 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold text-white truncate">{title}</p>
          <span className={`w-2 h-2 rounded-full shrink-0 ${active ? "bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" : "bg-rose-500"}`}></span>
        </div>
        <p className="text-xs text-slate-400 mt-0.5 truncate font-light">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="pt-2">
      <h3 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
        <Cpu className="w-4 h-4 text-cyan-400" /> Infrastructure Health
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PipelineCard icon={ScanFace} title="RTSP Node" description="1080p @ 30 FPS" active={true} />
        <PipelineCard icon={Cpu} title="Tensor Core" description="Queue: 0 backlog" active={true} />
        <PipelineCard icon={Database} title="Vector DB" description="4,900 embeddings" active={true} />
      </div>
    </section>
  );
}

export function LowAttendanceRisk() {
  return (
    <div className="bg-white/[0.02] rounded-3xl border border-white/10 shadow-lg p-5 sm:p-6 backdrop-blur-md">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          Attendance Risk
        </h3>
        <button className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors">View Logs</button>
      </div>
      <div className="space-y-3">
        {lowAttendanceStudents.map((student) => (
          <div key={student.id} className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold text-xs border border-white/10 shrink-0">
                {student.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-200 truncate">{student.name}</p>
                <p className="text-xs text-slate-500 font-light truncate">{student.id} • {student.course}</p>
              </div>
            </div>
            <span className={`text-sm font-extrabold pl-2 drop-shadow-md ${student.percentage < 70 ? "text-rose-400" : "text-amber-400"}`}>
              {student.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
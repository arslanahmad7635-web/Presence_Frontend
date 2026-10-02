import React, { useState, useEffect } from "react";
import { ShieldCheck, ShieldAlert, CheckCircle2, XCircle, ScanFace } from "lucide-react";
import { initialLiveStream } from "./dashboardData";

export default function LiveFeed({ isSessionActive }) {
  const [liveStream, setLiveStream] = useState(initialLiveStream);

  useEffect(() => {
    let interval;
    if (isSessionActive) {
      interval = setInterval(() => {
        const newDetection = {
          id: Date.now(),
          name: "James Wilson",
          studentId: `S-${Math.floor(1000 + Math.random() * 9000)}`,
          matchScore: Math.floor(85 + Math.random() * 14),
          time: "Just now",
          status: Math.random() > 0.1 ? "pass" : "spoof",
        };
        setLiveStream((prev) => [newDetection, ...prev].slice(0, 8));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isSessionActive]);

  return (
    <div className="bg-[#0A1220]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col h-[400px] sm:h-[500px] font-['Poppins',sans-serif] overflow-hidden">
      <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <h3 className="text-sm font-bold text-white flex items-center gap-3 uppercase tracking-widest">
          <span className="relative flex h-2.5 w-2.5">
            {isSessionActive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>}
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isSessionActive ? "bg-cyan-500" : "bg-slate-600"}`}></span>
          </span>
          Live Feed Stream
        </h3>
        <span className="text-[10px] font-mono font-medium bg-white/5 text-cyan-400 px-2.5 py-1 rounded-md border border-white/10">
          AUTO-SCROLL
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3 relative">
        {/* Animated Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {liveStream.map((item) => (
          <div key={item.id} className="relative z-10 bg-white/[0.03] border border-white/10 rounded-2xl p-4 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className={`text-sm font-bold ${item.status === "spoof" ? "text-rose-400" : "text-slate-200"}`}>
                  {item.name}
                </p>
                <p className="text-xs font-light text-slate-400 mt-0.5">{item.studentId}</p>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-1 rounded border border-white/5">
                {item.time}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full border-2 border-[#0A1220] bg-cyan-900/50 flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.studentId}E`} alt="Enrolled" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-[#0A1220] bg-slate-800 flex items-center justify-center overflow-hidden relative">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.studentId}L`} alt="Live" className="w-full h-full object-cover opacity-70 grayscale contrast-125" />
                    <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay"></div>
                  </div>
                </div>
                <div className="ml-4 flex flex-col">
                  <span className="text-xs font-bold text-slate-300">{item.matchScore}% Vector Match</span>
                  {item.status === "pass" ? (
                    <span className="text-[10px] flex items-center gap-1.5 text-emerald-400 font-medium mt-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Liveness Verified
                    </span>
                  ) : (
                    <span className="text-[10px] flex items-center gap-1.5 text-rose-400 font-medium mt-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> Spoof Detected
                    </span>
                  )}
                </div>
              </div>
              <div>
                {item.status === "pass" ? <CheckCircle2 className="w-5 h-5 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> : <XCircle className="w-5 h-5 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />}
              </div>
            </div>
          </div>
        ))}
        
        {!isSessionActive && (
          <div className="absolute inset-0 bg-[#0A1220]/80 backdrop-blur-sm flex flex-col items-center justify-center text-slate-400 z-20">
            <ScanFace className="w-12 h-12 mb-3 opacity-30 text-cyan-400" />
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400/70">Awaiting Data Stream</p>
          </div>
        )}
      </div>
    </div>
  );
}
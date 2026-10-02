import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import LiveFeed from "./LiveFeed";
import { 
  KPICards, 
  SessionControl, 
  AttendanceCharts, 
  SystemPipeline, 
  LowAttendanceRisk 
} from "./DashboardWidgets";
import { Calendar, Plus, ScanFace } from "lucide-react";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("Command Center");
  const [isSessionActive, setIsSessionActive] = useState(false);

  return (
    <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
      
      {activePage === "Command Center" && (
        <>
          <KPICards />

          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-8 mt-8">
            {/* Main Center Area */}
            <div className="2xl:col-span-2 space-y-8">
              <SessionControl 
                isSessionActive={isSessionActive} 
                setIsSessionActive={setIsSessionActive} 
              />
              <AttendanceCharts />
              <SystemPipeline />
            </div>

            {/* Right HUD Area */}
            <div className="space-y-8">
              <LiveFeed isSessionActive={isSessionActive} />
              <LowAttendanceRisk />
            </div>
          </div>
        </>
      )}

      {/* Blank State Route Examples */}
      {activePage === "Session Schedule" && (
        <div className="bg-[#0A1220]/50 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Session Schedule</h2>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-sm font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Plus className="w-4 h-4" /> Create Block
            </button>
          </div>
          <div className="text-slate-400 text-center py-24 border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.01] flex flex-col items-center justify-center">
            <Calendar className="w-14 h-14 text-cyan-500/30 mb-5" />
            <p className="text-lg font-bold text-white mb-2">No active schedules found.</p>
            <p className="text-sm font-light text-slate-500">Initialize a new timetable block to begin tracking.</p>
          </div>
        </div>
      )}

      {["Identity Database", "Compliance Logs", "Global Settings"].includes(activePage) && (
        <div className="bg-[#0A1220]/50 backdrop-blur-md rounded-3xl border border-white/10 shadow-lg p-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-8">{activePage}</h2>
          <div className="text-slate-400 text-center py-24 border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.01] flex flex-col items-center justify-center">
            <ScanFace className="w-14 h-14 text-cyan-500/30 mb-5 animate-pulse" />
            <p className="text-lg font-bold text-white mb-2">Module Offline</p>
            <p className="text-sm font-light text-slate-500 uppercase tracking-widest">{activePage} interface is currently under construction.</p>
          </div>
        </div>
      )}
      
    </DashboardLayout>
  );
}
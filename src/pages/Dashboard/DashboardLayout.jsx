import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ScanFace, LayoutDashboard, Calendar, Users, FileText, Settings, 
  Menu, X, Search, Download, Plus, Bell, LogOut
} from "lucide-react";
import { useAuth } from "../../auth/AuthProvider";

const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-left ${
      active 
        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]" 
        : "text-slate-400 hover:bg-white/[0.05] hover:text-slate-200 border border-transparent"
    }`}
  >
    <Icon className={`w-5 h-5 shrink-0 ${active ? "text-cyan-400 drop-shadow-md" : "text-slate-500"}`} />
    {label}
  </button>
);

export default function DashboardLayout({ activePage, setActivePage, children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen w-full bg-[#050A12] flex font-['Poppins',sans-serif] text-slate-200 overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#040812] border-r border-white/10 flex flex-col h-full transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 shrink-0 bg-white/[0.01]">
          <Link to={'/'} className="flex items-center gap-2 group">
            <ScanFace className="w-7 h-7 text-cyan-400 transition-transform group-hover:scale-110" />
            <span className="text-xl font-extrabold tracking-tight text-white">
              Presence <span className="text-cyan-400">AI</span>
            </span>
          </Link>
          <button 
            className="md:hidden p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          <span className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2 block">Main Menu</span>
          <NavItem icon={LayoutDashboard} label="Command Center" active={activePage === "Command Center"} onClick={() => handleNavClick("Command Center")} />
          <NavItem icon={Calendar} label="Session Schedule" active={activePage === "Session Schedule"} onClick={() => handleNavClick("Session Schedule")} />
          <NavItem icon={Users} label="Identity Database" active={activePage === "Identity Database"} onClick={() => handleNavClick("Identity Database")} />
          
          <span className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2 mt-6 block">System</span>
          <NavItem icon={FileText} label="Compliance Logs" active={activePage === "Compliance Logs"} onClick={() => handleNavClick("Compliance Logs")} />
          <NavItem icon={Settings} label="Global Settings" active={activePage === "Global Settings"} onClick={() => handleNavClick("Global Settings")} />
        </nav>

        <div className="p-5 border-t border-white/10 shrink-0 bg-white/[0.02]">
          <div className="flex items-center gap-4 bg-black/40 p-3 rounded-2xl border border-white/5">
            <div className="w-10 h-10 rounded-full border border-cyan-500/30 bg-[#0A1220] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=AdminX" alt="Admin" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white truncate">System Root</p>
              <p className="text-[10px] font-mono text-cyan-400 truncate">Access: Level 1</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col h-full min-w-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#050A12] to-[#050A12]">
        
        {/* HEADER */}
        <header className="h-20 min-h-[80px] bg-[#050A12]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 lg:px-10 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 -ml-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight hidden sm:block">
                {activePage}
              </h1>
              <p className="text-xs font-mono text-cyan-400/70 hidden sm:block mt-0.5">STATUS: SECURE CONNECTION</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative hidden lg:block w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search vectors or IDs..."
                className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-600 transition-all font-light"
              />
            </div>
            
            <div className="h-8 w-px bg-white/10 hidden sm:block mx-1"></div>
            
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-300 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.08] transition-colors">
              <Download className="w-4 h-4 text-slate-400" />
              <span className="hidden xl:inline">Export CSV</span>
            </button>
            <button className="group flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
              <span className="hidden sm:inline">Add Vector</span>
            </button>
            <button className="relative p-2.5 text-slate-400 hover:text-white rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#050A12]"></span>
            </button>
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 px-3 py-2.5 text-sm font-semibold text-rose-300 transition-colors hover:bg-rose-500/20"
              aria-label="Log out"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Log out</span>
            </button>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
          <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
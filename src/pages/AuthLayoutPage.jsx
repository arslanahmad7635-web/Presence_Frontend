import React from 'react';
import { Link } from 'react-router-dom';
import { ScanFace, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AuthLayout({ children, icon: Icon = ScanFace, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased flex flex-col justify-between font-['Poppins',sans-serif] relative overflow-hidden">
      {/* Background Glows */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(34,211,238,0.22),rgba(59,130,246,0.1)_60%,transparent_100%)] blur-3xl" />

      {/* Top Header Navigation */}
      <header className="relative z-10 w-full px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#030712]">
              <ScanFace size={18} className="text-cyan-400" />
            </div>
          </div>
          <span className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
            Presence<span className="text-cyan-400">.</span>
          </span>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Glass Card Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-cyan-500/30 bg-[#060D1A]/90 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] backdrop-blur-2xl relative overflow-hidden">
            
            {/* Top Cyan Line Accent */}
            <div aria-hidden className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.9)]" />

            {/* Header Icon Badge */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] mb-4">
                <Icon size={26} />
              </div>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">{title}</h1>
              {subtitle && <p className="mt-2 text-xs text-slate-400 font-light leading-relaxed">{subtitle}</p>}
            </div>

            {/* Auth Form / Children */}
            {children}
          </div>

          {/* Bottom Security Assurance Tag */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>256-Bit Encrypted Biometric Transport</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-xs text-slate-600 font-mono">
        © {new Date().getFullYear()} Presence AI Inc. All rights reserved.
      </footer>
    </div>
  );
}
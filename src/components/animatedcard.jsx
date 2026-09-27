import React from 'react';

export default function AnimatedCard({ imgSrc, title, aboutProduct, index = 0 }) {
  return (
    <div className="relative w-72 group">

      {/* Soft outer gradient glow */}
      <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-br from-cyan-500/40 via-blue-500/20 to-purple-500/30 opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Card shell */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-700/60 shadow-2xl">

        {/* Radial top light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none" />

        {/* Faint tech grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Viewfinder corner brackets */}
        <span className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400/80 rounded-tl pointer-events-none" />
        <span className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-cyan-400/80 rounded-tr pointer-events-none" />
        <span className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-cyan-400/80 rounded-bl pointer-events-none" />
        <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400/80 rounded-br pointer-events-none" />

        {/* Index badge (01, 02, 03, 04) */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-cyan-300 tracking-[0.2em]">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Content */}
        <div className="relative px-7 pt-12 pb-8 flex flex-col items-center text-center">

          {/* Icon orb */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/30 blur-2xl group-hover:bg-cyan-400/60 transition-all duration-500" />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center p-4 shadow-inner">
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white tracking-tight mb-3">
            {title}
          </h3>

          {/* Divider */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent mb-4" />

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed">
            {aboutProduct}
          </p>
        </div>

        {/* Hover scan sweep */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[520px] transition-all duration-[1400ms] ease-out" />
        </div>

      </div>
    </div>
  );    
}
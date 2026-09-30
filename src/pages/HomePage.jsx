import Hero from '../components/Hero';
import AnimatedCardDemo from '../components/AnimatedCardDemo';
import Navbar from '@/components/Navbar';


export default function HomePage() {
  return (
    <>
      
      <Navbar />
      
      <Hero />
      <section className="relative py-28 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/60" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/25 text-cyan-300 text-xs font-semibold tracking-[0.25em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              System Architecture
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Powered by{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Modern Technologies</span>
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent rounded-full" />
            </span>
          </h2>
          <p className="mt-8 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">Click anywhere on the card area below to expand and explore the toolchain driving our system.</p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-slate-700" />
            <span className="w-1 h-1 rounded-full bg-cyan-400/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="w-1 h-1 rounded-full bg-cyan-400/80" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-slate-700" />
          </div>
        </div>
        <div className="w-full max-w-7xl relative z-10 h-[520px] flex items-center justify-center">
          <AnimatedCardDemo />
        </div>
      </section>
    </>
  );
}

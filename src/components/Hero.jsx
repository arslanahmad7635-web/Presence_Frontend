import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Zap, ScanFace, Lock, Activity } from 'lucide-react';
import FaceRecognitionImage from '../assets/face.jpeg';

const NAMES = ['Aisha Khan', 'Usman Tariq', 'Hira Malik', 'Sana Iqbal'];

function useP(progress, from, to) {
  const reduced = useReducedMotion();
  return useTransform(progress, [0, 1], reduced ? [to, to] : [from, to]);
}

export default function Hero() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress: hp } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const { scrollYProgress: cp } = useScroll({ target: cardRef, offset: ['start end', 'center center'] });

  const gridY = useP(hp, 0, 180);
  const glowY = useP(hp, 0, -140);
  const textY = useP(hp, 0, -80);
  const textOpacity = useTransform(hp, [0, 0.55], [1, 0]);
  const rotateX = useP(cp, 22, 0);
  const scale = useP(cp, 0.88, 1);
  const chipA = useP(cp, 120, -30);
  const chipB = useP(cp, 200, -80);
  const chipC = useP(cp, 60, -120);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setN((v) => v + 1), 2400);
    return () => clearInterval(id);
  }, [reduced]);

  const name = NAMES[n % NAMES.length];

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-[#050A12] pb-32 text-white font-['Poppins',sans-serif]">
      {/* Dynamic Parallax Background Layers */}
      <motion.div
        aria-hidden
        style={{
          y: gridY,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 25%, #000, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 25%, #000, transparent 75%)',
        }}
        className="pointer-events-none absolute inset-x-0 -top-20 h-[900px] opacity-[0.06]"
      />
      <motion.div
        aria-hidden
        style={{
          y: glowY,
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(34,211,238,.24), transparent 70%)',
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 blur-2xl"
      />

      {/* Main Hero Header */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 pt-36 text-center sm:pt-44"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] px-4 py-1.5 backdrop-blur-md"
        >
          <ScanFace size={15} className="text-cyan-300" />
          <span className="text-xs font-semibold text-cyan-200 tracking-wide">
            Next-Gen Facial Biometrics for Schools & Enterprise
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-3xl font-extrabold tracking-tight sm:text-7xl lg:text-[5rem] leading-[1.05]"
        >
          Attendance that{' '}
          <span className="block bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 drop-shadow-[0_0_35px_rgba(34,211,238,0.3)]">
            takes itself.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-slate-300 sm:text-xl"
        >
          Walk in, get recognized, get marked. Under a second with zero physical touch, no cards, and 99.8% anti-spoofing accuracy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/admin"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          >
            <span>Get Started Free</span>
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/about"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.08] hover:text-cyan-300"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              <Play size={10} className="fill-current ml-0.5" />
            </div>
            <span>Watch Live Demo</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Tilting Product Card + Floating HUD Chips */}
      <div ref={cardRef} className="relative z-10 mx-auto mt-20 max-w-5xl px-5" style={{ perspective: '1400px' }}>
        <motion.div
          style={{ rotateX, scale, transformOrigin: '50% 0%' }}
          className="rounded-[28px] border border-cyan-500/30 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.9)] backdrop-blur-2xl will-change-transform"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-black sm:aspect-[16/9]">
            {/* Real Biometric Live Scanner Background */}
            <img
              src={FaceRecognitionImage}
              alt="Camera view recognizing a face"
              decoding="async"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A12] via-transparent to-[#050A12]/50" />

            {/* Laser Scanning Beam */}
            <div
              aria-hidden
              className="pv-anim absolute inset-0 border-b-2 border-cyan-300 bg-gradient-to-b from-transparent to-cyan-300/20"
              style={{ animation: 'pvSweep 3.6s ease-in-out infinite' }}
            />

            {/* Futuristic Bounding Target Box */}
            <div className="absolute left-1/2 top-[22%] h-[46%] w-[24%] -translate-x-1/2 rounded-xl border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] flex flex-col justify-between p-1">
              <div className="flex justify-between">
                <span className="w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-300" />
                <span className="w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-300" />
              </div>

              {/* Dynamic Name Recognition Pop */}
              <span
                key={name}
                className="pv-anim self-center whitespace-nowrap rounded-md bg-cyan-400 px-3 py-1 text-xs font-extrabold text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                style={{ animation: 'pvPop .35s ease-out' }}
              >
                <CheckCircle2 size={13} className="inline mr-1 -mt-0.5" /> {name}
              </span>

              <div className="flex justify-between">
                <span className="w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-300" />
                <span className="w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-300" />
              </div>
            </div>

            {/* Top Status Bar */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/60 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>Main Gate Camera 01 • LIVE</span>
            </div>

            {/* Bottom Security Verification Badge */}
            <div className="absolute right-4 bottom-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-black/70 px-3 py-1.5 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
              <Lock size={12} className="text-emerald-400" />
              <span>MiniFASNetV2 Anti-Spoof: REAL (0.998)</span>
            </div>
          </div>
        </motion.div>

        {/* Parallax Floating Chips */}
        <motion.div
          style={{ y: chipA }}
          className="absolute -left-2 top-[18%] hidden items-center gap-3.5 rounded-2xl border border-cyan-500/30 bg-[#0A1220]/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md md:flex lg:-left-10"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 size={20} />
          </span>
          <div>
            <span className="block text-xs font-bold text-white">{name}</span>
            <span className="block text-[11px] font-medium text-emerald-400">Marked Present • 08:02 AM</span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: chipB }}
          className="absolute -right-2 top-[42%] hidden items-center gap-3.5 rounded-2xl border border-cyan-500/30 bg-[#0A1220]/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md md:flex lg:-right-10"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300 border border-cyan-500/30">
            <Zap size={20} />
          </span>
          <div>
            <span className="block text-xs font-bold text-white">0.12s Vector Search</span>
            <span className="block text-[11px] font-medium text-slate-400">99.8% Match Rate</span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: chipC }}
          className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0A1220]/90 px-6 py-3 text-xs shadow-2xl backdrop-blur-md md:block"
        >
          <span className="font-extrabold text-white text-sm">247</span>
          <span className="text-slate-400"> Present today • </span>
          <span className="font-extrabold text-amber-300 text-sm">6</span>
          <span className="text-slate-400"> Late • </span>
          <span className="font-extrabold text-cyan-300 text-sm">0</span>
          <span className="text-slate-400"> Cards Needed</span>
        </motion.div>
      </div>

      <style>{`
        @keyframes pvSweep { from{transform:translateY(-100%)} to{transform:translateY(0)} }
        @keyframes pvPop { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }
        @media (prefers-reduced-motion: reduce){ .pv-anim{animation:none!important} }
      `}</style>
    </section>
  );
}
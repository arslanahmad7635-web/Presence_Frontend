import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion,
} from 'framer-motion';
import {
  ScanFace, ArrowRight, Camera, BellRing, LayoutDashboard, Lock,
  FileBarChart, Zap, CheckCircle2, ShieldCheck, Database, Cpu
} from 'lucide-react';
import Hero from '../components/Hero';
import Navbar from '@/components/Navbar';

/* ───────────── 1. Word-by-word reveal Statement ───────────── */
function Word({ p, range, children }) {
  const opacity = useTransform(p, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

function Statement() {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = 'Every minute spent calling roll names is a minute stolen from real learning and high-value work.'.split(' ');

  return (
    <section className="px-6 py-28 sm:py-40 font-['Poppins',sans-serif]">
      <p
        ref={ref}
        className="mx-auto max-w-5xl text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {words.map((w, i) => (
          <Word key={i} p={p} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
        ))}
      </p>
    </section>
  );
}

/* ───────────── 2. Pinned Scroll Story with DIVERSE Suitable Images ───────────── */
const STEPS = [
  { 
    t: 'Enroll once in seconds', 
    d: 'Add a member using standard portrait photos. The system generates a 512-dimensional vector embedding stored securely.', 
    s: 'Enrolling Student Vectors…',
    // Contextual image for Step 1: Face registration / Enrollment photo
    img: 'https://cdn.pixabay.com/photo/2022/09/12/17/39/woman-7450034_1280.jpg',
    tag: 'Step 01 • Instant Registration'
  },
  { 
    t: 'Walk past the scanner camera', 
    d: 'Presence detects subjects in real-time as they enter, verifying liveness and logging arrival timestamps without stopping.', 
    s: 'Liveness Verified • Match Found',
    // Contextual image for Step 2: Entrance / Walking past camera node
    img: 'https://static.tildacdn.com/tild3732-6431-4664-b037-386230346464/what-is-FR.jpg',
    tag: 'Step 02 • Touchless Recognition'
  },
  { 
    t: 'Review real-time intelligence', 
    d: 'View live attendance, automatic tardiness tracking, and automated summaries directly on your admin dashboard.', 
    s: 'Attendance Logged to Cloud',
    // Contextual image for Step 3: Analytics Dashboard / Real-time reporting
    img: 'https://media.istockphoto.com/id/1672185254/vector/vector-render-3d-of-right-check-mark-box-green-approvement-icon-or-emblem.jpg?s=612x612&w=0&k=20&c=xOF_2C296y60M9CMvEi0YVaFQUNF0jl18FeBEnoVWDM=',
    tag: 'Step 03 • Automated Logs'
  },
];

function Story() {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const scanY = useTransform(p, [0, 1], ['-100%', '0%']);
  const imgScale = useTransform(p, [0, 1], [1.1, 1]);

  useMotionValueEvent(p, 'change', (v) => setI(v < 0.34 ? 0 : v < 0.67 ? 1 : 2));

  return (
    <section ref={ref} className="relative h-[300vh] font-['Poppins',sans-serif]">
      <div className="sticky top-0 flex h-screen items-center px-6">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
          
          {/* Dynamic Image Container */}
          <div className="relative order-1 overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#040812] shadow-[0_0_50px_rgba(0,0,0,0.8)] md:order-2">
            <div className="relative h-[42vh] md:h-[65vh]">
              <motion.img
                key={STEPS[i].img}
                src={STEPS[i].img}
                alt={STEPS[i].t}
                style={{ scale: imgScale }}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 0.85 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A12] via-transparent to-black/30" />
              
              {/* Animated HUD Scan Laser */}
              <motion.div
                aria-hidden
                style={{ y: scanY }}
                className="absolute inset-0 border-b-2 border-cyan-400 bg-gradient-to-b from-transparent to-cyan-400/20"
              />

              {/* Status Badge Tag */}
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/70 px-3.5 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                {STEPS[i].s}
              </span>

              {/* Step indicator pill */}
              <div className="absolute right-4 top-4 rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-mono text-slate-300 backdrop-blur-md">
                {STEPS[i].tag}
              </div>

              {/* Live Match Notification */}
              <div
                className={`absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-[#0A1220]/95 p-4 backdrop-blur-xl transition-all duration-500 ${
                  i === 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <CheckCircle2 className="text-emerald-400 shrink-0" size={24} />
                <div className="flex-1">
                  <div className="text-xs font-bold text-white">Aisha Khan • Class 10-A</div>
                  <div className="text-[11px] text-slate-400">Timestamp: 08:02 AM • Verified Real</div>
                </div>
                <span className="rounded-lg bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  Present
                </span>
              </div>
            </div>
          </div>

          {/* Steps Description */}
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Seamless Workflow
            </span>
            <h2 className="mb-8 mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Three steps, zero manual effort.
            </h2>
            <ol className="relative space-y-8 border-l border-white/10 pl-7">
              <motion.span
                aria-hidden
                style={{ scaleY: p }}
                className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              />
              {STEPS.map((s, k) => (
                <li key={s.t} className={`transition-all duration-500 ${k === i ? 'opacity-100 scale-100' : 'opacity-30 scale-95 max-md:hidden'}`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Step 0{k + 1}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400 text-sm sm:text-base font-light">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ───────────── 3. Parallax Feature Columns ───────────── */
const FEATURES = [
  { 
    icon: Zap, 
    t: 'Marked in under a second', 
    d: 'Sub-second matching keeps entrance corridors moving without congestion during peak hours.', 
    bars: true 
  },
  { 
    icon: LayoutDashboard, 
    t: 'Live real-time dashboard', 
    d: 'Watch student or employee arrivals instantly, categorized by department, class, or gate.' 
  },
  { 
    icon: BellRing, 
    t: 'Automated late alerts', 
    d: 'Instant alerts flag unrecorded or late arrivals for swift administrative follow-up.' 
  },
  { 
    icon: Camera, 
    t: 'Compatible with standard webcams', 
    d: 'Deploy using built-in laptop webcams or institutional RTSP camera streams seamlessly.' 
  },
  { 
    icon: FileBarChart, 
    t: 'One-click compliance reports', 
    d: 'Export daily, weekly, or monthly summaries formatted for your management system.', 
    bars: true 
  },
  { 
    icon: Lock, 
    t: 'Encrypted biometric vectors', 
    d: 'Facial data is tokenized into non-reversible vector embeddings to protect personal identity.' 
  },
];

function useWide() {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(min-width: 768px)');
    const f = () => setWide(m.matches);
    f();
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, []);
  return wide;
}

function Features() {
  const ref = useRef(null);
  const wide = useWide();
  const reduced = useReducedMotion();
  const k = wide && !reduced ? 1 : 0;
  
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = [
    useTransform(p, [0, 1], [90 * k, -90 * k]),
    useTransform(p, [0, 1], [-30 * k, 130 * k]),
    useTransform(p, [0, 1], [130 * k, -50 * k]),
  ];
  
  const cols = [0, 1, 2].map((c) => FEATURES.filter((_, i) => i % 3 === c));

  return (
    <section ref={ref} className="px-6 pb-32 pt-12 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Engineered For Performance
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Everything attendance needs. Nothing it doesn't.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cols.map((items, c) => (
            <motion.div key={c} style={{ y: y[c] }} className="flex flex-col gap-6 will-change-transform">
              {items.map(({ icon: I, t, d, bars }) => (
                <div
                  key={t}
                  className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    <I size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{t}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400 text-sm font-light">{d}</p>
                  
                  {bars && (
                    <div className="mt-6 flex h-14 items-end gap-1.5" aria-hidden>
                      {[35, 55, 42, 70, 60, 88, 66, 80, 52, 74].map((h, i) => (
                        <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/20 to-cyan-400/80 transition-all group-hover:from-cyan-400 group-hover:to-blue-500" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── 4. CTA with Parallax Glow Rings ───────────── */
function CTA() {
  const ref = useRef(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const s1 = useTransform(p, [0, 1], [0.6, 1.4]);
  const s2 = useTransform(p, [0, 1], [0.4, 1.1]);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-32 text-center sm:py-44 font-['Poppins',sans-serif]">
      {/* Parallax Radial Halo Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
        <motion.div style={{ scale: s1 }} className="absolute h-[640px] w-[640px] rounded-full border border-cyan-400/15" />
        <motion.div style={{ scale: s2 }} className="absolute h-[500px] w-[500px] rounded-full border border-cyan-400/25" />
        <div className="h-[400px] w-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(34,211,238,.2), transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
          Stop taking attendance. <br />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Start automating it.
          </span>
        </h2>
        <p className="mt-6 text-base text-slate-300 font-light sm:text-lg">
          Connect your camera stream today and watch morning arrivals log themselves seamlessly.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/admin"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-sm font-bold text-slate-950 transition-transform duration-300 hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            <span>Get Started Free</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-slate-200 backdrop-blur-md hover:bg-white/[0.08]"
          >
            Schedule Enterprise Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050A12] text-white antialiased [overflow-x:clip] font-['Poppins',sans-serif]">
      <Navbar />
      <Hero />
      <Statement />
      <Story />
      <Features />
      <CTA />
      
      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-6 py-10 text-xs text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
          <span className="flex items-center gap-2 text-white font-bold text-sm">
            <ScanFace size={20} className="text-cyan-400" /> Presence AI
          </span>
          <nav className="flex gap-6" aria-label="Footer Navigation">
            <Link to="/about" className="hover:text-slate-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
          </nav>
          <span>© {new Date().getFullYear()} Presence AI Inc. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
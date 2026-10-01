import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Cpu, ShieldCheck, Zap, Layers, ArrowRight, Eye, Database, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ARCHITECTURE_STEPS = [
  {
    number: "01",
    title: "InsightFace SCRFD Detection",
    tagline: "Sub-millisecond Face Localization",
    description: "Webcam feeds stream frames asynchronously to our edge inference pipeline. SCRFD accurately detects multi-face bounding boxes even under dynamic lighting and off-axis head poses.",
    icon: Eye,
    stat: "< 12ms frame processing"
  },
  {
    number: "02",
    title: "MiniFASNetV2 Anti-Spoofing",
    tagline: "Neural Liveness Verification",
    description: "Before feature extraction, deep convolutional networks evaluate texture micro-patterns and depth reflections, rejecting paper prints, mobile screens, and 3D silicone mask spoofs.",
    icon: ShieldCheck,
    stat: "99.8% spoof rejection"
  },
  {
    number: "03",
    title: "512D ArcFace Vector Extraction",
    tagline: "High-Discriminative Feature Mapping",
    description: "Deep residual networks project aligned facial landmarks into a 512-dimensional hypersphere embedding, maximizing inter-class separation while normalizing scale and illumination.",
    icon: Cpu,
    stat: "512-D L2 Normalized"
  },
  {
    number: "04",
    title: "Qdrant Vector Search & Sync",
    tagline: "Cosine Similarity Matching",
    description: "Extracted embeddings perform high-speed HNSW vector search against enrolled institutional indexes, immediately logging timestamped attendance to Django REST backend and React console.",
    icon: Database,
    stat: "Sub-50ms query match"
  },
];

const METRICS = [
  { label: "Verification Latency", value: "< 90ms", desc: "End-to-end frame capture to log" },
  { label: "Spoof Prevention", value: "99.8%", desc: "MiniFASNetV2 liveness accuracy" },
  { label: "Vector Search Capacity", value: "100k+", desc: "Embeddings per institution node" },
  { label: "Hardware Agnostic", value: "100%", desc: "Runs on webcams, IP cams & RTSP" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased font-['Poppins',sans-serif]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-36 pb-20 px-6 sm:pt-44">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(34,211,238,0.18),rgba(59,130,246,0.08)_60%,transparent_100%)] blur-3xl" />
        
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 tracking-wide"
          >
            <ScanFace size={14} className="text-cyan-400" />
            <span>Next-Gen Biometric Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight"
          >
            Engineering touchless attendance with{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              deep neural vision.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:text-xl font-light leading-relaxed"
          >
            Presence AI bridges edge computer vision models with real-time distributed backends—delivering frictionless identity recognition and live liveness detection without physical queuing.
          </motion.p>
        </div>
      </section>

      {/* Visual System Overview Grid */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              System Architecture & Mission
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Zero manual roll calls. Pure mathematical precision.
            </h2>
            <p className="text-slate-300 text-sm font-light leading-relaxed sm:text-base">
              Traditional attendance tracking suffers from proxy marking, wasted lecture hours, and cumbersome physical card readers. Presence AI transforms standard laptop webcams and IP feeds into intelligent biometric entry points using state-of-the-art computer vision models.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Non-reversible 512D ArcFace vector embeddings preserve privacy',
                'Dual-stream liveness detection halts print and screen attacks',
                'Asynchronous frame queues ensure continuous high-FPS streaming',
                'Instant synchronization with academic administration dashboards'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/30 to-[#030712] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
                alt="Biometric Neural Network Matrix"
                className="h-[360px] w-full rounded-2xl object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-cyan-400/30 bg-[#030712]/90 p-4 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                    <Activity size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">InsightFace Inference Pipeline</div>
                    <div className="text-[11px] text-cyan-400 font-mono">Status: Active • Multi-thread CUDA</div>
                  </div>
                </div>
                <span className="rounded-lg bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, idx) => (
              <div key={idx} className="border-l-2 border-cyan-400/80 pl-5">
                <div className="text-3xl font-black text-white">{m.value}</div>
                <div className="mt-1 text-sm font-bold text-cyan-300">{m.label}</div>
                <div className="mt-0.5 text-xs text-slate-400">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline Step Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              End-To-End Ingestion Workflow
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
              How the computer vision stack processes live video.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ARCHITECTURE_STEPS.map(({ number, title, tagline, description, icon: Icon, stat }) => (
              <div
                key={number}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/[0.07] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="rounded-xl bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 text-xs font-extrabold text-cyan-300">
                      {number}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-cyan-400 border border-white/10 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-cyan-400/90">{tagline}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 font-light">
                    {description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 group-hover:text-cyan-300">
                  {stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-[#030712] p-10 backdrop-blur-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Experience real-time recognition live.
          </h2>
          <p className="mt-4 text-sm text-slate-300 font-light max-w-xl mx-auto">
            Test our webcam-based face detection and liveness scoring directly inside the admin console.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3.5 text-xs font-extrabold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all hover:scale-105"
            >
              <span>Launch Live Console</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} Presence AI Inc. All rights reserved.
      </footer>
    </div>
  );
}
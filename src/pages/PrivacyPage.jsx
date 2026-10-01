import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Database, Key, CheckCircle2, ScanFace, FileText, Cpu, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const POLICY_SECTIONS = [
  {
    icon: ScanFace,
    title: "No Raw Photo Retention",
    summary: "Raw facial images captured during enrollment are immediately transformed into 512-dimensional L2-normalized vector embeddings using InsightFace ArcFace. Once the vector is calculated, the raw image frame is purged from transient memory.",
    detail: "Embeddings cannot be reconstructed into original human facial photos."
  },
  {
    icon: Database,
    title: "Vector DB Storage & Cosine Indexing",
    summary: "Facial vectors are stored inside isolated institutional collections within our Qdrant vector engine. All vector queries are executed over encrypted transport layer channels using TLS 1.3.",
    detail: "Strict multi-tenant tenant isolation prevents cross-institution vector leaks."
  },
  {
    icon: ShieldCheck,
    title: "Anti-Spoofing Liveness Verification",
    summary: "MiniFASNetV2 convolutional neural networks analyze frame liveness directly on edge nodes to confirm physical presence before triggering database lookups.",
    detail: "Prevents spoofing attempts via paper photos, digital screens, or 3D masks."
  },
  {
    icon: Lock,
    title: "Encryption in Transit & At Rest",
    summary: "All API traffic between webcam client interfaces, FastAPI inference services, and Django REST admin backends is protected with AES-256 encryption at rest and TLS 1.3 in transit.",
    detail: "Industry-standard cryptographic controls for enterprise higher education."
  },
  {
    icon: Key,
    title: "User Rights & Data Purging",
    summary: "Students and faculty members retain full rights under applicable data protection frameworks to request inspection or permanent deletion of their numerical vector token from the system.",
    detail: "One-click admin purge immediately removes vector points from Qdrant indexes."
  },
  {
    icon: FileText,
    title: "Compliance & Institutional Governance",
    summary: "Presence AI adheres to GDPR and higher education biometric compliance standards, strictly auditing log creation and maintaining transparent data retention timelines.",
    detail: "Attendance logs are retained strictly per institutional academic policies."
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased font-['Poppins',sans-serif]">
      <Navbar />

      <section className="relative overflow-hidden pt-36 pb-20 px-6 sm:pt-44">
        {/* Glow Effects */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(34,211,238,0.18),rgba(59,130,246,0.08)_60%,transparent_100%)] blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300"
          >
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>Biometric Data Governance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight"
          >
            Your Biometric Privacy,{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mathematically Protected.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base font-light sm:text-lg max-w-2xl mx-auto"
          >
            Presence AI is engineered around privacy-by-design principles: turning facial imagery into irreversible numerical mathematical representations.
          </motion.p>
          <div className="mt-3 text-xs font-mono text-cyan-400/80 uppercase tracking-widest">
            Last updated: October 2026 • Version 2.4 Governance
          </div>
        </div>
      </section>

      {/* Policy Cards Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-5">
          {POLICY_SECTIONS.map(({ icon: Icon, title, summary, detail }, idx) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06] flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                <Icon size={22} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {title}
                  </h2>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 font-light">
                  {summary}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 text-xs font-medium text-cyan-300">
                  <CheckCircle2 size={13} className="text-cyan-400" />
                  <span>{detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Callout */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/20 via-[#030712] to-cyan-950/20 p-8 backdrop-blur-2xl flex flex-col sm:flex-row items-center gap-6">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
            <Lock size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Need a custom Security Audit or Data Processing Agreement?</h3>
            <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">
              Our engineering team provides comprehensive architectural documentation and security whitepapers for university IT and compliance officers.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} Presence AI Inc. All rights reserved.
      </footer>
    </div>
  );
}
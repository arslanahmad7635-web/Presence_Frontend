import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock, MessageSquare, ScanFace, Building } from 'lucide-react';
import Navbar from '../components/Navbar';

const CONTACT_CHANNELS = [
  {
    icon: Building,
    title: "Institutional Deployments",
    desc: "Custom multi-node deployment plans for universities, colleges, and enterprise campuses.",
    action: "sales@presence.ai"
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance Audits",
    desc: "Inquire about our biometric data encryption, GDPR standards, and local processing pipelines.",
    action: "security@presence.ai"
  },
  {
    icon: Clock,
    title: "24/7 Technical Support",
    desc: "Dedicated response engineers for camera integration, RTSP streaming, and vector index sync.",
    action: "support@presence.ai"
  }
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', institution: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '', institution: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white antialiased font-['Poppins',sans-serif]">
      <Navbar />

      <section className="relative overflow-hidden pt-36 pb-24 px-6 sm:pt-44">
        {/* Glow Halos */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_30%,rgba(34,211,238,0.18),rgba(59,130,246,0.08)_60%,transparent_100%)] blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300"
            >
              <MessageSquare size={14} className="text-cyan-400" />
              <span>Enterprise Integration Desk</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight"
            >
              Get in touch with our{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                biometric solutions team.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-300 text-base font-light sm:text-lg"
            >
              Have questions about integrating Presence AI with your institutional database or webcam hardware? Send us a message below.
            </motion.p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left Info Cards */}
            <div className="lg:col-span-5 space-y-4">
              {CONTACT_CHANNELS.map(({ icon: Icon, title, desc, action }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{title}</h3>
                      <div className="text-xs font-mono text-cyan-400">{action}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 font-light">
                    {desc}
                  </p>
                </div>
              ))}

              <div className="rounded-3xl border border-cyan-500/20 bg-cyan-950/20 p-6 backdrop-blur-xl flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Enterprise SLA Guaranteed</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Under 2-hour turnaround for institutional inquiry setups.</div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#060D1A] to-[#030712] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Tariq Mahmood"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Institutional Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tariq@university.edu"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Institution / Organization</label>
                    <input
                      type="text"
                      name="institution"
                      value={form.institution}
                      onChange={handleChange}
                      placeholder="Faculty of Computer Science"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Webcam Integration Request"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Provide details about your student batch size, camera setup, or preferred timeline..."
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 px-6 py-3.5 text-xs font-extrabold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <span className="animate-pulse">Transmitting inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Integration Inquiry</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                {status === 'sent' && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium text-center flex items-center justify-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>Inquiry received! Our team will get back to you within 2 hours.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium text-center">
                    An error occurred sending your message. Please retry.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500 font-mono">
        © {new Date().getFullYear()} Presence AI Inc. All rights reserved.
      </footer>
    </div>
  );
}
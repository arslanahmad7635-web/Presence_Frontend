<<<<<<< HEAD
import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative z-10 w-full min-h-screen bg-transparent flex justify-center text-slate-300">
      <div className="max-w-6xl w-full px-6 py-24">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Prescence</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">
            Redefining classroom attendance tracking through advanced computer vision and artificial intelligence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Section */}
          <div className="space-y-6 text-lg leading-relaxed">
            <h2 className="text-3xl font-semibold text-white mb-4">The Pinnacle of Educational Tech</h2>
            <p>
              Built with an elite full-stack architecture, Prescence pairs a high-performance <span className="text-cyan-400 font-medium">React interface</span> with a robust <span className="text-cyan-400 font-medium">Django backend</span> and a cutting-edge <span className="text-cyan-400 font-medium">PyTorch-powered InsightFace recognition engine</span>.
            </p>
            <p>
              Our platform automates institutional monitoring with sub-second precision, eliminating administrative friction, protecting instructional time, and delivering secure, contactless presence verification for the modern academic ecosystem.
            </p>
          </div>

          {/* Stats/Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "99.8%", label: "Recognition Accuracy" },
              { value: "< 1s", label: "Mark Time" },
              { value: "24/7", label: "Always On" },
              { value: "100%", label: "Contactless" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 group">
                <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{stat.value}</h3>
                <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="border-t border-slate-800 pt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-10">Powered by Elite Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">PyTorch Engine</h4>
                <p className="text-sm text-slate-400">State-of-the-art facial recognition models.</p>
              </div>
            </div>
            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Django Backend</h4>
                <p className="text-sm text-slate-400">Robust, secure, and scalable data management.</p>
              </div>
            </div>
            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">React Frontend</h4>
                <p className="text-sm text-slate-400">High-performance, responsive user interface.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
=======
// export default function AboutPage() {
//   return (
//     <div className="min-h-screen pt-32 px-6 text-center">
//       <h1 className="text-4xl font-bold text-white">About Us</h1>
//       <p className="text-slate-300 mt-4">ChronosFace is a next-gen computer vision attendance tracking system.</p>
//     </div>
//   );
// }
// ─────────────────────────────────────────────
// 1. CONTENT — replace with your own text
// ─────────────────────────────────────────────
const mission = {
  badge: "Our Mission",
  titleWhite: "About",
  titleAccent: "ChronosFace",
  description:
    "Write your overview here. Explain what ChronosFace is and why you built it.",
};

const steps = [
  {
    number: "01",
    title: "Step one title",
    description: "Describe the first step of how the system works.",
  },
  {
    number: "02",
    title: "Step two title",
    description: "Describe the second step of how the system works.",
  },
  {
    number: "03",
    title: "Step three title",
    description: "Describe the third step of how the system works.",
  },
  {
    number: "04",
    title: "Step four title",
    description: "Describe the fourth step of how the system works.",
  },
];

// ─────────────────────────────────────────────
// 2. SMALL REUSABLE PIECES
// ─────────────────────────────────────────────
function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {children}
    </span>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="group rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20">
      <span className="inline-block rounded-full border border-cyan-400/30 px-3 py-1 text-xs font-semibold text-cyan-300">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. PAGE
// ─────────────────────────────────────────────
export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-24 text-white"
    >
      {/* Soft cyan glow in the background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Mission / overview */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{mission.badge}</Badge>

          <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            {mission.titleWhite}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {mission.titleAccent}
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            {mission.description}
          </p>
        </div>

        {/* How it works */}
        <div className="mt-24">
          <div className="text-center">
            <Badge>How It Works</Badge>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From camera to{" "}
              <span className="text-cyan-400">attendance</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> 5e3b72e790a0eeab265e96f39b0d380ae404aa24

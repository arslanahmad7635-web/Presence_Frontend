<<<<<<< HEAD
import React from 'react';

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Real-Time Processing",
      description: "Raw video feeds are processed in real-time and are never permanently stored or archived. Your privacy is protected by design, not as an afterthought.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    },
    {
      title: "Anonymized Embeddings",
      description: "Advanced neural networks extract anonymized numerical feature embeddings, securely managed within encrypted relational and vector databases.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
    },
    {
      title: "Rigorous Access Controls",
      description: "We enforce strict, multi-layered access controls to guarantee absolute user protection and institutional compliance.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
    },
    {
      title: "Zero Third-Party Sharing",
      description: "Your biometric data is never sold, rented, or distributed. We maintain a strict zero third-party data sharing policy.",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
    }
  ];

  return (
    <div className="font-['Poppins'] relative w-full bg-transparent text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden py-20">
      
      {/* --- STUNNING HEADER SECTION --- */}
      <div className="max-w-6xl mx-auto px-6 relative mb-16">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-slate-800/80 pb-12">
          {/* Left Side: Title */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-xs font-medium tracking-wide mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Privacy First
            </div>
            
            <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Policy</span>
            </h1>
          </div>

          {/* Right Side: Description */}
          <div className="relative z-10 max-w-md">
            <p className="text-slate-400 font-light leading-relaxed md:text-right text-lg">
              At Prescence, the security and confidentiality of your biometric and personal data are paramount. Our system is engineered with strict privacy-first principles.
            </p>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 p-8 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-slate-700 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              {/* Top border gradient accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              
              <div className="flex flex-col gap-6">
                <div className="p-3.5 bg-slate-800/80 border border-slate-700/50 rounded-2xl text-cyan-400 w-fit group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  {policy.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-3 tracking-wide">{policy.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{policy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center border-t border-slate-800/80 pt-8">
          <p className="text-sm text-slate-500 font-light tracking-wide">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
=======
// ─────────────────────────────────────────────
// 1. CONTENT — replace with your own text
// ─────────────────────────────────────────────
const header = {
  badge: "Privacy Policy",
  titleWhite: "Your Data,",
  titleAccent: "Protected",
  description: "We ensure secure processing and protection of facial biometric data.",
  lastUpdated: "Last updated: Month DD, YYYY",
};

const sections = [
  {
    title: "Information We Collect",
    body: "Describe what data the system collects, such as facial images captured during enrollment, attendance timestamps, and basic account details.",
  },
  {
    title: "How We Use Your Data",
    body: "Explain the purpose of the data, for example marking attendance, generating reports, and improving recognition accuracy.",
  },
  {
    title: "Biometric Data Protection",
    body: "We do not store facial images. Only a numerical face embedding generated from your image is kept, and it is used solely to recognize you when marking attendance. Embeddings are still treated as sensitive biometric data and are protected with strict access controls.",
  },
  {
    title: "Data Retention",
    body: "State how long attendance records and biometric data are kept, and what happens when a user leaves the institution.",
  },
  {
    title: "Your Rights",
    body: "Explain how users can request access, correction, or deletion of their data.",
  },
  {
    title: "Contact",
    body: "Tell users who to contact with privacy questions, and point them to the Contact Us page.",
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

function PolicySection({ number, title, body }) {
  return (
    <div className="flex gap-5 rounded-2xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 sm:p-8">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-semibold text-cyan-300">
        {number}
      </span>
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. PAGE
// ─────────────────────────────────────────────
export default function PrivacyPolicy() {
  return (
    <section
      id="privacy"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-24 text-white"
    >
      {/* Soft cyan glow in the background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <Badge>{header.badge}</Badge>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            {header.titleWhite}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {header.titleAccent}
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            {header.description}
          </p>
          <p className="mt-3 text-xs uppercase tracking-wider text-slate-500">
            {header.lastUpdated}
          </p>
        </div>

        {/* Policy sections */}
        <div className="mt-14 space-y-5">
          {sections.map((section, index) => (
            <PolicySection
              key={section.title}
              number={String(index + 1).padStart(2, "0")}
              title={section.title}
              body={section.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> 5e3b72e790a0eeab265e96f39b0d380ae404aa24

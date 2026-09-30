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
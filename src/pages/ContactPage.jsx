import React from 'react';

const ContactSection = () => {
  return (
    <div className="font-['Poppins'] relative w-full bg-transparent text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden py-20">
      
      {/* --- STUNNING HEADER SECTION --- */}
      <div className="max-w-6xl mx-auto px-6 relative mb-16">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-slate-800/80 pb-12">
          {/* Left Side: Title */}
          <div className="relative z-10 max-w-2xl">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-xs font-medium tracking-wide mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Deployment
            </div>
            
            <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
              Let's build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">future of attendance.</span>
            </h1>
          </div>

          {/* Right Side: Description */}
          <div className="relative z-10 max-w-md">
            <p className="text-slate-400 font-light leading-relaxed md:text-right text-lg">
              Whether you are looking to integrate Prescence into your institution, explore our system architecture, or discuss technical collaborations, our team is ready to connect.
            </p>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          
          {/* Left Column: Information & Support (Takes 5/12 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Support Card */}
            <div className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 p-8 md:p-10 rounded-[2rem] relative overflow-hidden group hover:border-slate-700 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              {/* Top border gradient accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              
              <h3 className="text-xl font-medium text-white mb-8 tracking-wide">Deployment & Support</h3>
              
              <div className="space-y-8">
                {/* Info Item 1 */}
                <div className="flex items-start gap-5 group/item">
                  <div className="p-3.5 bg-slate-800/80 border border-slate-700/50 rounded-2xl text-cyan-400 group-hover/item:bg-cyan-500/10 group-hover/item:border-cyan-500/30 group-hover/item:scale-110 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1.5 text-base tracking-wide">Campus Deployments</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">Comprehensive assistance regarding institutional integration and hardware setup.</p>
                  </div>
                </div>

                {/* Info Item 2 */}
                <div className="flex items-start gap-5 group/item">
                  <div className="p-3.5 bg-slate-800/80 border border-slate-700/50 rounded-2xl text-cyan-400 group-hover/item:bg-cyan-500/10 group-hover/item:border-cyan-500/30 group-hover/item:scale-110 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1.5 text-base tracking-wide">API & Custom Workflows</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">Tailored administrative workflows and custom API integrations for your operations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Direct Contact Mini-Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-colors duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Email Us</span>
                <span className="text-sm text-white font-light">hello@prescence.ai</span>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-colors duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Call Us</span>
                <span className="text-sm text-white font-light">+1 (555) 000-0000</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form (Takes 7/12 columns) */}
          <div className="lg:col-span-7">
            <form className="bg-slate-900/40 backdrop-blur-2xl border border-slate-800/80 p-8 md:p-12 rounded-[2rem] relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              {/* Background glow for the form */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

              <div className="relative z-10 space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-300 tracking-wide">Full Name</label>
                    <input type="text" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 focus:bg-slate-900/80 transition-all duration-300 font-light text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-300 tracking-wide">Institution Email</label>
                    <input type="email" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 focus:bg-slate-900/80 transition-all duration-300 font-light text-sm" placeholder="john@university.edu" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-medium text-slate-300 tracking-wide">Subject</label>
                  <input type="text" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 focus:bg-slate-900/80 transition-all duration-300 font-light text-sm" placeholder="Deployment Inquiry" />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-slate-300 tracking-wide">Message</label>
                  <textarea rows="5" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 focus:bg-slate-900/80 transition-all duration-300 resize-none font-light text-sm" placeholder="How can we help you?"></textarea>
                </div>

                <div className="pt-2">
                  <button type="button" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] flex items-center justify-center gap-2 group relative overflow-hidden">
                    {/* Button Shine Effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Required for the button shimmer animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </div>
  );
};

export default ContactSection;
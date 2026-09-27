import React, { useState, useEffect } from 'react';

/**
 * Shared shell for every auth screen (Login, Signup, Forgot Password).
 * Keeping the frame in one place is what makes the three screens read as
 * one product: identical width, identical glass treatment, identical
 * entrance moment — only the header (icon/title/subtitle) and the form
 * content change per page.
 *
 * Heading font: this uses "Space Grotesk" for titles, with a system-sans
 * fallback so nothing breaks if it isn't loaded. For the real headline
 * weight, add this once to your index.html <head>:
 *   <link rel="preconnect" href="https://fonts.googleapis.com">
 *   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
 */
export default function AuthLayout({ icon: Icon, title, subtitle, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
      {/* Ambient glow field — three soft light sources instead of the usual two,
          offset asymmetrically so it doesn't read as a centered template. */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-[26rem] h-[26rem] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-1/4 w-[22rem] h-[22rem] bg-violet-600/10 rounded-full blur-3xl" />

      {/* Single orchestrated entrance: fade + rise + settle. One moment, not
          a fade-in per element — everything inside arrives together. */}
      <div
        className={`w-full max-w-lg relative z-10 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
          mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.97]'
        }`}
      >
        {/* Gradient-border wrapper: a 1px conic gradient ring is what separates
            "glass card with a border color" from a genuinely premium glass edge. */}
        <div className="rounded-[28px] p-px bg-gradient-to-br from-white/25 via-white/[0.06] to-white/20 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]">
          <div className="bg-slate-950/60 backdrop-blur-2xl rounded-[27px] px-8 py-9 sm:px-10 sm:py-10">
            {(Icon || title) && (
              <div className="text-center mb-8">
                {Icon && (
                  <div className="mx-auto mb-5 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-violet-500/20 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-300" strokeWidth={2} />
                  </div>
                )}
                {title && (
                  <h2
                    className="text-[1.75rem] leading-tight font-semibold text-white tracking-tight mb-2"
                    style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{subtitle}</p>
                )}
              </div>
            )}

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
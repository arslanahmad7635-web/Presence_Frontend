import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ScanFace, ArrowUpRight, LogIn, LayoutDashboard } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useAuth } from '../auth/AuthProvider';

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, loading: authChecking } = useAuth();
  const authenticated = Boolean(user);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    const onResize = () => window.innerWidth >= 768 && setIsOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 font-['Poppins',sans-serif]">
      <nav
        aria-label="Main Navigation"
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 ${
          scrolled || isOpen
            ? 'border-cyan-500/20 bg-[#050A12]/85 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl'
            : 'border-white/10 bg-white/[0.02] backdrop-blur-md'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.span
          aria-hidden
          style={{ scaleX }}
          className="absolute -bottom-px left-4 right-4 h-[2px] origin-left rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        />

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3" aria-label="Presence Home">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 p-0.5 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#050A12]">
              <ScanFace size={18} className="text-cyan-400 transition-colors group-hover:text-cyan-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
              Presence<span className="text-cyan-400">.</span>
            </span>
            <span className="text-[8px] font-semibold tracking-widest text-cyan-400/80 uppercase -mt-1">
              AI Vision System
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 backdrop-blur-md md:flex">
          {LINKS.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Auth Action Button */}
        <div className="hidden items-center gap-2 md:flex">
          {authChecking ? (
            <div className="h-9 w-28 animate-pulse rounded-xl bg-white/10" aria-hidden />
          ) : authenticated ? (
            <Link
              to="/dashboard"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              <LayoutDashboard size={14} />
              <span>Dashboard</span>
              <ArrowUpRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <LogIn size={13} className="text-cyan-400" />
                <span>Log In</span>
              </Link>
              <Link
                to="/admin"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-200 transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#060B14]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden overflow-hidden">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
              >
                {l.label}
              </Link>
            ))}
            <div className="my-1 h-px w-full bg-white/10" />
            {authenticated ? (
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 py-3 text-sm font-bold text-slate-950 shadow-lg"
              >
                <LayoutDashboard size={16} />
                Open Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 py-3 text-sm font-semibold text-cyan-300"
              >
                <LogIn size={16} />
                Log In
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
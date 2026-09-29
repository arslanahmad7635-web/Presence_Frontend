import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex items-center justify-between font-['Poppins',sans-serif] bg-transparent backdrop-blur-sm">

      {/* DIV 1: Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-1 group">
          <span className="font-bold text-2xl md:text-3xl tracking-tight text-white transition-colors group-hover:text-cyan-300">
            Chronos<span className="text-cyan-400 font-bold mx-0.5">.</span>Face
          </span>
        </Link>
      </div>

      {/* DIV 2: Navigation Links */}
      <div className="hidden md:flex items-center gap-9 text-base lg:text-lg font-semibold text-white">
        <Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
        <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link>
        <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
      </div>

      {/* DIV 3: Action Buttons */}
      <div className="hidden md:flex items-center gap-4 text-base font-semibold">
        <Link to="/login" className="text-white hover:text-cyan-300 px-4 py-2 transition-colors">
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a1628]/90 backdrop-blur-md border-b border-slate-800 p-6 flex flex-col gap-5 md:hidden shadow-2xl text-lg font-semibold">
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition-colors">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition-colors">Contact Us</Link>
          <Link to="/privacy" onClick={() => setIsOpen(false)} className="text-white hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <hr className="border-slate-800 my-1" />
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-white text-center py-2.5 hover:text-cyan-300 transition-colors">Login</Link>
        </div>
      )}

    </nav>
  );
}
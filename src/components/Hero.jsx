import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScanFace, ArrowRight } from 'lucide-react';
import FaceRecognitionImage from '../assets/face.jpeg';

const GridDistortion = lazy(() => import('./GridDistortion'));

export default function Hero() {
  const [showDistortion, setShowDistortion] = useState(false);

  useEffect(() => {
    const show = () => setShowDistortion(true);
    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(show, { timeout: 1500 })
      : window.setTimeout(show, 1000);

    return () => {
      if (window.cancelIdleCallback && typeof idleId === 'number') {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden bg-slate-950">
      
      {/* 1. Background Grid Distortion Effect (Interactive Canvas spanning full screen) */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
        {showDistortion ? (
          <Suspense fallback={
            <img
              src={FaceRecognitionImage}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          }>
            <GridDistortion
              imageSrc={FaceRecognitionImage}
              grid={8}
              mouse={0.1}
              strength={0.15}
              relaxation={0.9}
              className="w-full h-full object-cover"
            />
          </Suspense>
        ) : (
          <img
            src={FaceRecognitionImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* 2. Dark Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 z-10 pointer-events-none" />

      {/* 3. Foreground Container (pointer-events-none so background shows through and is hoverable) */}
      <div className="max-w-7xl mx-auto w-full relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pointer-events-none">

        {/* LEFT: Text & Action Buttons */}
        <div className="flex flex-col items-start text-left pointer-events-none">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-md">
            <ScanFace size={16} />
            AI-Powered Attendance
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Smart Vision
            <span className="block text-cyan-400">Attendance System</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
            Mark attendance in seconds with facial recognition. No cards, no fingerprints — just walk in, get recognized, and you're done. Built for schools, offices, and institutions that value speed and accuracy.
          </p>

          {/* Buttons require pointer-events-auto so they remain clickable */}
          <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-cyan-400 shadow-lg shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-all"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-slate-600 bg-slate-900/40 backdrop-blur-md text-white font-semibold hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Small stats row */}
          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold text-white">99.8%</div>
              <div className="text-slate-400 mt-1">Recognition Accuracy</div>
            </div>
            <div className="w-px bg-slate-700/80 hidden sm:block" />
            <div>
              <div className="text-2xl font-bold text-white">&lt; 1s</div>
              <div className="text-slate-400 mt-1">Mark Time</div>
            </div>
            <div className="w-px bg-slate-700/80 hidden sm:block" />
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-slate-400 mt-1">Always On</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Optional Picture Card Box (pointer-events-auto so the card area is preserved) */}
        <div className="relative w-full pointer-events-auto hidden lg:block">
          <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-3xl" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-cyan-500/10 bg-slate-900/60 backdrop-blur-sm">
            <img
              src={FaceRecognitionImage}
              alt="Smart vision attendance system scanning faces"
              className="w-full h-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
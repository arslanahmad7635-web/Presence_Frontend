import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, ArrowLeft, KeyRound } from 'lucide-react';
import AuthLayout from './AuthLayoutPage';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to Django backend
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <AuthLayout
      icon={isSubmitted ? CheckCircle2 : KeyRound}
      title={isSubmitted ? 'Check your inbox' : 'Reset your password'}
      subtitle={
        isSubmitted
          ? undefined
          : "Enter your institutional email and we'll send a secure recovery link."
      }
    >
      {!isSubmitted ? (
        <>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Institutional email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4.5 w-4.5 text-slate-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
                  placeholder="you@institution.edu"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 hover:brightness-110 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(56,189,248,0.5)] disabled:opacity-70"
            >
              {loading ? 'Sending…' : 'Send recovery instructions'}
              {!loading && <ArrowRight className="w-4.5 h-4.5" />}
            </button>
          </form>

          <div className="mt-8 text-center">
            <a
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </a>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            A reset link has been sent to
            <br />
            <span className="text-cyan-400 font-medium">{email}</span>
          </p>
          <a
            href="/login"
            className="inline-flex items-center justify-center w-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300"
          >
            Return to login
          </a>
        </div>
      )}
    </AuthLayout>
  );
}
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ScanFace } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayoutPage';
import api from '../services/axios';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    try {
      const response = await api.post(`/authentication/user_login`, data);
      console.log("Login successful:", response.data);

      localStorage.setItem('is_restricted', response.data['is_restricted_account']);

      if (response.data['is_restricted_account']) {
        localStorage.setItem('user_email', response.data['email']);
        navigate("/user-otp-verify");
      } else {
        localStorage.setItem('store_date', response.data['store_date']);
        localStorage.setItem('store_time', response.data['store_time']);
        navigate("/dashboard");
      }
      setLoading(false);
    } catch (err) {
      console.error("Login failed:", err.response ? err.response.data : err.message);
      setLoginError(err.response?.data?.error || "Invalid credentials. Please try again.");

      setTimeout(() => {
        setLoginError("");
      }, 2500);

      setLoading(false);
    }
  }

  const handleGoogleLogin = () => {
    // Add Google OAuth logic here
    console.log("Initiating Google Login...");
  };

  return (
    <AuthLayout
      icon={ScanFace}
      title="Welcome Back"
      subtitle="Sign in to reach your institutional portal or camera console."
    >
      {error && (
        <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs text-center font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Institutional Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Mail size={16} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 transition-all duration-300"
              placeholder="you@institution.edu"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Password
            </label>
            <a href="/forgetpassword" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
              Forgot?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Lock size={16} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
              className="block w-full pl-10 pr-10 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 transition-all duration-300"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 hover:scale-[1.02] text-slate-950 font-extrabold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-[0_0_22px_rgba(34,211,238,0.35)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {loading ? (
            <span className="animate-pulse">Authenticating...</span>
          ) : (
            <>
              <span>Authenticate Session</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="mt-6 mb-4 flex items-center justify-center">
        <div className="flex-grow border-t border-white/10"></div>
        <span className="px-3 text-xs text-slate-500 font-mono bg-transparent backdrop-blur-sm rounded-full">OR</span>
        <div className="flex-grow border-t border-white/10"></div>
      </div>

      {/* Google Sign In Button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 mb-6"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-sm">Sign in with Google</span>
      </button>

      <div className="pt-6 border-t border-white/10 text-center">
        <p className="text-xs text-slate-400">
          Don't have an institutional profile?{' '}
          <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
            Register here
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
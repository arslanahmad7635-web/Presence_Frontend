import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayoutPage';
import api from '../services/axios';

export default function SignupPage() {
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const register_err_msg = localStorage.getItem('registration_error_message');

  function handle_register_error(msg) {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg('');
    }, 3500);
  }

  useEffect(() => {
    if (register_err_msg) {
      handle_register_error(register_err_msg);
      localStorage.removeItem("registration_error_message");
    }
  }, [register_err_msg]);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    try {
      const response = await api.post(`/authentication/user_registration`, data);
      console.log(response.data);

      localStorage.setItem("verification_token", response.data['verification_token']);
      localStorage.setItem("pending_email", data.email);

      navigate("/user-otp-verify");
      setLoading(false);
    } catch (err) {
      console.error("Registration failed:", err.response ? err.response.data : err.message);
      handle_register_error(err.response?.data?.error || "Registration failed. Check inputs.");
      setLoading(false);
    }
  }

  const handleGoogleSignup = () => {
    // Add Google OAuth logic here
    console.log("Initiating Google Signup...");
  };

  return (
    <AuthLayout
      icon={UserPlus}
      title="Create Account"
      subtitle="Register your profile into the Presence AI biometric portal."
    >
      {errorMsg && (
        <div className="mb-4 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs text-center font-medium">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <User size={16} />
            </div>
            <input
              type="text"
              name="username"
              required
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 transition-all duration-300"
              placeholder="Aisha Khan"
            />
          </div>
        </div>

        {/* Email */}
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
              name="email"
              required
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 transition-all duration-300"
              placeholder="aisha@institution.edu"
            />
          </div>
        </div>

        {/* Password Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Lock size={15} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                className="block w-full pl-9 pr-8 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 transition-all"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Confirm
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Lock size={15} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password2"
                required
                className="block w-full pl-9 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/50 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 hover:scale-[1.02] text-slate-950 font-extrabold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-[0_0_22px_rgba(34,211,238,0.35)] mt-4 disabled:opacity-70"
        >
          {loading ? (
            <span className="animate-pulse">Generating Registration Token...</span>
          ) : (
            <>
              <span>Create Account</span>
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

      {/* Google Sign Up Button */}
      <Link to={`${import.meta.env.VITE_API_URL}/authentication/login/google/`} className="w-full flex items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 mb-6">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="text-sm">Continue with Google</span>
      </Link>


      <div className="pt-6 border-t border-white/10 text-center">
        <p className="text-xs text-slate-400">
          Already registered?{' '}
          <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
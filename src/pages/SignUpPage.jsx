import React, { useState, useEffect } from 'react';
import { User, Mail, Hash, Lock, Eye, EyeOff, ChevronDown, ArrowRight, UserPlus } from 'lucide-react';
import AuthLayout from './AuthLayoutPage';
import api from '../services/axios';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {

  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const register_err_msg = localStorage.getItem('registration_error_message');

  function handle_register_error(msg){

    const register_err_element = document.getElementById('register_err');
  
      register_err_element.textContent = msg;

      register_err_element.style.opacity = "1";

      setTimeout(() => {

        register_err_element.style.opacity = "0";
    
      }, 3000);

  }

  useEffect(() => {

    if (register_err_msg){

      handle_register_error(`${register_err_msg}`);
  
    }

  });

  
  localStorage.removeItem("registration_error_message");


  async function handleRegister(e) {
    e.preventDefault();

    setLoading(true);
  
    // Transform form data into an object
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    try {
      // Make the login request
      const response = await api.post(`/authentication/user_registration`, data);
  
      // Handle the response
      console.log(response.data);

      localStorage.setItem("verification_token",response.data['verification_token']);

      navigate("/user-otp-verify");

      setLoading(false);


    } catch (error) {
      // Handle errors
      console.error("Registration failed:", error.response ? error.response.data : error.message);

      handle_register_error(error.response ? error.response.data.error : "");

      setLoading(false);
      // Show an error message to the user if needed
    }
  }

  return (
    <AuthLayout
      icon={UserPlus}
      title="Create your account"
      subtitle="Enroll into the Chronos Face system."
    >
      <form onSubmit={handleRegister} className="space-y-4">
        <div id='register_err'>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium text-slate-300">Full name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <User className="h-4.5 w-4.5 text-slate-500" />
              </div>
              <input
                type="text"
                name="username"
                required
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
          </div>


          {/* Email */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-medium text-slate-300">Institutional email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-4.5 w-4.5 text-slate-500" />
              </div>
              <input
                type="email"
                name="email"
                required
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
                placeholder="you@institution.edu"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-4.5 w-4.5 text-slate-500" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                className="block w-full pl-10 pr-10 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300"
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Confirm password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-4.5 w-4.5 text-slate-500" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password2"
                required
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 hover:brightness-110 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(56,189,248,0.5)] mt-6 disabled:opacity-70"
        >
          {loading ? 'Initializing…' : 'Create account'}
          {!loading && <ArrowRight className="w-4.5 h-4.5" />}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-400">
        Already have an account?{' '}
        <a href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
          Log in
        </a>
      </p>
    </AuthLayout>
  );
}
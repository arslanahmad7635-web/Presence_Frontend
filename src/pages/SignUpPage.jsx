import React, { useState } from 'react';
import { User, Mail, Hash, Lock, Eye, EyeOff, ChevronDown, ArrowRight, UserPlus } from 'lucide-react';
import AuthLayout from './AuthLayoutPage';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    rollNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student', // default role
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Add your Django signup API call here
    setTimeout(() => {
      setLoading(false);
      alert('Account created & face profile initialized!');
    }, 1500);
  };

  return (
    <AuthLayout
      icon={UserPlus}
      title="Create your account"
      subtitle="Enroll into the Chronos Face system."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
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
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Roll Number / Employee ID */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Roll no / employee ID</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Hash className="h-4.5 w-4.5 text-slate-500" />
              </div>
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                required
                // Monospace here is deliberate, not decorative: it's an ID
                // string the user will visually match against a card/roster.
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 font-mono text-[0.95em] tracking-tight focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
                placeholder="CS-2024-001"
              />
            </div>
          </div>

          {/* Role Selector */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-300">Role</label>
            <div className="relative">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="block w-full pl-3.5 pr-10 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
              >
                <option value="student" className="bg-slate-900">Student</option>
                <option value="admin" className="bg-slate-900">System administrator</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                <ChevronDown className="h-4.5 w-4.5 text-slate-500" />
              </div>
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
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
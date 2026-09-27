import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ScanFace } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayoutPage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Invalid username or password.');
      }

      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      if (rememberMe) {
        localStorage.setItem('remember_me', 'true');
      }

      alert('Login successful!');
      // window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      icon={ScanFace}
      title="Welcome back"
      subtitle="Sign in to reach your student or instructor dashboard."
    >
      {error && (
        <div className="mb-6 p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300">Email / Username</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Mail className="h-4.5 w-4.5 text-slate-500" />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
              placeholder="Enter your email or username"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-300">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Lock className="h-4.5 w-4.5 text-slate-500" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full pl-10 pr-10 py-3 border border-white/10 rounded-xl bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-white/20 transition-all duration-300"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-white/20 bg-white/[0.03] text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-950"
            />
            <span className="text-sm text-slate-400">Remember me</span>
          </label>
          <a href="/forgetpassword" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 hover:brightness-110 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(56,189,248,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="animate-pulse">Authenticating…</span>
          ) : (
            <>
              Sign in
              <ArrowRight className="w-4.5 h-4.5" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-slate-950/60 text-slate-500">or continue with</span>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300"
          >
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-400">
        Don't have an account?{' '}
        <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
          Register here
        </Link>
      </p>
    </AuthLayout>
  );
}
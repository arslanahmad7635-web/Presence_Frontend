import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignUpPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';

  function App() {
    return (
    <BrowserRouter>
      <div className="min-h-screen text-slate-100 selection:text-white">

        <div className="fixed inset-0 -z-20 w-full h-full">
          <img
            src="https://unsplash.com/photos/blue-and-white-light-illustration-knTKij60p3g/download?force=true&w=1920"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/60" />

        <Navbar />

        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
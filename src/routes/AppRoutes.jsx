import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const SignupPage = lazy(() => import('../pages/SignUpPage'));
const ForgetPasswordPage = lazy(() => import('../pages/ForgetPasswordPage'));
const UserOtpVerify = lazy(() => import('../pages/UserOtpVerify'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-[50vh]">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/user-otp-verify" element={<UserOtpVerify />} />
      </Routes>
    </Suspense>
  );
}

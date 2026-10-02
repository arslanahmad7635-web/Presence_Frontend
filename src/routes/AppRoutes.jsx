import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {PuffLoader} from 'react-spinners';
import { motion } from 'framer-motion';

const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DashboardPage = lazy(() => import('../pages/Dashboard/DashboardPage'));
const SignupPage = lazy(() => import('../pages/SignUpPage'));
const ForgetPasswordPage = lazy(() => import('../pages/ForgetPasswordPage'));
const UserOtpVerify = lazy(() => import('../pages/UserOtpVerify'));
const GoogleRegistrationRedirect = lazy(() => import('../pages/GoogleRegistrationRedirect'));


export default function AppRoutes() {
  return (
    <Suspense fallback={
    <motion.div className="flex flex-col justify-center items-center h-screen w-full bg-[#050A12]">

      <PuffLoader color='white' size={80} />
      <h2 className='text-xl font-semibold mt-6' style={{'fontFamily' : "Poppins"}}>Patience Is Appreciated</h2>

    </motion.div>
  }>
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
        <Route path='/auth/google-registration-callback' element={<GoogleRegistrationRedirect />}/>
      </Routes>
    </Suspense>
  );
}

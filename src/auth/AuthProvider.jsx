import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axios';

const AuthContext = createContext(null);
let authInitializationPromise = null;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const mountedRef = useRef(true);

  const handleLogoutLocally = useCallback(() => {
    localStorage.removeItem('store_time');
    setUser(null);
    navigate('/login');
  }, [navigate]);

  // Manual or forced refresh trigger
  const refreshToken = useCallback(async () => {
    try {
      await axiosInstance.get('/authentication/refresh_user_tokens');
      localStorage.setItem('store_time', Date.now().toString());
    } catch (error) {
      console.error('Proactive token refresh failed:', error);
      handleLogoutLocally();
    }
  }, [handleLogoutLocally]);

  const logout = async () => {
    try {
      await axiosInstance.post('/authentication/user_logout');
    } finally {
      handleLogoutLocally();
    }
  };

  // Proactive Refresh Timer & Initial Session Check
  useEffect(() => {
    let timer;
    mountedRef.current = true;

    // Check who is logged in when the app first loads
    const initializeAuth = async () => {
      if (!authInitializationPromise) {
        authInitializationPromise = axiosInstance
          .get('/authentication/get_user_details')
          .then((response) => response.data)
          .catch(() => null);
      }

      const authenticatedUser = await authInitializationPromise;
      if (!mountedRef.current) return;
      setUser(authenticatedUser);
      setLoading(false);
    };

    initializeAuth();

    // PROACTIVE TIME LOGIC: 
    // Access tokens last ~15 mins. We proactively refresh every 9 minutes (540,000 ms).
    const REFRESH_INTERVAL = 9 * 60 * 1000; 

    const checkAndRefresh = () => {
      const storeTime = localStorage.getItem('store_time');
      if (storeTime) {
        const elapsed = Date.now() - parseInt(storeTime, 10);
        if (elapsed >= REFRESH_INTERVAL) {
          console.log('Proactive timer triggered: Refreshing access token before expiration...');
          refreshToken();
        }
      }
    };

    // Run the check every 60 seconds (1 minute)
    timer = setInterval(checkAndRefresh, 60 * 1000);

    return () => {
      mountedRef.current = false;
      clearInterval(timer);
    };
  }, [refreshToken]);

  return (
    <AuthContext.Provider value={{ user, setUser, logout, refreshToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
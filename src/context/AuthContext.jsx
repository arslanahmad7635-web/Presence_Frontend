import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if session already exists when app loads
  useEffect(() => {
    const cachedUser = sessionStorage.getItem('django_user');
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
    }
    setLoading(false);
  }, []);

  // Handle Django POST login request
  const login = async (credentials) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', { // Replace with your Django API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Save to sessionStorage so it persists through the session without reloading
        sessionStorage.setItem('django_user', JSON.stringify(data));
        setUser(data);
        return { success: true };
      } else {
        return { success: false, error: data };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const logout = () => {
    sessionStorage.removeItem('django_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
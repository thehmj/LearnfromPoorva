"use client";
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('auth') : null;
    if (saved) {
      const parsed = JSON.parse(saved);
      setToken(parsed.token);
      setUser(parsed.user);
    }
    setLoading(false);
  }, []);

  const login = (data) => {
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('auth');
  };

  const value = useMemo(() => ({ token, user, login, logout, loading }), [token, user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}


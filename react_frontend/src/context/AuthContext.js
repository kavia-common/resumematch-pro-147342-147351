import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export const AuthProvider = ({ children }) => {
  /**
   * Provides authentication state and actions across the app.
   * Stores JWT token in localStorage under 'rm_token'.
   */
  const [token, setToken] = useState(() => localStorage.getItem('rm_token') || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) localStorage.setItem('rm_token', token);
    else localStorage.removeItem('rm_token');
  }, [token]);

  // PUBLIC_INTERFACE
  const login = async (email, password) => {
    setLoading(true);
    try {
      // Placeholder: integrate with backend /auth/login later
      await new Promise((r) => setTimeout(r, 400));
      const fakeToken = 'demo.jwt.token';
      setToken(fakeToken);
      return { success: true, token: fakeToken };
    } catch (e) {
      return { success: false, message: 'Login failed' };
    } finally {
      setLoading(false);
    }
  };

  // PUBLIC_INTERFACE
  const register = async (email, password) => {
    setLoading(true);
    try {
      // Placeholder: integrate with backend /auth/register later
      await new Promise((r) => setTimeout(r, 600));
      const fakeToken = 'demo.jwt.token';
      setToken(fakeToken);
      return { success: true, token: fakeToken };
    } catch (e) {
      return { success: false, message: 'Registration failed' };
    } finally {
      setLoading(false);
    }
  };

  // PUBLIC_INTERFACE
  const logout = () => {
    setToken(null);
  };

  const value = useMemo(
    () => ({
      token,
      isAuthenticated: Boolean(token),
      loading,
      login,
      register,
      logout,
    }),
    [token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// PUBLIC_INTERFACE
export const useAuth = () => {
  /** Hook to access authentication state and actions. */
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

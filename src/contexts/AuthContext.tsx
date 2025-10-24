'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const checkAuthStatus = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (e) {
          console.error('Error parsing user data:', e);
          localStorage.removeItem('user');
        }
      }
      setLoading(false);
    };

    // Use requestAnimationFrame to avoid setState during render
    const frame = requestAnimationFrame(checkAuthStatus);
    return () => cancelAnimationFrame(frame);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Demo credentials
    const demoCredentials = [
      { email: 'farmer@krishishield.com', password: 'farmer123', name: 'Rajesh Kumar' },
      { email: 'admin@krishishield.com', password: 'admin123', name: 'Admin User' }
    ];

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const credentials = demoCredentials.find(
      cred => cred.email === email && cred.password === password
    );

    if (credentials) {
      const userInfo = {
        name: credentials.name,
        email: credentials.email,
        role: credentials.email === 'admin@krishishield.com' ? 'admin' : 'farmer'
      };

      try {
        localStorage.setItem('user', JSON.stringify(userInfo));
        // Also set a cookie for middleware authentication
        document.cookie = `authToken=${btoa(JSON.stringify(userInfo))}; path=/; max-age=86400`;
        setUser(userInfo);
        return true;
      } catch (e) {
        console.error('Error saving user data:', e);
        return false;
      }
    }

    setLoading(false);
    return false;
  };

  const logout = () => {
    try {
      localStorage.removeItem('user');
      document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      setUser(null);
      router.push('/login');
    } catch (e) {
      console.error('Error during logout:', e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
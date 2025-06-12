'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type UserRole = 'patient' | 'doctor';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  specialization?: string; // For doctors
  experience?: number; // For doctors
  location?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  signup: (userData: Partial<User> & { email: string; password: string; name: string; role: UserRole }) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Mock users for demo purposes
  const mockUsers = [
    {
      id: '1',
      email: 'patient@demo.com',
      password: 'demo123',
      name: 'John Doe',
      role: 'patient' as UserRole,
      phone: '+1 (555) 123-4567',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      email: 'doctor@demo.com',
      password: 'demo123',
      name: 'Dr. Sarah Wilson',
      role: 'doctor' as UserRole,
      phone: '+1 (555) 987-6543',
      specialization: 'Cardiology',
      experience: 12,
      location: 'New York, NY',
      avatar: 'https://images.pexels.com/photos/559829/pexels-photo-559829.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  useEffect(() => {
    // Check for stored auth data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setLoading(true);
    
    // Mock authentication
    const foundUser = mockUsers.find(u => u.email === email && u.password === password && u.role === role);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      // Redirect based on role
      if (role === 'patient') {
        router.push('/dashboard/patient');
      } else {
        router.push('/dashboard/doctor');
      }
      
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const signup = async (userData: Partial<User> & { email: string; password: string; name: string; role: UserRole }): Promise<boolean> => {
    setLoading(true);
    
    // Mock signup - in real app, this would call an API
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: userData.email,
      name: userData.name,
      role: userData.role,
      phone: userData.phone,
      specialization: userData.specialization,
      experience: userData.experience,
      location: userData.location,
      avatar: userData.role === 'doctor' ? 
        'https://images.pexels.com/photos/559829/pexels-photo-559829.jpeg?auto=compress&cs=tinysrgb&w=400' :
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    // Redirect based on role
    if (userData.role === 'patient') {
      router.push('/dashboard/patient');
    } else {
      router.push('/dashboard/doctor');
    }
    
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
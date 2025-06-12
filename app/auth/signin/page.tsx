'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth, UserRole } from '@/lib/auth-context';
import { toast } from 'sonner';
import { Stethoscope, User, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, role: UserRole) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const success = await login(email, password, role);
      if (!success) {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="p-2 bg-primary rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">MediBook</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Choose your account type and enter your credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="patient" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="patient" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>Patient</span>
                  </TabsTrigger>
                  <TabsTrigger value="doctor" className="flex items-center space-x-2">
                    <UserCheck className="h-4 w-4" />
                    <span>Doctor</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="patient">
                  <form onSubmit={(e) => handleSubmit(e, 'patient')} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="patient-email">Email</Label>
                      <Input
                        id="patient-email"
                        name="email"
                        type="email"
                        placeholder="patient@demo.com"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-password">Password</Label>
                      <Input
                        id="patient-password"
                        name="password"
                        type="password"
                        placeholder="demo123"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Signing in...' : 'Sign in as Patient'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="doctor">
                  <form onSubmit={(e) => handleSubmit(e, 'doctor')} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="doctor-email">Email</Label>
                      <Input
                        id="doctor-email"
                        name="email"
                        type="email"
                        placeholder="doctor@demo.com"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-password">Password</Label>
                      <Input
                        id="doctor-password"
                        name="password"
                        type="password"
                        placeholder="demo123"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Signing in...' : 'Sign in as Doctor'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 text-center text-sm text-gray-600">
                <div className="mb-3">
                  <strong>Demo Credentials:</strong>
                </div>
                <div className="space-y-1">
                  <div>Patient: patient@demo.com / demo123</div>
                  <div>Doctor: doctor@demo.com / demo123</div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/auth/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
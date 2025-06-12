'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth, UserRole } from '@/lib/auth-context';
import { toast } from 'sonner';
import { Stethoscope, User, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, role: UserRole) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      role,
      ...(role === 'doctor' && {
        specialization: formData.get('specialization') as string,
        experience: parseInt(formData.get('experience') as string),
        location: formData.get('location') as string,
      }),
    };

    try {
      const success = await signup(userData);
      if (success) {
        toast.success('Account created successfully!');
      } else {
        toast.error('Failed to create account. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const specializations = [
    'Cardiology',
    'Dermatology',
    'Endocrinology',
    'Gastroenterology',
    'Neurology',
    'Oncology',
    'Orthopedics',
    'Pediatrics',
    'Psychiatry',
    'Radiology'
  ];

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
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-600 mt-2">Join our healthcare community</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create your account to get started
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
                      <Label htmlFor="patient-name">Full Name</Label>
                      <Input
                        id="patient-name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-email">Email</Label>
                      <Input
                        id="patient-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-phone">Phone Number</Label>
                      <Input
                        id="patient-phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
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
                        placeholder="Create a password"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Creating Account...' : 'Create Patient Account'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="doctor">
                  <form onSubmit={(e) => handleSubmit(e, 'doctor')} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="doctor-name">Full Name</Label>
                      <Input
                        id="doctor-name"
                        name="name"
                        type="text"
                        placeholder="Dr. Your Name"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-email">Email</Label>
                      <Input
                        id="doctor-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-phone">Phone Number</Label>
                      <Input
                        id="doctor-phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-specialization">Specialization</Label>
                      <Select name="specialization" required disabled={isLoading}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          {specializations.map((spec) => (
                            <SelectItem key={spec} value={spec}>
                              {spec}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-experience">Years of Experience</Label>
                      <Input
                        id="doctor-experience"
                        name="experience"
                        type="number"
                        placeholder="Enter years of experience"
                        min="1"
                        max="50"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-location">Location</Label>
                      <Input
                        id="doctor-location"
                        name="location"
                        type="text"
                        placeholder="City, State"
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
                        placeholder="Create a password"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Creating Account...' : 'Create Doctor Account'}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/signin" className="text-primary hover:underline">
                    Sign in
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
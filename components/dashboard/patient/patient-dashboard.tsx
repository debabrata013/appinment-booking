'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/lib/auth-context';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Star, 
  MapPin, 
  Phone,
  Mail,
  Bell,
  Settings,
  LogOut,
  Heart,
  Activity,
  Stethoscope
} from 'lucide-react';

export function PatientDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  // Mock data
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialization: 'Cardiology',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'Follow-up',
      avatar: 'https://images.pexels.com/photos/559829/pexels-photo-559829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialization: 'Dermatology',
      date: '2024-01-18',
      time: '2:30 PM',
      type: 'Consultation',
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const featuredDoctors = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      specialization: 'Cardiology',
      rating: 4.9,
      reviews: 127,
      location: 'New York, NY',
      fee: 150,
      avatar: 'https://images.pexels.com/photos/559829/pexels-photo-559829.jpeg?auto=compress&cs=tinysrgb&w=150',
      available: true
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Dermatology',
      rating: 4.8,
      reviews: 89,
      location: 'Los Angeles, CA',
      fee: 120,
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150',
      available: true
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialization: 'Pediatrics',
      rating: 4.9,
      reviews: 156,
      location: 'Chicago, IL',
      fee: 100,
      avatar: 'https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=150',
      available: false
    },
    {
      id: 4,
      name: 'Dr. James Thompson',
      specialization: 'Orthopedics',
      rating: 4.7,
      reviews: 203,
      location: 'Houston, TX',
      fee: 180,
      avatar: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150',
      available: true
    }
  ];

  const pastAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialization: 'Cardiology',
      date: '2024-01-10',
      time: '10:00 AM',
      status: 'Completed',
      notes: 'Regular checkup - Everything looks good'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialization: 'Dermatology',
      date: '2024-01-05',
      time: '3:00 PM',
      status: 'Completed',
      notes: 'Skin consultation - Prescribed treatment'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MediBook</h1>
                <p className="text-sm text-gray-600">Patient Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="font-medium text-gray-900">{user?.name}</p>
                  <p className="text-sm text-gray-600">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
                <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h2>
                <p className="text-blue-100 mb-6">
                  Ready to take care of your health today? Let's get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                    <Activity className="mr-2 h-4 w-4" />
                    Health Records
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                    <p className="text-gray-600">Upcoming Appointments</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-gray-600">Total Appointments</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.8</p>
                    <p className="text-gray-600">Average Rating Given</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
                <CardDescription>Your next scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={appointment.avatar} />
                          <AvatarFallback>{appointment.doctor.charAt(3)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">{appointment.doctor}</p>
                          <p className="text-sm text-gray-600">{appointment.specialization}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{appointment.date}</span>
                            <Clock className="h-4 w-4" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{appointment.type}</Badge>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Doctors Tab */}
          <TabsContent value="doctors" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search doctors by name or specialization..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDoctors.map((doctor) => (
                <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={doctor.avatar} />
                        <AvatarFallback>{doctor.name.charAt(3)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                        <p className="text-sm text-gray-600">{doctor.specialization}</p>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="text-gray-500">({doctor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {doctor.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Consultation Fee</span>
                        <span className="font-semibold text-gray-900">${doctor.fee}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant={doctor.available ? "default" : "secondary"}>
                        {doctor.available ? "Available" : "Busy"}
                      </Badge>
                      <Button size="sm" disabled={!doctor.available}>
                        Book Appointment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Your scheduled appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{appointment.doctor}</p>
                            <p className="text-sm text-gray-600">{appointment.specialization}</p>
                          </div>
                          <Badge>{appointment.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {appointment.time}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm" variant="destructive">Cancel</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Past Appointments */}
              <Card>
                <CardHeader>
                  <CardTitle>Past Appointments</CardTitle>
                  <CardDescription>Your appointment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastAppointments.map((appointment) => (
                      <div key={appointment.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{appointment.doctor}</p>
                            <p className="text-sm text-gray-600">{appointment.specialization}</p>
                          </div>
                          <Badge variant="secondary">{appointment.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {appointment.time}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{appointment.notes}</p>
                        <Button size="sm" variant="outline">Leave Review</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Leave Feedback</CardTitle>
                <CardDescription>Share your experience with our healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Doctor
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg">
                      <option>Select a doctor...</option>
                      <option>Dr. Sarah Wilson</option>
                      <option>Dr. Michael Chen</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-6 w-6 text-yellow-400 cursor-pointer hover:fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Share your experience..."
                    />
                  </div>
                  
                  <Button>Submit Review</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user?.avatar} />
                      <AvatarFallback className="text-lg">{user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{user?.name}</h3>
                      <p className="text-gray-600">{user?.email}</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        Change Photo
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        defaultValue={user?.phone}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button>Save Changes</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
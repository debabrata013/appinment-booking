'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { useAuth } from '@/lib/auth-context';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Star, 
  MapPin, 
  Phone,
  Mail,
  Bell,
  Settings,
  LogOut,
  Activity,
  Stethoscope,
  Users,
  CheckCircle,
  XCircle,
  Plus,
  Edit
} from 'lucide-react';
import { format } from 'date-fns';

export function DoctorDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Mock data
  const todayAppointments = [
    {
      id: 1,
      patient: 'John Doe',
      time: '09:00 AM',
      type: 'Consultation',
      status: 'confirmed',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'pending',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      patient: 'Mike Wilson',
      time: '02:00 PM',
      type: 'Consultation',
      status: 'confirmed',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: 'Emily Brown',
      date: '2024-01-16',
      time: '11:00 AM',
      type: 'Consultation',
      status: 'pending',
      phone: '+1 (555) 123-4567',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      patient: 'Robert Davis',
      date: '2024-01-17',
      time: '09:30 AM',
      type: 'Follow-up',
      status: 'confirmed',
      phone: '+1 (555) 987-6543',
      avatar: 'https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const patientHistory = [
    {
      id: 1,
      patient: 'John Doe',
      lastVisit: '2024-01-10',
      condition: 'Hypertension',
      notes: 'Blood pressure stable, continue medication',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      lastVisit: '2024-01-08',
      condition: 'Diabetes Type 2',
      notes: 'Glucose levels improving, adjust diet plan',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const reviews = [
    {
      id: 1,
      patient: 'Anonymous',
      rating: 5,
      comment: 'Excellent care and very professional. Highly recommend!',
      date: '2024-01-12'
    },
    {
      id: 2,
      patient: 'Anonymous',
      rating: 4,
      comment: 'Great experience, doctor was very thorough and caring.',
      date: '2024-01-10'
    }
  ];

  const stats = {
    totalAppointments: 156,
    todayAppointments: 3,
    averageRating: 4.8,
    totalPatients: 89
  };

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
                <p className="text-sm text-gray-600">Doctor Dashboard</p>
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
                  <p className="text-sm text-gray-600">{user?.specialization}</p>
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
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
                <h2 className="text-3xl font-bold mb-2">Good morning, {user?.name}!</h2>
                <p className="text-purple-100 mb-6">
                  You have {stats.todayAppointments} appointments scheduled for today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    View Schedule
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Availability
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <CalendarIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stats.todayAppointments}</p>
                    <p className="text-gray-600">Today's Appointments</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalAppointments}</p>
                    <p className="text-gray-600">Total Appointments</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalPatients}</p>
                    <p className="text-gray-600">Total Patients</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="p-3 bg-yellow-100 rounded-full mr-4">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
                    <p className="text-gray-600">Average Rating</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>Your appointments for {format(new Date(), 'MMMM d, yyyy')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={appointment.avatar} />
                          <AvatarFallback>{appointment.patient.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900">{appointment.patient}</p>
                          <p className="text-sm text-gray-600">{appointment.type}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {appointment.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appointment Requests</CardTitle>
                <CardDescription>Manage incoming appointment requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={appointment.avatar} />
                            <AvatarFallback>{appointment.patient.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{appointment.patient}</p>
                            <p className="text-sm text-gray-600">{appointment.type}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <CalendarIcon className="h-4 w-4 mr-1" />
                                {appointment.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {appointment.time}
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-1" />
                                {appointment.phone}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                      </div>
                      
                      {appointment.status === 'pending' && (
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Accept
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4 mr-1" />
                            Decline
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Reschedule
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>Select a date to manage your availability</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Available Time Slots</CardTitle>
                  <CardDescription>
                    {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Time Slot
                    </Button>
                    
                    <div className="space-y-2">
                      {['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM'].map((time) => (
                        <div key={time} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{time}</span>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            <Button size="sm" variant="destructive">Remove</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Patient History</CardTitle>
                <CardDescription>View and manage patient records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patientHistory.map((patient) => (
                    <div key={patient.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={patient.avatar} />
                            <AvatarFallback>{patient.patient.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{patient.patient}</p>
                            <p className="text-sm text-gray-600">{patient.condition}</p>
                            <p className="text-sm text-gray-500">Last visit: {patient.lastVisit}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          View Records
                        </Button>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Notes:</strong> {patient.notes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>Update your professional details</CardDescription>
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
                        <p className="text-gray-600">{user?.specialization}</p>
                        <p className="text-sm text-gray-500">{user?.experience} years experience</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          Change Photo
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
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
                          Specialization
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.specialization}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience
                        </label>
                        <input
                          type="number"
                          defaultValue={user?.experience}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.location}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Consultation Fee
                        </label>
                        <input
                          type="number"
                          placeholder="150"
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
              
              <Card>
                <CardHeader>
                  <CardTitle>Patient Reviews</CardTitle>
                  <CardDescription>See what your patients are saying</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900">{stats.averageRating}</div>
                      <div className="flex justify-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.floor(stats.averageRating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">Based on {reviews.length} reviews</p>
                    </div>
                    
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                          <p className="text-sm text-gray-500 mt-2">- {review.patient}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
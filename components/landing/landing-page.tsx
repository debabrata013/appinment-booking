'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Heart, 
  Shield, 
  Star, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  CheckCircle,
  Stethoscope,
  Activity,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export function LandingPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Book appointments with your preferred doctors in just a few clicks'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access healthcare services anytime, anywhere with our round-the-clock platform'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your medical information is protected with enterprise-grade security'
    },
    {
      icon: Heart,
      title: 'Quality Care',
      description: 'Connect with verified healthcare professionals and specialists'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Patients' },
    { number: '1000+', label: 'Verified Doctors' },
    { number: '100+', label: 'Cities Covered' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Patient from Mumbai',
      content: 'MediBook made it so easy to find and book appointments with specialists in my city. The interface is intuitive and the doctors are excellent! I could even consult in Hindi.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Cardiologist, Delhi',
      content: 'As a healthcare provider, MediBook has streamlined my practice management across multiple clinics. The scheduling system is efficient and my patients love the convenience.',
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Anita Patel',
      role: 'Patient from Ahmedabad',
      content: 'The telemedicine feature saved me so much time and money. I could consult with a specialist in Bangalore from my home in Ahmedabad. Truly revolutionary for Indian healthcare!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 bg-primary rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">MediBook</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/auth/signin">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                #1 Healthcare Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Health,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with qualified healthcare professionals, book appointments seamlessly, 
                and manage your health journey with our comprehensive medical platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Healthcare Professional"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Appointment Confirmed</p>
                    <p className="text-sm text-gray-600">Dr. Sarah Wilson - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MediBook?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive healthcare platform designed to make medical care 
              accessible, convenient, and efficient for everyone.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                  src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Revolutionizing Healthcare Access
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                MediBook is more than just an appointment booking platform. We're building 
                a comprehensive healthcare ecosystem that connects patients with the right 
                healthcare providers at the right time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to make quality healthcare accessible to everyone by leveraging 
                technology to eliminate barriers and streamline the patient-doctor relationship.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Verified healthcare professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Secure and private consultations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join thousands of satisfied patients and healthcare providers who trust MediBook
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="mb-6 text-blue-50">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-blue-200">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team for support or inquiries.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div className="text-gray-600">
                      <div className="font-semibold">Headquarters</div>
                      <div>MediBook India Pvt. Ltd.</div>
                      <div>Brigade Road, MG Road</div>
                      <div>Bangalore, Karnataka 560001</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-gray-600">
                      <div>+91-80-4567-8900 (Support)</div>
                      <div>+91-80-4567-8999 (24/7 Emergency)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-gray-600">
                      <div>support@medibook.in</div>
                      <div>business@medibook.in</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Office Hours (IST)</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency Support Only</span>
                  </div>
                  <div className="text-sm text-primary font-medium mt-2">
                    24/7 Emergency Helpline Available
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users who have already discovered the convenience of MediBook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Sign Up as Patient
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  Join as Doctor
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">MediBook</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Making healthcare accessible and convenient for every Indian. 
                Connecting patients with verified healthcare professionals across India.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 text-primary" />
                  <div>
                    <div className="font-medium text-white">MediBook India Pvt. Ltd.</div>
                    <div>Brigade Road, MG Road</div>
                    <div>Bangalore, Karnataka 560001</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91-80-4567-8900</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@medibook.in</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-3 text-gray-400">
                <div><a href="#about" className="hover:text-white transition-colors hover:text-primary">About Us</a></div>
                <div><a href="#features" className="hover:text-white transition-colors hover:text-primary">Features</a></div>
                <div><a href="#contact" className="hover:text-white transition-colors hover:text-primary">Contact</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Careers</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Blog</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Privacy Policy</a></div>
              </div>
            </div>
            
            {/* For Patients */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">For Patients</h4>
              <div className="space-y-3 text-gray-400">
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Find Doctors</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Book Appointment</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Health Records</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Telemedicine</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Health Insurance</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Patient Support</a></div>
              </div>
            </div>
            
            {/* For Doctors */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">For Doctors</h4>
              <div className="space-y-3 text-gray-400">
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Join Network</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Manage Schedule</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Practice Management</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Resources</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Doctor Support</a></div>
                <div><a href="#" className="hover:text-white transition-colors hover:text-primary">Medical Guidelines</a></div>
              </div>
            </div>
          </div>
          
          {/* Regional Offices */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <h4 className="font-semibold mb-4 text-lg">Our Presence Across India</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-400 text-sm">
              <div>
                <div className="font-medium text-white mb-1">South India</div>
                <div>Bangalore • Chennai • Hyderabad • Kochi</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">North India</div>
                <div>Delhi • Gurgaon • Noida • Chandigarh</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">West India</div>
                <div>Mumbai • Pune • Ahmedabad • Surat</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">East India</div>
                <div>Kolkata • Bhubaneswar • Guwahati</div>
              </div>
            </div>
          </div>
          
          {/* Language Support */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <h4 className="font-semibold mb-4 text-lg">Available in Multiple Languages</h4>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
              <span className="bg-gray-800 px-3 py-1 rounded-full">English</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">हिंदी</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">বাংলা</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">தமிழ்</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">తెలుగు</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">मराठी</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">ગુજરાતી</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full">ಕನ್ನಡ</span>
            </div>
          </div>
          
          {/* Certifications & Awards */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-lg">Certifications & Compliance</h4>
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                  <span className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>ISO 27001 Certified</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>HIPAA Compliant</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span>Digital India Initiative</span>
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lg">Recognition</h4>
                <div className="text-gray-400 text-sm space-y-1">
                  <div>🏆 Best Healthcare Startup 2024 - TechCrunch India</div>
                  <div>🏆 Digital India Innovation Award - Govt. of India</div>
                  <div>🏆 Top 10 HealthTech - YourStory</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency & Support */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="font-semibold text-red-400">24/7 Emergency Helpline</span>
              </div>
              <div className="text-white text-lg font-bold">+91-80-4567-8999</div>
              <div className="text-gray-400 text-sm">Available in Hindi, English, and regional languages</div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © 2024 MediBook India Pvt. Ltd. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  CIN: U72900KA2024PTC123456 | GSTIN: 29ABCDE1234F1Z5
                </p>
              </div>
              <div className="flex items-center space-x-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-primary font-semibold text-lg">
                🇮🇳 Made with ❤️ in India for India 🇮🇳
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Proudly serving healthcare needs across all states and union territories
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
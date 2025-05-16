import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">We'd Love to Hear From You</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our drones or need expert advice? Our team is here to help you find the perfect drone for your needs.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Cards with Hover Animation */}
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <ol>
                  <li className="text-gray-600">1718 Fillmore St ,San Francisco,United States</li>
                  <li className="text-gray-600">Hull Rd , North Yorkshire,United Kingdom</li>
                  <li className="text-gray-600">4/213 Miller St ,Sydney , Australia</li>
                  </ol>
                


                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">(415) 929-8883</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600">support@Skymapdrones.com</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Live Chat</h3>
                  <p className="text-gray-600">Available Monday to Friday, 9am - 5pm PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300 ${
                  isSubmitted ? 'bg-green-600' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
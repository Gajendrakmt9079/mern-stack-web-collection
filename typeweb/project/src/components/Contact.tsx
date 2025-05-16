import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formData.phone && !/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData(initialFormData);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need to book a service? Get in touch with our team today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6 flex items-center">
                  <div className="mr-3 bg-green-100 p-1 rounded-full">
                    <Send size={16} className="text-green-500" />
                  </div>
                  <p>Thank you! Your message has been sent successfully. We'll be in touch soon.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Taipal singh"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91 8619195354"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="tyre-replacement">Tyre Replacement</option>
                      <option value="wheel-alignment">Wheel Alignment</option>
                      <option value="puncture-repair">Puncture Repair</option>
                      <option value="seasonal-tyre-change">Seasonal Tyre Change</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-900 text-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 flex-shrink-0 text-red-400" />
                  <div>
                    <h4 className="font-bold mb-1">Our Main Location</h4>
                    <p className="text-blue-100">Station road bypass tiraha <br /> kuchaman city  dist kuchaman-didwana <br /> Rajsthan , 341508</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 flex-shrink-0 text-red-400" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-blue-100">
                      <a href="tel:+1234567890" className="hover:text-white transition-colors">+91 8619195354  ,+91 9460777239</a>
                    </p>
                  
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="mr-4 flex-shrink-0 text-red-400" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-blue-100">
                      <a href="mailto:hemantkumawataccs69@gmail.com" className="hover:text-white transition-colors">hemantkumawataccs69@gmail.com</a>
                    </p>
                   
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="mr-4 flex-shrink-0 text-red-400" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-blue-100">Monday - Friday: 8:00 AM - 7:00 PM</p>
                    <p className="text-blue-100">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
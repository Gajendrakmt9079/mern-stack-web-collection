import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl md:mx-24 px-4 md:px-0 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12  =">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-2  border-gray-500 shadow-sm "
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-2  border-gray-500 shadow-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-2  border-gray-500 shadow-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 p-2 block w-full rounded-md border-2  border-gray-500 shadow-sm"
                required
              />
            </div>
            <div className=" p-4 rounded-md mb-6">
              <div className="flex ">
                <input
                  id="cod"
                  name="paymentMethod"
                  type="checkbox"
                 
                  className="h-4 w-4 m-3 text-indigo-600 focus:ring-indigo-500 border-3 border-gray-300"
                  required
                />
                <label htmlFor="cod" className="ml-3 block   text-gray-700">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our {" "}
                  <Link
                    to="/PrivacyPolicy"
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                     Privacy Policy
                  </Link>{" "}
                 
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F36C33] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-[#F36C33] mr-4" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                3801 University Lake <br /> Dr Anchorage Alaska 99508 <br /> United States
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-[#F36C33] mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">(907) 563-8876</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 text-[#F36C33] mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@shadesnest.com</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <ul className="text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
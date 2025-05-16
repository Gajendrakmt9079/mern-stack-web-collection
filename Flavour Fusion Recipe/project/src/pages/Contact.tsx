import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-16">
      <div className="bg-[#333333] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
              <p className="text-gray-300 mb-8">
                Have questions about our classes or want to learn more? We'd love
                to hear from you. Send us a message and we'll respond as soon as
                possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-300">
                    1405 Old Square Rd <br /> Jackson Mississippi United States
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">(601) 982-9991</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">info@flavorfusionrecipes.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <h3 className="text-white font-semibold">Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 8:00 PM
                      <br />
                      Saturday: 10:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
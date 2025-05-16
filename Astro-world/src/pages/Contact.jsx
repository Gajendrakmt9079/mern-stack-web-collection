import React, { useState } from 'react';

const astrologers = [
  {
    name: 'Luna Starweaver',
    specialty: 'Vedic Astrology & Birth Charts',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Luna specializes in Vedic astrology and has helped thousands of clients discover their life purpose through detailed birth chart analysis.'
  },
  {
    name: 'Orion Phoenix',
    specialty: 'Western Astrology & Compatibility',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Orion combines traditional Western astrology with modern psychological approaches to provide comprehensive relationship insights.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Astrologers
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Meet our experienced team of professional astrologers
        </p>
      </div>

      {/* Astrologers */}
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        {astrologers.map((astrologer) => (
          <div key={astrologer.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={astrologer.image}
                  alt={astrologer.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {astrologer.name}
                  </h2>
                  <p className="text-purple-600 dark:text-purple-400">{astrologer.specialty}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{astrologer.bio}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Experience: {astrologer.experience}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
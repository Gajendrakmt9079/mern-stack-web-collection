import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axiosInstance from '../backendApis/axiosInstance';

function AddClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    vehicleNumber: '',
    vehicleType: 'car',
    avgKmPerDay: '',
    billPdf: null
  });

 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        vehicleNumber: formData.vehicleNumber,
        vehicleType: formData.vehicleType,
        avgKmPerDay: formData.avgKmPerDay,
        // billPdf is not sent here unless handled as file upload (see note below)
      };

      const response = await axiosInstance.post('/addclient', payload);
      console.log('Response:', response.data);
      setSuccess(true);
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      alert('Failed to submit client data');
    } finally {
      setIsSubmitting(false);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          vehicleNumber: '',
          vehicleType: 'car',
          avgKmPerDay: '',
          billPdf: null
        });
        setSuccess(false);
      }, 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto border border-gray-100"
    >
      <div className="flex items-center mb-8">
        <div className="bg-primary/10 p-3 rounded-xl mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Add New Client</h2>
          <p className="text-gray-500">Fill in the client and vehicle details below</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-600">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
              placeholder="John Smith"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-600">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-600">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
              placeholder="123 Main St, City, Country"
            />
          </div>

          {/* Vehicle Information */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-600">Vehicle Number *</label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
              placeholder="ABC 1234"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-600">Vehicle Type *</label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
            >
              <option value="car">Car</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-600">Average KM/Day *</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                name="avgKmPerDay"
                value={formData.avgKmPerDay}
                onChange={handleChange}
                required
                min="0"
                step="1"
                className="block w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                placeholder="50"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm">km</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-600">Bill PDF (Optional)</label>
            <div className="mt-1 flex items-center">
              <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg border border-dashed border-gray-300 cursor-pointer hover:bg-gray-50 transition-colors duration-200 w-full">
                <div className="flex flex-col items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    {formData.billPdf
                      ? formData.billPdf.name
                      : 'Click to upload or drag and drop'}
                  </p>
                </div>
                <input
                  type="file"
                  name="billPdf"
                  onChange={handleChange}
                  accept=".pdf"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-xl font-medium text-white shadow-md transition-all duration-200 ${isSubmitting || success
                ? 'bg-emerald-500'
                : 'bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg'
              }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : success ? (
              <div className="flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Client Added!
              </div>
            ) : (
              'Add Client'
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

export default AddClient;
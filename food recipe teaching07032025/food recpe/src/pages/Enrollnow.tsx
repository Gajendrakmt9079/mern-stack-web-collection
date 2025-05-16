import React, { useState } from 'react';
import { useLocation,Link } from 'react-router-dom';

interface EnrollmentFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

const EnrollNow: React.FC = () => {
  const location = useLocation();


  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8  pt-32">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center  bg-clip-text  mb-8 animate__animated animate__fadeIn text-black">
          Enrollment now
        </h2>

        <div className="mb-6 text-center animate__animated animate__fadeIn animate__delay-1s">
          <p className="text-lg font-semibold text-gray-700">Enrollment Fee</p>
          <p className="text-3xl text-blue-600">$38</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 animate__animated animate__fadeIn animate__delay-2s">
          <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            />
          </div>

          <Link to={'/checkout'}
        
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Complete Enrollment
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EnrollNow;

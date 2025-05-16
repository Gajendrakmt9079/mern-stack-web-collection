import React, { useState } from 'react';
import { FiDownload, FiBarChart2, FiDollarSign, FiTrendingUp, FiCalendar, FiFilter, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Reports() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const reports = [
    { 
      id: 1, 
      name: 'Monthly Revenue', 
      type: 'Financial', 
      date: '2024-02-01',
      downloads: 124,
      size: '2.4 MB',
      icon: <FiDollarSign className="text-blue-500" size={24} />
    },
    { 
      id: 2, 
      name: 'Client Activity', 
      type: 'Analytics', 
      date: '2024-02-01',
      downloads: 89,
      size: '1.8 MB',
      icon: <FiBarChart2 className="text-purple-500" size={24} />
    },
    { 
      id: 3, 
      name: 'Project Status', 
      type: 'Progress', 
      date: '2024-02-01',
      downloads: 76,
      size: '3.1 MB',
      icon: <FiTrendingUp className="text-green-500" size={24} />
    },
    { 
      id: 4, 
      name: 'Annual Summary', 
      type: 'Financial', 
      date: '2024-01-15',
      downloads: 210,
      size: '4.2 MB',
      icon: <FiDollarSign className="text-blue-500" size={24} />
    },
    { 
      id: 5, 
      name: 'User Engagement', 
      type: 'Analytics', 
      date: '2024-01-28',
      downloads: 95,
      size: '2.1 MB',
      icon: <FiBarChart2 className="text-purple-500" size={24} />
    },
    { 
      id: 6, 
      name: 'Quarterly Goals', 
      type: 'Progress', 
      date: '2024-01-10',
      downloads: 132,
      size: '1.9 MB',
      icon: <FiTrendingUp className="text-green-500" size={24} />
    },
  ];

  const reportTypes = ['All', 'Financial', 'Analytics', 'Progress'];

  const filteredReports = reports.filter(report => {
    const matchesFilter = activeFilter === 'All' || report.type === activeFilter;
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         report.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDownload = (reportId) => {
    // Simulate download
    console.log(`Downloading report ${reportId}`);
    // In a real app, this would trigger a file download
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Reports Dashboard</h2>
          <p className="text-gray-500 mt-1">Access and manage all your business reports</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiFilter className="text-gray-400" />
            </div>
            <select
              className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none bg-white"
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {reportTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report) => (
            <motion.div
              key={report.id}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-xl overflow-hidden transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    {report.icon}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {report.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{report.name}</h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FiCalendar className="mr-1" />
                  <span>{formatDate(report.date)}</span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span>{report.downloads} downloads</span>
                  <span>{report.size}</span>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload(report.id)}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-200"
                >
                  <FiDownload className="mr-2" />
                  Download Report
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FiSearch className="text-gray-400" size={32} />
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">No reports found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium">{filteredReports.length}</span> of{' '}
          <span className="font-medium">{reports.length}</span> reports
        </p>
        <button className="text-sm text-primary hover:text-primary-dark font-medium">
          View Report Archive →
        </button>
      </div>
    </motion.div>
  );
}

export default Reports;
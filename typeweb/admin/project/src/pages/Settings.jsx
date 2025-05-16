import React, { useEffect, useState } from 'react';
import { FiUser, FiMail, FiBell, FiLock, FiSave, FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import axiosInstanceAdmin from '../backendApis/axiosInstanceAdmin';

function Settings() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    notifications: {
      email: true,
      push: false,
      sms: false
    },
    theme: 'light',
    password: '',
    newPassword: '',
    confirmPassword: ''
  });

   const [profile, setProfile] = useState({
      name: '',
      email: '',
      phone: '',
      role: 'Super Administrator',
      joinDate: '',
      bio: 'Experienced administrator with full system access privileges.',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    });
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await axiosInstanceAdmin.get('/profile', { withCredentials: true });
          const user = response.data.data;
    
          setProfile(prev => ({
            ...prev,
            name: user.fullname,
            email: user.email,
            phone: user.phone || "8946152132", // Set this if phone exists in your data
            joinDate: user.createdAt,
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          }));
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };
    
      fetchProfile();
    }, []); 
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes('notifications.')) {
      const notificationType = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [notificationType]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }, 1500);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiUser /> },
    // { id: 'security', label: 'Security', icon: <FiLock /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell /> },
    { id: 'appearance', label: 'Appearance', icon: formData.theme === 'dark' ? <FiMoon /> : <FiSun /> }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-56 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-2xl font-bold p-6 pb-2">Settings</h2>
          <nav className="p-4">
            <ul className="space-y-1">
              {tabs.map(tab => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{tab.icon}</span>
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FiUser className="mr-2 text-primary" />
                  Profile Settings
                </h3>
                
                <div className="space-y-6 max-w-lg">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                      />
                      <FiUser className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                      />
                      <FiMail className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FiLock className="mr-2 text-primary" />
                  Security Settings
                </h3>
                
                <div className="space-y-6 max-w-lg">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Current Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                      />
                      <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                      />
                      <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none"
                      />
                      <FiLock className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <FiBell className="mr-2 text-primary" />
                  Notification Preferences
                </h3>
                
                <div className="space-y-6 max-w-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-800">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive updates via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="notifications.email"
                          checked={formData.notifications.email}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-800">Push Notifications</h4>
                        <p className="text-sm text-gray-500">Receive app notifications</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="notifications.push"
                          checked={formData.notifications.push}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-800">SMS Notifications</h4>
                        <p className="text-sm text-gray-500">Receive text messages</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="notifications.sms"
                          checked={formData.notifications.sms}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Appearance Tab */}
            {activeTab === 'appearance' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  {formData.theme === 'dark' ? (
                    <FiMoon className="mr-2 text-primary" />
                  ) : (
                    <FiSun className="mr-2 text-primary" />
                  )}
                  Appearance Settings
                </h3>
                
                <div className="space-y-6 max-w-lg">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Theme Preference</h4>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, theme: 'light' }))}
                        className={`flex-1 p-4 rounded-lg border ${
                          formData.theme === 'light' 
                            ? 'border-primary ring-2 ring-primary/20' 
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-full h-24 mb-2 bg-white rounded-md shadow-inner border border-gray-200"></div>
                          <span className="text-sm font-medium">Light</span>
                        </div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, theme: 'dark' }))}
                        className={`flex-1 p-4 rounded-lg border ${
                          formData.theme === 'dark' 
                            ? 'border-primary ring-2 ring-primary/20' 
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-full h-24 mb-2 bg-gray-800 rounded-md shadow-inner border border-gray-700"></div>
                          <span className="text-sm font-medium">Dark</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSaving}
                className={`px-6 py-3 rounded-lg font-medium text-white shadow-md transition-all duration-200 ${
                  isSaving || saveSuccess
                    ? 'bg-emerald-500'
                    : 'bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg'
                }`}
              >
                {isSaving ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Saving...
                  </div>
                ) : saveSuccess ? (
                  <div className="flex items-center justify-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Changes Saved!
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FiSave className="mr-2" />
                    Save Changes
                  </div>
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Settings;
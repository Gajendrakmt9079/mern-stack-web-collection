import React, { useEffect, useState } from 'react';
import { FiUser, FiMail, FiPhone, FiLock, FiEdit2, FiSave, FiUpload, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import axiosInstance from '../backendApis/axiosInstance';
import axiosInstanceAdmin from '../backendApis/axiosInstanceAdmin';


const AdminProfile = () => {
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
  }, []); // Only run once on mount
  
  
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [activeTab, setActiveTab] = useState('profile');
  const [passeordmessage, setpasseordmessage] = useState("not vaild")
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(prev => ({ ...prev, [name]: value }));
  };
  const handlepasswordchange = async (e) => {
    e.preventDefault();
    if (password.new != password.confirm) {
      setpasseordmessage("new passowrd and comfrim password not match");
    }
    else {
      setpasseordmessage("you are sure to change password");
    }

    try {
      const response = await axiosInstanceAdmin.post(
        '/change-password',
        {
          oldPassword: password.old,
          newPassword: password.new
        },
        { withCredentials: true }
      );

      setpasseordmessage(response.data.message || "Password changed successfully.");
    } catch (err) {
      setpasseordmessage(err.response?.data?.message || "Failed to change password.");
    }
    alert(passeordmessage);
  }
  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile(prev => ({ ...prev, avatar: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B85C0] to-[#374151] p-6 text-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Profile</h1>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-white text-[#2B85C0] rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiSave className="mr-2" /> Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-white text-[#2B85C0] rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiEdit2 className="mr-2" /> Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-4 font-medium text-sm ${activeTab === 'profile' ? 'border-b-2 border-[#2B85C0] text-[#2B85C0]' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Profile Information
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-4 font-medium text-sm ${activeTab === 'security' ? 'border-b-2 border-[#2B85C0] text-[#2B85C0]' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Security Settings
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-6 py-4 font-medium text-sm ${activeTab === 'activity' ? 'border-b-2 border-[#2B85C0] text-[#2B85C0]' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Activity Log
          </button>
        </nav>
      </div>

      <div className="p-6">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Avatar Section */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative mb-4">
                <img
                  src={profile.avatar}
                  alt="Admin Avatar"
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-[#2B85C0] text-white p-2 rounded-full cursor-pointer hover:bg-[#1a6ea8] transition-colors">
                    <FiUpload />
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleAvatarUpload}
                      accept="image/*"
                    />
                  </label>
                )}
              </div>
              <h2 className="text-xl font-bold text-center">{profile.name}</h2>
              <p className="text-[#2B85C0] font-medium">{profile.role}</p>
              <div className="flex items-center mt-2 text-gray-500">
                <FiCalendar className="mr-1" />
                <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Profile Form */}
            <div className="w-full md:w-2/3">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  {isEditing ? (
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2B85C0] focus:border-[#2B85C0]"
                      />
                    </div>
                  ) : (
                    <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <div className="relative">
                      <FiMail className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2B85C0] focus:border-[#2B85C0]"
                      />
                    </div>
                  ) : (
                    <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <div className="relative">
                      <FiPhone className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleInputChange}
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2B85C0] focus:border-[#2B85C0]"
                      />
                    </div>
                  ) : (
                    <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2B85C0] focus:border-[#2B85C0]"
                    />
                  ) : (
                    <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.bio}</p>
                  )}
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
            className="max-w-lg"
          >
            <h3 className="text-xl font-semibold mb-6">Change Password</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="current"
                    value={password.current}
                    onChange={handlePasswordChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2B85C0] focus:border-[#2B85C0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="new"
                    value={password.new}
                    onChange={handlePasswordChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2B85C0] focus:border-[#2B85C0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="confirm"
                    value={password.confirm}
                    onChange={handlePasswordChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2B85C0] focus:border-[#2B85C0]"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button onClick={handlepasswordchange} className="px-6 py-2 bg-[#2B85C0] text-white rounded-lg hover:bg-[#1a6ea8] transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Two-Factor Authentication</h3>
              <div className="bg-[#2B85C0]/10 border border-[#2B85C0]/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Authentication</h4>
                    <p className="text-sm text-gray-600">Add phone number for SMS verification</p>
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>

            <div className="space-y-4">
              {[
                { id: 1, action: 'Updated user permissions', date: '2023-05-15 14:30', ip: '192.168.1.1' },
                { id: 2, action: 'Created new admin account', date: '2023-05-14 09:15', ip: '192.168.1.1' },
                { id: 3, action: 'Changed system settings', date: '2023-05-12 16:45', ip: '192.168.1.1' },
                { id: 4, action: 'Logged in to dashboard', date: '2023-05-12 08:30', ip: '192.168.1.1' },
              ].map(activity => (
                <div key={activity.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-500">{new Date(activity.date).toLocaleString()}</p>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{activity.ip}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                View Full Log
              </button>
              <div className="text-sm text-gray-500">
                Showing 4 of 127 activities
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
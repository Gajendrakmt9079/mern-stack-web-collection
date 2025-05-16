import React, { useState, useEffect } from 'react';
import { FiBell, FiCheck, FiX, FiAlertCircle, FiInfo, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      title: 'New message from John',
      content: 'Regarding the project deadline extension',
      time: '10 mins ago',
      read: false
    },
    {
      id: 2,
      type: 'alert',
      title: 'System maintenance',
      content: 'Scheduled maintenance tonight at 11 PM',
      time: '2 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'New client registered',
      content: 'Alice Williams signed up for premium plan',
      time: '1 day ago',
      read: true
    }
  ]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Calculate unread count
  useEffect(() => {
    const count = notifications.filter(n => !n.read).length;
    setUnreadCount(count);
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'message':
        return <FiMail className="text-blue-500" />;
      case 'alert':
        return <FiAlertCircle className="text-yellow-500" />;
      case 'info':
        return <FiInfo className="text-green-500" />;
      default:
        return <FiInfo className="text-gray-500" />;
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-2 rounded-full hover:bg-gray-100 relative"
      >
        <FiBell className="text-gray-600 text-xl" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
          <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 className="font-medium text-gray-800">Notifications</h3>
            <div className="flex space-x-2">
              <button
                onClick={markAllAsRead}
                className="text-xs text-blue-600 hover:text-blue-800"
                disabled={unreadCount === 0}
              >
                Mark all as read
              </button>
              <button
                onClick={() => setNotifications([])}
                className="text-xs text-red-600 hover:text-red-800"
              >
                Clear all
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-1 pr-2">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-600'}`}>
                        {notification.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">{notification.content}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-1 text-gray-400 hover:text-green-500"
                          title="Mark as read"
                        >
                          <FiCheck size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 text-gray-400 hover:text-red-500"
                        title="Delete"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-6 text-center">
                <FiBell className="mx-auto text-gray-400 text-2xl mb-2" />
                <p className="text-sm text-gray-500">No notifications</p>
              </div>
            )}
          </div>

          <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 text-center">
            <Link to={"/Notifications"} onClick={() => setShowDropdown(!showDropdown)} className="text-sm text-blue-600 hover:text-blue-800">
              View all notifications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

// Usage in your navbar/layout:
const NavbarWithNotification = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <Notification />
        {/* Other navbar items */}
      </div>
    </header>
  );
};

export default Notification;
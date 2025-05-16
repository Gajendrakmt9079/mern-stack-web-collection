import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiAlertCircle, FiInfo, FiMail, FiBell, FiX } from 'react-icons/fi';

const NotificationsPage = () => {
  const [allNotifications, setAllNotifications] = useState([
    // Sample data - replace with API calls
    { 
      id: 1, 
      type: 'message', 
      title: 'New message from John', 
      content: 'Regarding project deadline', 
      fullContent: 'Hello,\n\nI wanted to discuss the upcoming project deadline. We may need an extension due to unforeseen circumstances with the third-party API integration. Please let me know if we can schedule a call to discuss this further.\n\nBest regards,\nJohn', 
      time: '2023-05-15T14:30:00Z', 
      read: false 
    },
    { 
      id: 2, 
      type: 'alert', 
      title: 'System maintenance', 
      content: 'Scheduled maintenance tonight', 
      fullContent: 'Attention all users:\n\nWe will be performing scheduled system maintenance tonight from 11:00 PM to 3:00 AM. During this time, the system will be unavailable. Please save your work and log out before this time.\n\nWe apologize for any inconvenience this may cause.\n\nIT Department', 
      time: '2023-05-14T09:15:00Z', 
      read: true 
    },
    // Add more sample data...
    ...Array.from({ length: 25 }, (_, i) => ({
      id: i + 3,
      type: i % 3 === 0 ? 'message' : i % 3 === 1 ? 'alert' : 'info',
      title: `Notification ${i + 3}`,
      content: `This is notification content #${i + 3}`,
      fullContent: `This is the full detailed content for notification #${i + 3}. It contains all the information you need about this particular notification.\n\nAdditional details:\n- Created by: System Admin\n- Priority: ${i % 2 === 0 ? 'High' : 'Normal'}\n- Related to: Project ${i % 5 + 1}`,
      time: new Date(Date.now() - (i * 3600000)).toISOString(),
      read: i % 4 === 0
    }))
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 10;
  const [filter, setFilter] = useState('all'); // 'all', 'unread', 'read'
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Filter notifications
  const filteredNotifications = allNotifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  // Sort by time (newest first)
  const sortedNotifications = [...filteredNotifications].sort((a, b) => 
    new Date(b.time) - new Date(a.time)
  );

  const deleteNotification = (id) => {
    setAllNotifications(allNotifications.filter(n => n.id !== id));
  };
  // Get current notifications
  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = sortedNotifications.slice(
    indexOfFirstNotification, 
    indexOfLastNotification
  );
  const totalPages = Math.ceil(sortedNotifications.length / notificationsPerPage);

  // Mark as read function
  const markAsRead = (id) => {
    setAllNotifications(allNotifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  // Mark all as read
  const markAllAsRead = () => {
    setAllNotifications(allNotifications.map(n => ({ ...n, read: true })));
  };

  // View full notification
  const viewFullNotification = (notification) => {
    setSelectedNotification(notification);
    setShowModal(true);
    if (!notification.read) {
      markAsRead(notification.id);
    }
  };

  // Get icon by type
  const getIcon = (type) => {
    switch(type) {
      case 'message': return <FiMail className="text-blue-500" />;
      case 'alert': return <FiAlertCircle className="text-yellow-500" />;
      case 'info': return <FiInfo className="text-green-500" />;
      default: return <FiInfo className="text-gray-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Notification Detail Modal */}
      {showModal && selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center border-b border-gray-200 p-4">
              <div className="flex items-center">
                <div className="mr-3">
                  {getIcon(selectedNotification.type)}
                </div>
                <h3 className="text-lg font-medium">
                  {selectedNotification.title}
                </h3>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <FiX size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <div className="whitespace-pre-line mb-6">
                {selectedNotification.fullContent}
              </div>
              
              <div className="text-sm text-gray-500">
                <div className="mb-2">
                  <span className="font-medium">Received:</span>{' '}
                  {new Date(selectedNotification.time).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Status:</span>{' '}
                  {selectedNotification.read ? 'Read' : 'Unread'}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 p-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          <FiBell className="mr-2" /> Notifications
        </h1>
        <div className="flex space-x-3">
          <select 
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="all">All Notifications</option>
            <option value="unread">Unread Only</option>
            <option value="read">Read Only</option>
          </select>
          <button
            onClick={markAllAsRead}
            className="bg-blue-600 text-white px-4 w-full rounded text-sm hover:bg-blue-700"
          >
            Mark All as Read
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {currentNotifications.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {currentNotifications.map(notification => (
             <li 
             key={notification.id} 
             className={`px-6 py-4 hover:bg-gray-50 cursor-pointer relative ${!notification.read ? 'bg-blue-50' : ''}`}
             onClick={() => viewFullNotification(notification)}
           >
             <div className="flex items-start">
               <div className="flex-shrink-0 pt-1 pr-3">
                 {getIcon(notification.type)}
               </div>
               <div className="flex-1 min-w-0">
                 <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-600'}`}>
                   {notification.title}
                 </p>
                 <p className="text-sm text-gray-500 truncate">{notification.content}</p>
                 <p className="text-xs text-gray-400 mt-1">
                   {new Date(notification.time).toLocaleString()}
                 </p>
               </div>
           
               <div className="flex flex-col items-end space-y-2 ml-4">
                 {!notification.read && (
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       markAsRead(notification.id);
                     }}
                     className="text-sm text-blue-600 hover:text-blue-800"
                   >
                     Mark as read
                   </button>
                 )}
                 <button
                   onClick={(e) => {
                     e.stopPropagation(); // Prevent modal from opening
                     deleteNotification(notification.id);
                   }}
                   className="text-gray-400 hover:text-red-600"
                   title="Delete notification"
                 >
                   <FiX size={16} />
                 </button>
               </div>
             </div>
           </li>
           
            ))}
          </ul>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <FiBell className="mx-auto text-3xl mb-2" />
            <p>No notifications found</p>
          </div>
        )}

        {/* Pagination */}
        {sortedNotifications.length > notificationsPerPage && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstNotification + 1} to{' '}
              {Math.min(indexOfLastNotification, sortedNotifications.length)} of{' '}
              {sortedNotifications.length} notifications
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-50'}`}
              >
                <FiChevronLeft />
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1 border rounded ${currentPage === pageNum ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="px-3 py-1">...</span>
              )}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className="px-3 py-1 border rounded hover:bg-gray-50"
                >
                  {totalPages}
                </button>
              )}

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:bg-gray-50'}`}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash2, FiSearch, FiChevronDown, FiChevronUp, FiMail, FiX } from 'react-icons/fi';
import axiosInstance from '../backendApis/axiosInstance';

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axiosInstance.get('/getallclients'); // Adjust route if needed
        setClients(response.data.data); // accessing `.data` inside `ApiResponse`
      } catch (error) {
        console.error('Error fetching clients:', error.response?.data || error.message);
        alert('Failed to fetch clients');
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);


  const handleUpdate = async (editingClient) => {
    try {
      const res = await axiosInstance.put(`/updateclient/${editingClient._id}`, editingClient);
      setClients(prev =>
        prev.map(client =>
          client._id === editingClient._id ? res.data.data : client
        )
      );
      setEditingClient(null);
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update client');
    }
  };


  const [viewClientModal, setViewClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null); // will hold full client object

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 5;

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Messaging state
  const [selectedClients, setSelectedClients] = useState([]);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageContent, setMessageContent] = useState('');
  const [messageSubject, setMessageSubject] = useState('');

  // Filter clients based on search term
  const filteredClients = clients.filter(client =>
    Object.values(client).some(
      value => value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort clients
  const sortedClients = [...filteredClients].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  // Get current clients for pagination
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = sortedClients.slice(indexOfFirstClient, indexOfLastClient);
  const totalPages = Math.ceil(sortedClients.length / clientsPerPage);

  // Handle sort request
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/deleteclient/${id}`);
      setClients(prev => prev.filter(client => client._id !== id));
      alert('Client deleted successfully');
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete client');
    }
  };

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle client selection
  const toggleClientSelection = (id) => {
    setSelectedClients(prev =>
      prev.includes(id)
        ? prev.filter(clientId => clientId !== id)
        : [...prev, id]
    );
  };

  // Handle select all/none
  const toggleSelectAll = () => {
    if (selectedClients.length === currentClients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(currentClients.map(client => client.id));
    }
  };

  // Handle sending message
  const handleSendMessage = () => {
    // In a real app, this would send the message to the selected clients
    console.log('Sending message to:', selectedClients);
    console.log('Subject:', messageSubject);
    console.log('Content:', messageContent);

    // Reset and close modal
    setMessageContent('');
    setMessageSubject('');
    setShowMessageModal(false);
    setSelectedClients([]);

    alert(`Message sent to ${selectedClients.length} client(s)`);
  };
  if (loading) return <p>Loading clients...</p>;

  return (


    <div className="bg-white rounded-xl shadow-md p-6">

      {viewClientModal && editingClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Client Details</h3>
              <button
                onClick={() => {
                  setViewClientModal(false);
                  setEditingClient(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Editable Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Name"
                  value={editingClient.name}
                  onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Email"
                  value={editingClient.email}
                  onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Phone"
                  value={editingClient.phone}
                  onChange={(e) => setEditingClient({ ...editingClient, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Address"
                  value={editingClient.address}
                  onChange={(e) => setEditingClient({ ...editingClient, address: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Avg KM Per Day</label>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Average KM"
                  value={editingClient.avgKmPerDay}
                  onChange={(e) => setEditingClient({ ...editingClient, avgKmPerDay: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setViewClientModal(false);
                  setEditingClient(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  await handleUpdate(editingClient);
                  setViewClientModal(false);
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                Message {selectedClients.length} {selectedClients.length === 1 ? 'Client' : 'Clients'}
              </h3>
              <button
                onClick={() => setShowMessageModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                value={messageSubject}
                onChange={(e) => setMessageSubject(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Message subject"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                placeholder="Type your message here..."
              />
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowMessageModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                disabled={!messageContent}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold">Client List</h2>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          {selectedClients.length > 0 && (
            <button
              onClick={() => setShowMessageModal(true)}
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              <FiMail className="mr-2" />
              Message Selected ({selectedClients.length})
            </button>
          )}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search clients..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedClients.length === currentClients.length && currentClients.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('name')}
              >
                <div className="flex items-center">
                  Name
                  {sortConfig.key === 'name' && (
                    sortConfig.direction === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('vehicleType')}
              >
                <div className="flex items-center">
                  vehicleType
                  {sortConfig.key === 'vehicleType' && (
                    sortConfig.direction === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => requestSort('createdAt')}
              >
                <div className="flex items-center">
                  Joined
                  {sortConfig.key === 'createdAt' && (
                    sortConfig.direction === 'asc' ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />
                  )}
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentClients.length > 0 ? (
              currentClients.map((client) => (
                <tr key={client._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedClients.includes(client.id)}
                      onChange={() => toggleClientSelection(client.id)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                        {client.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 capitalize font-semibold rounded-full `}>
                      {client.vehicleType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(client.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="text-primary hover:text-primary-dark mr-4"
                      onClick={() => {
                        setSelectedClients([client.id]);
                        setShowMessageModal(true);
                      }}
                    >
                      <FiMail className="inline mr-1" /> Message
                    </button>
                    <button
                      className="text-blue-600 hover:text-blue-800 mr-4"
                      onClick={() => {
                        setEditingClient(client);
                        setViewClientModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(client._id)}
                    >
                      <FiTrash2 className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                  No clients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {sortedClients.length > clientsPerPage && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{indexOfFirstClient + 1}</span> to{' '}
            <span className="font-medium">
              {Math.min(indexOfLastClient, sortedClients.length)}
            </span>{' '}
            of <span className="font-medium">{sortedClients.length}</span> clients
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-md ${currentPage === number ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Clients;
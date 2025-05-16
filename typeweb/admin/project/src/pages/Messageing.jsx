import React, { useState, useEffect } from 'react';
import { FiSend, FiX, FiChevronDown, FiAlertCircle, FiInfo, FiMail, FiMessageSquare } from 'react-icons/fi';

const MessagingComponent = ({ clients }) => {
  // Message state
  const [message, setMessage] = useState({
    subject: '',
    content: '',
    messageType: 'text', // 'text', 'image', 'document', 'template'
    vehicleType: 'all', // 'all', 'car', 'suv', 'truck', etc.
    recipientType: 'all', // 'all', 'selected'
    selectedClients: [],
    media: null,
    templateName: '',
    templateParams: {}
  });

  // UI state
  const [showClientSelector, setShowClientSelector] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Extract unique vehicle types from clients
  const vehicleTypes = ['all', ...new Set(clients.map(client => client.vehicleType))];

  // Filter clients by selected vehicle type
  const filteredClients = message.vehicleType === 'all' 
    ? clients 
    : clients.filter(client => client.vehicleType === message.vehicleType);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setMessage(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // Handle template parameter changes
  const handleTemplateParamChange = (param, value) => {
    setMessage(prev => ({
      ...prev,
      templateParams: {
        ...prev.templateParams,
        [param]: value
      }
    }));
  };

  // Toggle client selection
  const toggleClientSelection = (id) => {
    setMessage(prev => ({
      ...prev,
      selectedClients: prev.selectedClients.includes(id)
        ? prev.selectedClients.filter(clientId => clientId !== id)
        : [...prev.selectedClients, id]
    }));
  };

  // Select all/none
  const toggleSelectAllClients = () => {
    setMessage(prev => ({
      ...prev,
      selectedClients: prev.selectedClients.length === filteredClients.length
        ? []
        : filteredClients.map(client => client.id)
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Prepare payload based on message type
    const payload = {
      ...message,
      // For WhatsApp template messages
      ...(message.messageType === 'template' && {
        template: {
          name: message.templateName,
          parameters: Object.values(message.templateParams)
        }
      }),
      // For media messages
      ...(message.messageType === 'image' && { mediaUrl: message.media }),
      ...(message.messageType === 'document' && { documentUrl: message.media })
    };

    try {
      // Simulate API call
      console.log('Sending message with payload:', payload);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      // Reset form
      setMessage({
        subject: '',
        content: '',
        messageType: 'text',
        vehicleType: 'all',
        recipientType: 'all',
        selectedClients: [],
        media: null,
        templateName: '',
        templateParams: {}
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  // Render appropriate fields based on message type
  const renderMessageFields = () => {
    switch(message.messageType) {
      case 'text':
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message Content</label>
            <textarea
              name="content"
              value={message.content}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        );
      
      case 'image':
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
            <input
              type="file"
              name="media"
              onChange={handleChange}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Caption (optional)</label>
              <textarea
                name="content"
                value={message.content}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        );
      
      case 'document':
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Document</label>
            <input
              type="file"
              name="media"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
              <textarea
                name="content"
                value={message.content}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        );
      
      case 'template':
        return (
          <div className="mb-4">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">Template Name</label>
              <input
                type="text"
                name="templateName"
                value={message.templateName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <label className="block text-sm font-medium text-gray-700 mb-1">Template Parameters</label>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Parameter 1"
                onChange={(e) => handleTemplateParamChange('param1', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Parameter 2"
                onChange={(e) => handleTemplateParamChange('param2', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Parameter 3"
                onChange={(e) => handleTemplateParamChange('param3', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <FiMessageSquare className="mr-2 text-blue-500" />
        Send Messages
      </h2>
      
      <form onSubmit={handleSubmit}>
        {/* Recipient Selection */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-800 mb-3">Recipient Selection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
              <select
                name="vehicleType"
                value={message.vehicleType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                {vehicleTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Vehicle Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Recipient Type</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="recipientType"
                    value="all"
                    checked={message.recipientType === 'all'}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">All Clients</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="recipientType"
                    value="selected"
                    checked={message.recipientType === 'selected'}
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">Select Clients</span>
                </label>
              </div>
            </div>
          </div>
          
          {message.recipientType === 'selected' && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setShowClientSelector(!showClientSelector)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                {showClientSelector ? 'Hide Client List' : 'Show Client List'}
                <FiChevronDown className={`ml-1 transition-transform ${showClientSelector ? 'rotate-180' : ''}`} />
              </button>
              
              {showClientSelector && (
                <div className="mt-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-2">
                  <div className="mb-2">
                    <button
                      type="button"
                      onClick={toggleSelectAllClients}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      {message.selectedClients.length === filteredClients.length ? 'Deselect All' : 'Select All'}
                    </button>
                  </div>
                  
                  {filteredClients.map(client => (
                    <div key={client.id} className="flex items-center p-2 hover:bg-gray-50">
                      <input
                        type="checkbox"
                        id={`client-${client.id}`}
                        checked={message.selectedClients.includes(client.id)}
                        onChange={() => toggleClientSelection(client.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`client-${client.id}`} className="ml-2 block text-sm text-gray-700">
                        {client.name} ({client.vehicleType})
                      </label>
                    </div>
                  ))}
                </div>
              )}
              
              {message.selectedClients.length > 0 && (
                <p className="mt-2 text-sm text-gray-500">
                  Selected {message.selectedClients.length} client(s)
                </p>
              )}
            </div>
          )}
        </div>
        
        {/* Message Configuration */}
        <div className="mb-6 p-4 border border-gray-200 rounded-lg">
          <h3 className="font-medium text-gray-800 mb-3">Message Configuration</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Message Type</label>
            <select
              name="messageType"
              value={message.messageType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="text">Text Message</option>
              <option value="image">Image Message</option>
              <option value="document">Document Message</option>
              <option value="template">WhatsApp Template</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject (optional)</label>
            <input
              type="text"
              name="subject"
              value={message.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {renderMessageFields()}
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSending || (message.recipientType === 'selected' && message.selectedClients.length === 0)}
            className={`flex items-center px-4 py-2 rounded-md text-white ${isSending || success ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isSending ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : success ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Message Sent!
              </>
            ) : (
              <>
                <FiSend className="mr-2" />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

// Sample client data for demonstration
const sampleClients = [
  { id: 1, name: 'John Doe', vehicleType: 'car', phone: '+1234567890' },
  { id: 2, name: 'Jane Smith', vehicleType: 'suv', phone: '+1234567891' },
  { id: 3, name: 'Bob Johnson', vehicleType: 'truck', phone: '+1234567892' },
  { id: 4, name: 'Alice Williams', vehicleType: 'car', phone: '+1234567893' },
  { id: 5, name: 'Charlie Brown', vehicleType: 'motorcycle', phone: '+1234567894' },
];

const Messageing = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <MessagingComponent clients={sampleClients} />
    </div>
  );
};

export default Messageing;
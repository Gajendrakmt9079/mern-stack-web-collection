import { useState } from 'react';

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [error, setError] = useState('');

  const trackOrder = async () => {
    setError('');
    setOrderStatus(null);

    if (!orderId || !email) {
      setError('Please enter both Order ID and Email.');
      return;
    }

    try {
      // Mock API call
      const mockStatus = {
        id: orderId,
        status: 'Shipped',
        estimatedDelivery: 'March 15, 2025',
        address: '1234 Blinds St, Decor City, DC 56789',
      };

      setOrderStatus(mockStatus);
    } catch (err) {
      setError('Failed to retrieve order details. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enter Your Order Details</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <input
              type="text"
              placeholder="Enter your order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={trackOrder}
              className="w-full p-2 bg-[#F36C33] text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Track Order
            </button>

            {orderStatus && (
              <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
                <p className="text-lg"><strong>Order ID:</strong> {orderStatus.id}</p>
                <p className="text-lg"><strong>Status:</strong> {orderStatus.status}</p>
                <p className="text-lg"><strong>Estimated Delivery:</strong> {orderStatus.estimatedDelivery}</p>
                <p className="text-lg"><strong>Delivery Address:</strong> {orderStatus.address}</p>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {["Amazing quality and fast delivery! Highly recommend.", "The blinds fit perfectly, and the service was excellent.", "Beautiful design and very easy to install."].map((review, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <p>{review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;

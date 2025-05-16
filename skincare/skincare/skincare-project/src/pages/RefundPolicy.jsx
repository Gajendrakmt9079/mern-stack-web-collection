import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-gray-800 border-b pb-4">Refund Policy</h1>

        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            At <span className="font-semibold">Trihard Skincare</span>, we want you to be completely satisfied with your purchase. If a product doesn’t work for you, we offer a comprehensive refund policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">30-Day Satisfaction Guarantee</h2>
          <p className="mb-4">
            We offer a 30-day satisfaction guarantee on all our products. If you're not completely satisfied, return it within 30 days of delivery for a full refund or exchange.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Return Eligibility</h2>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Returned within 30 days of delivery</li>
            <li>In the original packaging</li>
            <li>At least 75% full</li>
            <li>Accompanied by proof of purchase</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Non-Returnable Items</h2>
          <p className="mb-4">For hygiene reasons, the following items cannot be returned once opened:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Makeup products (lipsticks, mascaras, etc.)</li>
            <li>Sample-sized products</li>
            <li>Gift sets (unless unopened)</li>
            <li>Sale items marked as "final sale"</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">How to Initiate a Return</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-1">
            <li>Contact us at returns@Trihardskincare.com or call +1 (234) 567-890</li>
            <li>Provide your order number and reason for return</li>
            <li>Receive return authorization and shipping instructions</li>
            <li>Package the item securely</li>
            <li>Ship to the provided return address</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Refund Process</h2>
          <p className="mb-4">
            Once we receive your return, we will inspect it and notify you of approval. Refunds will be processed within 5 business days and credited to your original payment method. Processing times may vary based on your payment provider.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Exchanges</h2>
          <p className="mb-4">
            If you'd like to exchange your product for a different item, please indicate this when initiating your return. We’ll process the exchange once we receive your returned item.
          </p>

          <p className="text-sm text-gray-500 mt-6">Last Updated: January 1, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

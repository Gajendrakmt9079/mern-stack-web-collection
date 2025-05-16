import React from 'react';

const Policy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-gray-800 border-b pb-4">Privacy Policy</h1>
        
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            At <span className="font-semibold">Trihard Skincare</span>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Information We Collect</h2>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you register on our website, express interest in obtaining information about us or our products, or otherwise contact us.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Phone number</li>
            <li>Payment information</li>
            <li>Order history</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Process orders and send order confirmations</li>
            <li>Provide customer support</li>
            <li>Send marketing communications (if you've opted in)</li>
            <li>Improve our website and product offerings</li>
            <li>Respond to your inquiries</li>
            <li>Administer promotions or contests</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies, but some features may not function properly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Third-Party Disclosure</h2>
          <p className="mb-4">We do not sell, trade, or otherwise transfer your personally identifiable information except in the following cases:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Service providers assisting us</li>
            <li>Legal authorities when required</li>
            <li>In the event of a merger, acquisition, or asset sale</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Data Security</h2>
          <p className="mb-4">
            We implement security measures to protect your personal information, ensuring it remains confidential and secure.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Your Rights</h2>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Access the personal information we have about you</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Changes to This Privacy Policy</h2>
          <p className="mb-4">We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated "Last Updated" date.</p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">Contact Us</h2>
          <p className="mb-4">If you have any questions, please contact us at:</p>
          <p className="bg-gray-200 p-4 rounded-md text-gray-800">
            <span className="font-semibold">Email:</span> privacy@Trihardskincare.com<br />
            <span className="font-semibold">Phone:</span> +1 (234) 567-890<br />
            <span className="font-semibold">Address:</span> 123 Beauty Lane, New York, NY 10001, USA
          </p>
          
          <p className="text-sm text-gray-500 mt-6">Last Updated: January 1, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Policy;

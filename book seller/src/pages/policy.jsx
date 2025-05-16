import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">Privacy Policy</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Information We Collect</h2>
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold">Book online shop</span>, we collect personal information such as your name, email address, billing and shipping details, and payment information when you make a purchase.
          We also gather browsing data, including IP addresses and device information, to improve user experience and site functionality.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>To process and fulfill book orders efficiently.</li>
          <li>To communicate order status, promotions, and customer support responses.</li>
          <li>To enhance your shopping experience with personalized recommendations.</li>
          <li>To maintain security and prevent fraudulent transactions.</li>
          <li>To analyze website performance and improve our services.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Information Sharing</h2>
        <p className="text-gray-700 leading-relaxed">
          We do not sell or rent personal information. However, we may share data with third-party payment processors, shipping providers, and analytics services to ensure smooth transactions and site performance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Security</h2>
        <p className="text-gray-700 leading-relaxed">
          We implement robust security measures, including encryption and secure payment gateways, to protect your personal information. However, no online transaction is entirely risk-free, so we encourage users to take appropriate precautions.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Your Rights</h2>
        <p className="text-gray-700 leading-relaxed">
          You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time.
          If you need assistance, please contact our support team at <span className="font-semibold">privacy@bookhaven.com</span>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Cookies & Tracking</h2>
        <p className="text-gray-700 leading-relaxed">
          We use cookies and tracking technologies to enhance your browsing experience and analyze site traffic. You can manage cookie preferences in your browser settings.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy periodically. Please check this page for any changes, as continued use of our website implies acceptance of the updated policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

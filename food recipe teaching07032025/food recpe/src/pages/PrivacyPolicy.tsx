import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Last updated: March 1, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">1. Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Course preferences and history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">2. How We Use Your Information</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Provide and improve our services</li>
            <li>Process your payments</li>
            <li>Send you updates and marketing communications</li>
            <li>Respond to your comments and questions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">3. Information Sharing</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We do not sell or rent your personal information to third parties. We may share your 
            information with service providers who assist in our operations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">4. Security</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We implement appropriate security measures to protect your personal information from 
            unauthorized access, alteration, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">5. Your Rights</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">6. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="text-gray-600 dark:text-gray-400">
            <p>Email: privacy@culinarymaster.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Cooking Street, Foodie City, FC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
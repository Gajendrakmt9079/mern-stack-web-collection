import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Terms and Conditions</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Last updated: March 1, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            By accessing and using CulinaryMaster's website and services, you accept and agree to 
            be bound by these Terms and Conditions and our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">2. User Accounts</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            When creating an account, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Not share your account credentials</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">3. Course Content</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All course content, including videos, recipes, and materials, is protected by copyright and other intellectual property rights.
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Content is for personal, non-commercial use only</li>
            <li>Sharing or redistributing content is prohibited</li>
            <li>Recording or copying course materials is not allowed</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">4. Payment Terms</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Course and event fees must be paid in full before access is granted. We accept major credit cards and other specified payment methods.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">5. Code of Conduct</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Users must:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Treat others with respect</li>
            <li>Not engage in disruptive behavior</li>
            <li>Follow safety guidelines in cooking activities</li>
            <li>Not post inappropriate or harmful content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">6. Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            CulinaryMaster is not liable for any injuries, damages, or losses resulting from:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Use of our services or content</li>
            <li>Cooking activities related to our courses</li>
            <li>Technical issues or service interruptions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">7. Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We reserve the right to modify these terms at any time. Users will be notified of significant changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">8. Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For questions about these terms, contact us at:
          </p>
          <div className="text-gray-600 dark:text-gray-400">
            <p>Email: legal@culinarymaster.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Cooking Street, Foodie City, FC 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
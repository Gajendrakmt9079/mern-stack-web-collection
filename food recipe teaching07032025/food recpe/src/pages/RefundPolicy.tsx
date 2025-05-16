import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Refund Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Last updated: March 1, 2024
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">1. Course Refunds</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We want you to be completely satisfied with your learning experience. Our refund policy is as follows:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Full refund within 14 days of purchase if you haven't started the course</li>
            <li>Partial refund within 30 days if you've completed less than 25% of the course</li>
            <li>No refund after 30 days or if you've completed more than 25% of the course</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">2. Event Cancellations</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            For cooking events and workshops:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Full refund if cancelled 7 days before the event</li>
            <li>50% refund if cancelled 3-6 days before the event</li>
            <li>No refund for cancellations within 48 hours of the event</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">3. How to Request a Refund</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            To request a refund:
          </p>
          <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Log into your account</li>
            <li>Go to Purchase History</li>
            <li>Select the course or event</li>
            <li>Click "Request Refund"</li>
            <li>Fill out the refund request form</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">4. Processing Time</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Refunds are typically processed within 5-7 business days. The time it takes for the 
            refund to appear in your account depends on your payment method and financial institution.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">5. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you have any questions about our refund policy, please contact us at:
          </p>
          <div className="text-gray-600 dark:text-gray-400">
            <p>Email: refunds@culinarymaster.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 border-b-4 border-blue-600 pb-4">Terms and Conditions</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">Book online shop</span>, your trusted online bookstore. By using our website, you agree to abide by these terms and conditions.
          If you do not agree with any part of these terms, please refrain from using our platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Use of Website</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>Users must use our website for purchasing books and related literary content only.</li>
          <li>Any fraudulent or malicious activities will result in immediate account suspension.</li>
          <li>You are responsible for maintaining the security of your account credentials.</li>
          <li>We reserve the right to modify or discontinue services without prior notice.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Intellectual Property</h2>
        <p className="text-gray-700 leading-relaxed">
          All book descriptions, images, and content on our website are either owned by Book online shop or used with permission.
          Users are prohibited from reproducing, modifying, or distributing any materials without prior authorization.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Pricing and Payments</h2>
        <p className="text-gray-700 leading-relaxed">
          All prices listed on our platform are subject to change without notice. We strive to ensure accuracy, but errors in pricing or product descriptions may occur.
          We accept secure online payments via credit/debit cards, PayPal, and other supported payment gateways.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Shipping & Returns</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li>Orders are processed within 2-3 business days and shipped via trusted carriers.</li>
          <li>Delivery times vary based on location and shipping method chosen at checkout.</li>
          <li>Returns are accepted within 14 days of purchase if books are in their original condition.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">User Reviews & Community Content</h2>
        <p className="text-gray-700 leading-relaxed">
          Customers can post book reviews and comments, but any inappropriate or offensive content will be removed. We reserve the right to moderate all user-generated content.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          Your personal data is collected and stored securely. We do not share your information with third parties without consent.
          Please read our Privacy Policy for more details on data handling.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to update these terms at any time. Continued use of our website after updates implies acceptance of the revised terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold null mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or concerns regarding these terms, please contact us at <span className="font-semibold">support@bookhaven.com</span>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
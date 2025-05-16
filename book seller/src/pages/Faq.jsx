import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Book Online Shop - Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Welcome to Book Online Shop, your premier destination for discovering and purchasing your next favorite read. Find answers to common questions about our books, services, and policies below.</p>

      <div className="space-y-6">
        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2">How long does shipping take for book orders?</h2>
          <p className="text-gray-600">
            We typically process and ship book orders within 1-2 business days. Standard shipping takes 3-5 business days within the continental US. For international orders, delivery may take 7-21 business days depending on your location.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2">What payment methods do you accept?</h2>
          <p className="text-gray-600">
            We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and digital wallets like Apple Pay and Google Pay for your convenience and security.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2">Can I cancel or change my book order?</h2>
          <p className="text-gray-600">
            You can modify or cancel your order within 2 hours of placement if it hasn't entered the shipping process. Please contact our customer service team immediately for assistance with order changes.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2">Do you ship books internationally?</h2>
          <p className="text-gray-600">
            Yes, we ship books to most countries worldwide. Shipping costs and delivery times vary by destination. Please check our international shipping page for specific rates and restrictions.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2">What is your return policy for books?</h2>
          <p className="text-gray-600">
            We accept returns of new, unread books within 14 days of delivery. Books must be in their original condition. For damaged or incorrect items, please contact us within 7 days of receipt for a replacement or refund.
          </p>
        </section>

        <section className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold mb-2">Do you offer eBooks or digital versions?</h2>
          <p className="text-gray-600">
            Currently, we specialize in physical books only. However, we're exploring adding eBook options in the future. Join our newsletter to stay updated on new offerings.
          </p>
        </section>

        <section className="pb-6">
          <h2 className="text-xl font-semibold mb-2">How can I track my book order?</h2>
          <p className="text-gray-600">
            Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account on our website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
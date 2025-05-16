import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Refund Policy - Shade Nest</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Return Period</h2>
        <p className="text-gray-600 mb-4">
          At Shade Nest, we want you to be completely satisfied with your purchase. You have 30 days from the date of delivery to return your items for a full refund.
          Items must be unused and in their original packaging with all tags attached.
        </p>
        <p className="text-gray-600 mb-4">
          Please note that return shipping costs may apply, and original shipping charges are non-refundable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Contact our customer service team at support@shadenest.com to initiate a return.</li>
          <li>Receive a return shipping label (if applicable) and detailed return instructions.</li>
          <li>Pack the items securely in their original packaging.</li>
          <li>Ship the items back to our return center following the provided instructions.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Refund Process</h2>
        <p className="text-gray-600 mb-4">
          Once we receive and inspect your return, we will process your refund within
          5-7 business days. The refund will be issued to your original payment method.
        </p>
        <p className="text-gray-600 mb-4">
          You will receive a confirmation email once the refund has been completed. Please note that it may take additional time for your bank or credit card company to post the refund.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Personal care items</li>
          <li>Customized or personalized products, including made-to-measure blinds</li>
          <li>Downloadable software or digital content</li>
          <li>Gift cards and promotional vouchers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Damaged or Defective Items</h2>
        <p className="text-gray-600 mb-4">
          If you receive a damaged or defective item, please contact us within 7 days of delivery at support@shadenest.com with your order number and photos of the issue.
          We will work quickly to resolve the problem by offering a replacement or a full refund.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          For any questions or concerns regarding our refund policy, please reach out to us at support@shadenest.com or call our customer service line at (123) 456-7890.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;

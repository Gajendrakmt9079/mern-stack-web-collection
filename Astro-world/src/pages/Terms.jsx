import React from 'react';

export default function Terms() {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Terms & Conditions
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-300">
            By accessing and using Astro world , you acknowledge that you have read, 
            understood, and agree to be bound by these Terms & Conditions. If you do not 
            agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our services are intended for personal, non-commercial use only. You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Reproduce, duplicate, or resell any part of our services</li>
            <li>Use our services for any illegal purposes</li>
            <li>Share your account credentials with others</li>
            <li>Attempt to bypass any security measures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Premium Features</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            For premium features and consultations:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>All payments are processed securely through our payment providers</li>
            <li>Refunds are available within 14 days of purchase if unused</li>
            <li>Consultation cancellations require 24-hour notice</li>
            <li>Unused credits expire after 12 months</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Astrological readings and interpretations are for entertainment purposes only. 
            We do not guarantee specific outcomes or results. Our services should not be used 
            as a substitute for professional medical, legal, financial, or psychiatric advice. 
            All decisions made based on information provided through our services are your sole 
            responsibility.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 dark:text-gray-300">
            All content, including but not limited to text, graphics, logos, and astrological 
            interpretations, is protected by copyright and other intellectual property laws. 
            You may not use, reproduce, or distribute our content without explicit permission.
          </p>
        </section>
      </div>
    </div>
  );
}
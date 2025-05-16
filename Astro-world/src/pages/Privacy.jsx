import React from 'react';

export default function Privacy() {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Privacy Policy
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Data Collection</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Personal information (name, email address)</li>
            <li>Birth details (date, time, location) for astrological calculations</li>
            <li>Usage data and preferences</li>
            <li>Payment information (processed securely by our payment providers)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Generate accurate astrological readings</li>
            <li>Provide personalized services and recommendations</li>
            <li>Send important updates and newsletters (with your consent)</li>
            <li>Improve our services and user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We implement robust security measures to protect your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Encryption of sensitive data</li>
            <li>Regular security audits and updates</li>
            <li>Strict access controls for employee data access</li>
            <li>Secure data backups and disaster recovery procedures</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. GDPR Compliance</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Under GDPR, you have the following rights:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. CCPA Compliance</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            California residents have additional rights under CCPA:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
            <li>Right to know what personal information is collected</li>
            <li>Right to know whether personal information is sold or disclosed</li>
            <li>Right to opt-out of the sale of personal information</li>
            <li>Right to request deletion of personal information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience and analyze website traffic. 
            You can control cookie preferences through your browser settings. Essential cookies 
            required for basic website functionality cannot be disabled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            For any privacy-related questions or concerns, please contact our Data Protection 
            Officer at privacy@Astro worl.com or use our contact form.
          </p>
        </section>
      </div>
    </div>
  );
}
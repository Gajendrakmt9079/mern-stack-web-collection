import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16">
      <div className="bg-[#333333] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          {/* Key Points Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="card flex items-start space-x-4"
            >
              <Shield className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Protection</h3>
                <p className="text-gray-300">Your personal information is protected using industry-standard security measures.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card flex items-start space-x-4"
            >
              <Lock className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure Processing</h3>
                <p className="text-gray-300">All data processing follows strict security protocols and guidelines.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card flex items-start space-x-4"
            >
              <Eye className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
                <p className="text-gray-300">Clear information about how we collect and use your data.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card flex items-start space-x-4"
            >
              <FileText className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Your Rights</h3>
                <p className="text-gray-300">Control over your personal data and privacy preferences.</p>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                <p className="text-gray-300 mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Course preferences and dietary restrictions</li>
                  <li>Communications with us</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">We use the collected information for:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Processing payments and enrollments</li>
                  <li>Communicating about classes and events</li>
                  <li>Personalizing your experience</li>
                  <li>Ensuring safety and security</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">We may share your information with:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Service providers and partners</li>
                  <li>Legal authorities when required</li>
                  <li>Professional advisors</li>
                </ul>
                <p className="text-gray-300 mt-4">We do not sell your personal information to third parties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Your Rights and Choices</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Update your preferences</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>Email: privacy@culinarymaster.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: 123 Cooking Street, Culinary City, CC 12345</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
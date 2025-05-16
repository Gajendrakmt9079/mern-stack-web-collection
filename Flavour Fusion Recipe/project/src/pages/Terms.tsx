import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Terms = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
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
                <h3 className="text-lg font-semibold text-white mb-2">User Obligations</h3>
                <p className="text-gray-300">You must comply with our guidelines while using our services.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card flex items-start space-x-4"
            >
              <Lock className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Account Security</h3>
                <p className="text-gray-300">You are responsible for safeguarding your account and login credentials.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card flex items-start space-x-4"
            >
              <Eye className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h3>
                <p className="text-gray-300">We are not liable for any indirect or consequential damages.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card flex items-start space-x-4"
            >
              <FileText className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Intellectual Property</h3>
                <p className="text-gray-300">All content provided is protected under intellectual property laws.</p>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">By accessing and using our services, you agree to these terms and conditions.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Services</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">You agree to use our services in a lawful manner and in accordance with our guidelines.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">You are responsible for maintaining the confidentiality of your account and credentials.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Termination of Access</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">We reserve the right to suspend or terminate your access to our services for violations of these terms.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">Our liability is limited to the fullest extent permitted by law, excluding any indirect, punitive, or consequential damages.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property Rights</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">All content, including logos, designs, and materials, are the intellectual property of our company.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">These terms are governed by the laws of the jurisdiction where our company is based.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to Terms</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">We may modify these terms at any time, and the updated version will be effective immediately upon publication.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
              <div className="card">
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>Email: info@flavorfusionrecipes.com</li>
                  <li>Phone: (601) 982-9991</li>
                  <li>Address: 1405 Old Square Rd Jackson Mississippi United States</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

import React, { useState } from "react";
import {
  Scale,
  ShieldCheck,
  FileText,
  AlertCircle,
  BookOpen,
  HandshakeIcon,
  ChevronDown,
  ChevronUp,
  Mail,
} from "lucide-react";

export default function Terms() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Agreement to Terms",
      summary: "Essential terms for using Skymapdrones's services",
      content: `By accessing and using Skymapdrones's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.

Key points:
• These terms apply to all users and visitors
• Using our services constitutes acceptance
• Terms may be updated periodically`,
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: "User Responsibilities",
      summary: "Your obligations as a Skymapdrones user",
      content: `As a user of our services, you are responsible for:
• Providing accurate account information
• Maintaining password security
• Using the service legally and ethically
• Not sharing account credentials
• Reporting unauthorized access
• Following drone operation regulations`,
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Ordering & Payment",
      summary: "Purchase and payment policies",
      content: `When making purchases through Skymapdrones:
• All prices are in USD unless stated otherwise
• Orders are subject to availability
• Payment must be made in full before shipping
• We accept major credit cards and PayPal
• Prices may change without notice
• Tax and shipping costs are additional`,
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-blue-600" />,
      title: "Shipping & Returns",
      summary: "Delivery and return policies",
      content: `Our shipping and returns policy includes:
• Standard shipping times of 3-5 business days
• International shipping available to select countries
• 30-day return policy for unused items
• Buyer pays return shipping unless item is defective
• Refunds processed within 5-7 business days
• Some items may be non-returnable`,
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Intellectual Property",
      summary: "Copyright and trademark information",
      content: `All content on Skymapdrones is protected by:
• Copyright laws
• Trademark rights
• Intellectual property regulations

You may not:
• Copy or reproduce our content
• Use our trademarks without permission
• Modify or distribute our materials`,
    },
    {
      icon: <HandshakeIcon className="h-8 w-8 text-blue-600" />,
      title: "Warranty & Liability",
      summary: "Product warranties and liability limits",
      content: `Our warranty and liability terms:
• Products include manufacturer's warranty
• We're not liable for improper drone use
• Service interruptions may occur
• Use our services at your own risk
• Some jurisdictions may have additional rights`,
    },
  ];

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
          <img
            src="https://images.unsplash.com/photo-1524512099866-c65c6bfb2617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGRyb25lfGVufDB8fDB8fHww"
            alt="Legal Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-slide-up">
              Terms & Conditions
            </h1>
            <p
              className="text-xl opacity-90 animate-fade-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Please review our terms carefully. These guidelines ensure a safe
              and reliable experience for all Skymapdrones users.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white shadow-lg transform -translate-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-6">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => toggleSection(index)}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                {section.icon}
                <span className="mt-2 text-sm font-medium text-gray-600">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  {section.icon}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-500">{section.summary}</p>
                  </div>
                </div>
                {activeSection === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div
                className={`px-6 pb-4 transition-all duration-300 ${
                  activeSection === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="pt-4 border-t">
                  <p className="text-gray-600 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Need Clarification?</h3>
          <p className="text-gray-600 mb-6">
            Our legal team is here to help you understand our terms and
            conditions. Contact us for any questions or concerns.
          </p>
          <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <Mail className="h-5 w-5" />
            <a href="mailto:legal@Skymapdrones.com">legal@Skymapdrones.com</a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            Last updated: March 15, 2024
          </div>
        </div>
      </div>
    </div>
  );
}

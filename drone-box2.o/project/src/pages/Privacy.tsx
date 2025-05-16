import React from 'react';
import { Shield, Lock, Eye, UserCheck, Database, FileCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:
        • Name and contact information
        • Payment information
        • Shipping address
        • Account credentials
        • Communication preferences`
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "How We Protect Your Data",
      content: `We implement appropriate technical and organizational security measures to protect your personal information, including:
        • Encryption of sensitive data
        • Regular security assessments
        • Secure data storage
        • Employee training on data protection`
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "How We Use Your Information",
      content: `We use your information to:
        • Process your orders
        • Communicate with you about products
        • Improve our services
        • Send promotional materials (with consent)
        • Comply with legal obligations`
    },
    {
      icon: <UserCheck className="h-8 w-8 text-blue-600" />,
      title: "Your Rights",
      content: `You have the right to:
        • Access your personal data
        • Request data correction
        • Request data deletion
        • Withdraw consent
        • Object to processing
        • Data portability`
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Data Retention",
      content: `We retain your personal information for as long as necessary to:
        • Provide our services
        • Comply with legal obligations
        • Resolve disputes
        • Enforce agreements`
    },
    {
      icon: <FileCheck className="h-8 w-8 text-blue-600" />,
      title: "Cookie Policy",
      content: `We use cookies to:
        • Improve site functionality
        • Analyze site traffic
        • Personalize content
        • Remember your preferences
        You can control cookie settings through your browser.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Privacy Policy"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl">Your Privacy Matters to Us</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16  animate-fade-in">
          <p className="text-gray-600">
            At Skymapdrones, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 animate-fade-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-bold ml-4">{section.title}</h2>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Last Updated */}
        <div className="mt-16 text-center text-gray-500">
          <p>Last updated: March 15, 2024</p>
        </div>
      </div>
    </div>
  );
}
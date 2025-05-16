import React from 'react';

export function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to ToyGifty. By accessing and using this website, you accept and agree
              to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-600">
              Permission is granted to temporarily download one copy of the materials
              (information or software) on GiftHub's website for personal, non-commercial
              transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600">
              The materials on GiftHub's website are provided on an 'as is' basis. GiftHub
              makes no warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Limitations</h2>
            <p className="text-gray-600">
              In no event shall GiftHub or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due
              to business interruption) arising out of the use or inability to use the
              materials on GiftHub's website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600">
              The materials appearing on GiftHub's website could include technical,
              typographical, or photographic errors. GiftHub does not warrant that any of
              the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Links</h2>
            <p className="text-gray-600">
              GiftHub has not reviewed all of the sites linked to its website and is not
              responsible for the contents of any such linked site. The inclusion of any
              link does not imply endorsement by GiftHub of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
            <p className="text-gray-600">
              GiftHub may revise these terms of service for its website at any time
              without notice. By using this website, you are agreeing to be bound by the
              then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
            <p className="text-gray-600">
              These terms and conditions are governed by and construed in accordance with
              the laws and you irrevocably submit to the exclusive jurisdiction of the
              courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
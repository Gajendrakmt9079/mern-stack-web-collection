import React, { useState } from 'react';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

export default function Compatibility() {
  const [signs, setSigns] = useState({
    sign1: '',
    sign2: ''
  });

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Zodiac Compatibility
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover how your zodiac sign connects with others
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['sign1', 'sign2'].map((signKey) => (
            <div key={signKey}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {signKey === 'sign1' ? 'Select Your Sign' : 'Select her Sign'}
              </label>
              <select
                value={signs[signKey]}
                onChange={(e) => setSigns({ ...signs, [signKey]: e.target.value })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="">Choose a sign...</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign}>{sign}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {signs.sign1 && signs.sign2 && (
          <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {signs.sign1} & {signs.sign2} Compatibility
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  Love Compatibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your connection has great potential. Both signs bring unique qualities that can 
                  create a balanced and harmonious relationship.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  Friendship Compatibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You'll find natural understanding and support in this friendship. Your different 
                  perspectives can lead to growth and learning.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
                  Work Compatibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your professional relationship can be productive and innovative. Each brings 
                  complementary skills to the table.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
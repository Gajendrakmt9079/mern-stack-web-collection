import React, { useState } from 'react';
import { GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo, GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces } from 'react-icons/gi';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];
const symbols = {
  'Aries': <GiAries />,
  'Taurus': <GiTaurus />,
  'Gemini': <GiGemini />,
  'Cancer':<GiCancer /> ,
  'Leo':<GiLeo />,
  'Virgo': <GiVirgo />,
  'Libra': <GiLibra />,
  'Scorpio': <GiScorpio />,
  'Sagittarius': <GiSagittarius />,
  'Capricorn': <GiCapricorn />,
  'Aquarius': <GiAquarius />,
  'Pisces': <GiPisces />
}
export default function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = useState('');

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Daily Horoscope
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover what the stars have in store for you today
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {zodiacSigns.map((sign) => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className={`p-6 rounded-lg text-center transition-all ${selectedSign === sign
                ? 'bg-purple-400 text-white'
                : 'bg-gray-100 dark:bg-gray-800  hover:shadow-xl hover:bg-purple-50 dark:hover:bg-gray-700'
              }`}
          >
            <h1 className='text-3xl text-gray-900 dark:text-white flex justify-center items-center'>   {symbols[sign]}   </h1>
          
            <h3 className="text-sm  font-semibold mb-2">{sign}</h3>
            <p className="text-sm text-gray-900 dark:text-gray-300">
              {`${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`}
            </p>
          </button>
        ))}
      </div>

      {selectedSign && (
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {selectedSign} Daily Horoscope
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Today's cosmic energies are aligned in your favor. Your ruling planet brings positive
            influences to your personal and professional life. Take time to reflect on your goals
            and trust your intuition.
          </p>
        </div>
      )}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative right-[calc(50%-11rem)] bottom-[calc(50%-11rem)]  aspect-[1155/678] w-[36.125rem] translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
    </div>
  );
}
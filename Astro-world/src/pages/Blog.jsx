import React from 'react';

const articles = [
  {
    title: 'Understanding Planetary Retrogrades',
    excerpt: 'Learn how planetary retrogrades affect your life and what they mean for your zodiac sign.',
    date: '2025-02-15',
    category: 'Planets'
  },
  {
    title: 'The 12 Houses of Astrology',
    excerpt: 'Discover the meaning behind each astrological house and its influence on different aspects of your life.',
    date: '2025-02-12',
    category: 'Basics'
  },
  {
    title: 'Full Moon Rituals',
    excerpt: 'Harness the power of the full moon with these ancient rituals and practices.',
    date: '2025-02-10',
    category: 'Practices'
  }
];

export default function Blog() {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 ">
          Astrology Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore the latest insights and discoveries in astrology
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  {article.category}
                </span>
                <time className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.excerpt}
              </p>
              <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
                Read more →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
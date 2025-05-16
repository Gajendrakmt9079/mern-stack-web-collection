import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do I get started with the courses?",
      answer: "After signing up, you can browse our course catalog and enroll in any course that interests you. Once enrolled, you'll have immediate access to all course materials and can start learning at your own pace."
    },
    {
      question: "Are the courses self-paced?",
      answer: "Yes, all our courses are self-paced. You can access the content anytime and progress through the lessons at a speed that works for you."
    },
    {
      question: "What equipment do I need?",
      answer: "Basic kitchen equipment is required for most courses. Specific requirements are listed in each course description, but generally you'll need basic pots, pans, knives, and measuring tools."
    },
    {
      question: "How long do I have access to a course?",
      answer: "Once you purchase a course, you have lifetime access to all its content, including any future updates."
    },
    {
      question: "Can I download the course materials?",
      answer: "Yes, you can download recipes, worksheets, and other supplementary materials. Video content is available for streaming but cannot be downloaded."
    },
    {
    
      question: "Do you offer certificates?",
      answer: "Yes, upon completion of each course, you'll receive a digital certificate that you can download and share on your professional profiles."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Many of our courses offer alternative ingredients and modifications for common dietary restrictions. Each recipe clearly marks potential allergens and suggests substitutions."
    },
    {
      question: "Are there any prerequisites for advanced courses?",
      answer: "Yes, some advanced courses require completion of fundamental courses or equivalent experience. Prerequisites are clearly listed in the course descriptions."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-3 dark:text-white">{faq.question}</h2>
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-orange-50 dark:bg-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Still have questions?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We're here to help! Contact our support team and we'll get back to you as soon as possible.
        </p>
        <div className="space-y-2 text-gray-600 dark:text-gray-400">
          <p>Email: support@culinarymaster.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Hours: Monday-Friday, 9:00 AM - 6:00 PM EST</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;


        import {
          ChefHat,
          Clock,
          Star,
          Book,
          Video,
          Users,
          Award,
          Utensils,
        } from "lucide-react";
        import "react-responsive-carousel/lib/styles/carousel.min.css";
        import { Carousel } from "react-responsive-carousel";
        
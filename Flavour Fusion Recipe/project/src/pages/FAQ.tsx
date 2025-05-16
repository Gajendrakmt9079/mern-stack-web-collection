import { useState } from "react";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        question: "How do I book?",
        answer:
          "The easiest and fastest way to book a class is online. Just follow the prompts that will lead you to your favorite class. It only takes a few clicks.\n\nYou can also give us a call or book face-to-face at our cooking school or any promotional event.\n\nBy booking, you agree to be bound by our terms and conditions.",
      },
      {
        question: "What level of cooking experience do I need?",
        answer:
          "We design courses that anyone of any level can join. Beginners will receive support, while seasoned cooks will gain further insights and tips.",
      },
      {
        question: "What should I bring?",
        answer:
          "We provide all the equipment you need, but for hands-on classes, you must wear closed-toed shoes.\n\nOur terms and conditions provide more guidance.",
      },
      {
        question: "When should I arrive?",
        answer:
          "Please arrive 15 minutes before the class starts. After signing in, we'll take a few minutes to get to know each other before beginning.",
      },
    ],
  },
  {
    category: "Class Details",
    questions: [
      {
        question: "How many students do you have per class?",
        answer:
          "Hands-on classes: 6 to 16 students.\n\nDemonstration classes: 15 to 30 students.",
      },
      {
        question: "Who typically enrolls for a class?",
        answer:
          "A diverse mix of locals and travelers who share a love for food and good company!",
      },
      {
        question: "Can I come alone?",
        answer:
          "Yes! We'll pair you up with another participant for a great cooking experience.",
      },
      {
        question: "Can I cook with my friends?",
        answer:
          "Yes! In hands-on classes, you'll work in pairs. Let us know how many are joining so we can accommodate you together.",
      },
      {
        question: "Should I eat before the class?",
        answer:
          "We provide plenty of food, but since cooking takes time, it's good to have a light snack before arriving if you tend to get hungry.",
      },
    ],
  },
  {
    category: "Booking & Cancellation",
    questions: [
      {
        question: "What if the class I want is sold out?",
        answer:
          "Call or email us at info@flavorfusionrecipes.com to be added to our waitlist. We'll notify you if a spot opens up.",
      },
      {
        question: "What if I change my mind or can't make it?",
        answer:
          "Bookings are non-refundable. You can send someone in your place (18+ years old). In some cases, you may switch to another class. Check our Terms and Conditions for details.",
      },
      {
        question: "What if my class is canceled or rescheduled?",
        answer:
          "We may cancel a class due to low attendance or instructor illness. See our Terms and Conditions for more details.",
      },
    ],
  },
  {
    category: "Special Requirements",
    questions: [
      {
        question: "What if I have a food allergy or dietary restrictions?",
        answer:
          "We cannot guarantee a completely allergen-free environment. We do not provide Epi-pens. Contact us before booking if you have concerns.",
      },
      {
        question: "Is there an age requirement?",
        answer:
          "Regular classes are for adults (18+). Children (8-17) can enroll with a paying adult. Fees apply to each participant.",
      },
      {
        question: "Do you have cooking classes for children or teens?",
        answer:
          "Yes! We offer workshops and holiday camps for kids (8-12) and teens (12-16).",
      },
    ],
  },
  {
    category: "Additional Information",
    questions: [
      {
        question: "What about alcohol?",
        answer:
          "You can bring your own wine. Many classes include wine and drinks. Additional wine is available for purchase. We follow Responsible Service of Alcohol regulations.",
      },
      {
        question: "How do I get there?",
        answer:
          "Follow Blue Fish Road to The Barracks Precinct Car Park on Gunner Road. Park in the long-term parking area. We're in Building 2.",
      },
      {
        question: "What is parking like?",
        answer:
          "We're next to The Barracks Precinct Car Park. Parking is FREE. Please use long-term parking.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#333333] text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 mt-20">Frequently Asked Questions</h1>
        <p className="text-center text-gray-400 mb-8">
          Please reach us at <a href="mailto:info@flavorfusionrecipes.com" className="text-blue-400 underline">info@flavorfusionrecipes.com</a> if you cannot find an answer to your question.
        </p>

        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-600 pb-2">{section.category}</h2>
            {section.questions.map((faq, index) => {
              const questionIndex = `${sectionIndex}-${index}`;
              return (
                <div key={questionIndex} className="mt-3">
                  <button
                    className="w-full text-left p-3 bg-[#333333] shadow-lg rounded-lg hover:bg-gray-700 transition duration-200 flex justify-between items-center"
                    onClick={() => toggleFAQ(questionIndex)}
                  >
                    <span>{faq.question}</span>
                    <span>{openIndex === questionIndex ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === questionIndex && (
                    <p className="p-3 bg-[#333333] shadow-xl mt-2 rounded-md">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Contact Section */}
        
      </div>
    </div>
  );
}

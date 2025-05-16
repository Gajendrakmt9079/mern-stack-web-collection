import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How do I choose the right skincare products for my skin type?",
      answer: "To choose the right skincare products, first identify your skin type (dry, oily, combination, sensitive, or normal). Our product descriptions include recommended skin types. You can also use our website filters to narrow down products suitable for your skin type. If you're unsure, start with gentle, fragrance-free products designed for sensitive skin, or contact our customer service for personalized recommendations."
    },
    {
      question: "What is the correct order to apply skincare products?",
      answer: "The general rule is to apply products from thinnest to thickest consistency. A typical routine would be: 1) Cleanser, 2) Toner, 3) Serum, 4) Eye cream, 5) Spot treatment, 6) Moisturizer, 7) Face oil (if used), and 8) Sunscreen (during the day). Allow each product to absorb for about 30 seconds before applying the next one."
    },
    {
      question: "Are your products cruelty-free and vegan?",
      answer: "Yes, all our products are cruelty-free, meaning we never test on animals. Most of our products are also vegan, which we clearly label on each product page. Products that contain ingredients like honey or beeswax are not considered vegan, but we offer vegan alternatives for most product types."
    },
    {
      question: "How long will it take to see results from your skincare products?",
      answer: "Results vary depending on the product and your skin's condition. For hydrating products, you may notice immediate improvements in skin feel. For treatments targeting concerns like acne or hyperpigmentation, consistent use for 4-6 weeks is typically needed to see noticeable results. More significant skin concerns may take 2-3 months of regular use to show improvement."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange. Products must be at least 75% full to qualify for returns. For hygiene reasons, we cannot accept returns on opened makeup products. Please see our Refund Policy page for complete details."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can view shipping options and estimated delivery times during checkout. Please note that customers are responsible for any customs fees or import taxes that may apply to international orders."
    },
    {
      question: "How should I store my skincare products?",
      answer: "Most skincare products should be stored in a cool, dry place away from direct sunlight, which can degrade active ingredients. Some products, particularly those containing vitamin C or probiotics, may benefit from refrigeration to extend their shelf life. Always check product labels for specific storage instructions."
    },
    {
      question: "Are your products safe for use during pregnancy?",
      answer: "Many of our products are safe for use during pregnancy, but we recommend consulting with your healthcare provider before using any skincare products while pregnant or breastfeeding. Products containing retinoids, salicylic acid in high concentrations, and certain essential oils are generally not recommended during pregnancy."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6 text-3xl font-serif text-center">Frequently Asked Questions</h1>
        
        <div className="mb-8">
          <p className="text-center text-neutral-dark">
            Find answers to common questions about our products, shipping, returns, and more.
            If you can't find what you're looking for, please <a href="/contact" className="text-primary-dark hover:underline">contact us</a>.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border rounded-lg border-neutral-light overflow-hidden"
            >
              <button
                className="flex items-center justify-between w-full p-4 text-left bg-white"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-primary-dark" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-neutral-dark" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 border-t border-neutral-light bg-neutral-lightest">
                  <p className="text-neutral-dark">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="p-6 mt-8 text-center bg-primary-light rounded-lg">
          <h2 className="mb-2 text-xl font-medium">Still have questions?</h2>
          <p className="mb-4 text-neutral-dark">
            Our customer support team is here to help you with any questions or concerns.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
import React from 'react'
import { FiDroplet, FiHeart, FiShield, FiThumbsUp } from 'react-icons/fi'

 const features = [
  {
    id: 1,
    icon: <FiDroplet className="w-6 h-6" />,
    title: 'Natural Ingredients',
    description: 'All products are made with carefully selected natural ingredients.',
  },
  {
    id: 2,
    icon: <FiHeart className="w-6 h-6" />,
    title: 'Cruelty-Free',
    description: 'We never test on animals and are certified cruelty-free.',
  },
  {
    id: 3,
    icon: <FiShield className="w-6 h-6" />,
    title: 'Dermatologist Tested',
    description: 'All formulas are tested and approved by dermatologists.',
  },
  {
    id: 4,
    icon: <FiThumbsUp className="w-6 h-6" />,
    title: 'Satisfaction Guaranteed',
    description: `30-day money-back guarantee if you're not completely satisfied.`,
  },
]

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="mb-8 text-3xl font-serif text-center">Why Choose trihard</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.id} className="p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white bg-primary rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
              <p className="text-neutral-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;

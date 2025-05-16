import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBanner = ({ title, description, image, link, linkText, reverse }) => {
  return (
    <section className={`py-12 ${reverse ? 'bg-gray-300' : 'bg-gray-100 '}`}>
      <div className="container">
        <div className={`grid items-center grid-cols-1 gap-8 md:grid-cols-2 ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'order-1 md:order-2' : ''}>
            <h2 className="mb-4 text-3xl ">{title}</h2>
            <p className="mb-6 text-neutral-dark">{description}</p>
            <Link to={link} className={`btn ${reverse ? 'btn-secondary' : 'btn-primary'}`}>
              {linkText}
            </Link>
          </div>
          <div className={reverse ? 'order-2 md:order-1' : ''}>
            <img src={image} alt={title} className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryBanner
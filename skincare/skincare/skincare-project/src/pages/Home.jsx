import React from 'react'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import CategoryBanner from '../components/CategoryBanner'
import Features from '../components/Features' 
import Testimonials from '../components/Testimonials'
import products from '../data/products'
import { Testimonial } from '../components/Testymonal'
import { Testimonial2 } from '../components/testmonail2'
import Testimonial4 from '../components/Testmonil4'
import { Poolside } from '../components/Poolsideconcerns'


const Home = () => {
  // Filter bestseller products
  const bestsellers = products.filter(product => product.isBestseller).slice(0, 4)
  
  // Filter new arrivals
  const newArrivals = products.filter(product => product.isNew).slice(0, 4)

  return (
    <div>
      <Hero />
     <Poolside/>
      <ProductGrid 
        products={bestsellers} 
        title="Bestsellers" 
      />
      <Testimonial/>
      <CategoryBanner 
        title="Skincare for Every Type"
        description="Discover our range of gentle yet effective skincare products formulated for all skin types. From cleansers to serums, we have everything you need for a healthy, Triharding complexion."
        image="https://www.trihard.co/cdn/shop/files/FAQ-Home_2_1000x1000.webp?v=1726829999"
        link="/skin-care"
        linkText="Shop Skincare"
        reverse={false}
      />
      
      <Features />
      <Testimonial2/>
      <Testimonial4/>
      <CategoryBanner 
        title="Stop chlorine & saltwater damage"
        description="Our skin care range is specially formulated for children's delicate skin and hair. Gentle, tear-free formulas that we trust and love."
        image="https://www.trihard.co/cdn/shop/files/HP_variety_pack_banner_desktop.webp?v=1738141496"
        link="/skin-care"
        linkText="shop skin care"
        reverse={true}
      />
      
      <ProductGrid 
        products={newArrivals} 
        title="New Arrivals" 
      />
     
      
      <Testimonials />
    </div>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'
import { FiFilter, FiX } from 'react-icons/fi'

const HairCare = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState({
    hairType: [],
    concerns: [],
    subcategory: []
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get all hair care products
  const hairCareProducts = products.filter(product => product.category === 'Hair Care')

  // Extract unique filter options
  const hairTypes = [...new Set(hairCareProducts.flatMap(product => product.hairType || []))]
  const concerns = [...new Set(hairCareProducts.flatMap(product => product.concerns || []))]
  const subcategories = [...new Set(hairCareProducts.map(product => product.subcategory))]

  // Apply filters
  useEffect(() => {
    let result = hairCareProducts

    if (filters.hairType.length > 0) {
      result = result.filter(product => 
        product.hairType && filters.hairType.some(type => product.hairType.includes(type))
      )
    }

    if (filters.concerns.length > 0) {
      result = result.filter(product => 
        product.concerns && filters.concerns.some(concern => product.concerns.includes(concern))
      )
    }

    if (filters.subcategory.length > 0) {
      result = result.filter(product => 
        filters.subcategory.includes(product.subcategory)
      )
    }

    setFilteredProducts(result)
  }, [filters])

  // Toggle filter
  const toggleFilter = (type, value) => {
    setFilters(prev => {
      const current = [...prev[type]]
      const index = current.indexOf(value)
      
      if (index === -1) {
        current.push(value)
      } else {
        current.splice(index, 1)
      }
      
      return { ...prev, [type]: current }
    })
  }

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      hairType: [],
      concerns: [],
      subcategory: []
    })
  }

  // Toggle mobile filter visibility
  const toggleFilterMenu = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className="px-3 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-serif">Hair Care</h1>
        <p className="max-w-2xl mx-auto text-neutral-dark">
          Nourish and revitalize your hair with our premium hair care products.
          From gentle cleansing to deep conditioning, we have solutions for all hair types and concerns.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Mobile Filter Toggle */}
        <div className="flex justify-between mb-4 md:hidden">
          <button
            onClick={toggleFilterMenu}
            className="flex items-center px-4 py-2 border rounded-md border-neutral"
          >
            <FiFilter className="w-4 h-4 mr-2" />
            Filters
          </button>
          {Object.values(filters).some(arr => arr.length > 0) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-primary-dark"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Filters Sidebar */}
        <div
          className={`${
            isFilterOpen ? 'block' : 'hidden'
          } md:block w-full md:w-64 md:mr-8 mb-6 md:mb-0`}
        >
          <div className="p-4 border rounded-lg border-neutral-light">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-primary-dark"
              >
                Clear All
              </button>
              <button
                onClick={toggleFilterMenu}
                className="md:hidden"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Product Type Filter */}
            <div className="mb-6">
              <h3 className="mb-2 font-medium">Product Type</h3>
              <div className="space-y-2">
                {subcategories.map(subcategory => (
                  <label key={subcategory} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.subcategory.includes(subcategory)}
                      onChange={() => toggleFilter('subcategory', subcategory)}
                      className="mr-2"
                    />
                    {subcategory}
                  </label>
                ))}
              </div>
            </div>

            {/* Hair Type Filter */}
            <div className="mb-6">
              <h3 className="mb-2 font-medium">Hair Type</h3>
              <div className="space-y-2">
                {hairTypes.map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.hairType.includes(type)}
                      onChange={() => toggleFilter('hairType', type)}
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Concerns Filter */}
            <div>
              <h3 className="mb-2 font-medium">Concerns</h3>
              <div className="space-y-2">
                {concerns.map(concern => (
                  <label key={concern} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.concerns.includes(concern)}
                      onChange={() => toggleFilter('concerns', concern)}
                      className="mr-2"
                    />
                    {concern}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts.length > 0 ? filteredProducts : hairCareProducts} />
        </div>
      </div>
    </div>
  )
}

export default HairCare
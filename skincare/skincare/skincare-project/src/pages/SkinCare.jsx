import React, { useState, useEffect } from 'react'
import ProductGrid from '../components/ProductGrid'
import products from '../data/products'
import { FiFilter, FiX } from 'react-icons/fi'

const SkinCare = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filters, setFilters] = useState({
    skinType: [],
    concerns: [],
    subcategory: []
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Get all skin care products
  const skinCareProducts = products.filter(product => product.category === 'Skin Care')

  // Extract unique filter options
  const skinTypes = [...new Set(skinCareProducts.flatMap(product => product.skinType || []))]
  const concerns = [...new Set(skinCareProducts.flatMap(product => product.concerns || []))]
  const subcategories = [...new Set(skinCareProducts.map(product => product.subcategory))]

  // Apply filters
  useEffect(() => {
    let result = skinCareProducts

    if (filters.skinType.length > 0) {
      result = result.filter(product => 
        product.skinType && filters.skinType.some(type => product.skinType.includes(type))
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
      skinType: [],
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
        <h1 className="mb-4 text-4xl font-serif">Skin Care</h1>
        <p className="max-w-2xl mx-auto text-neutral-dark">
          Discover our range of gentle yet effective skincare products formulated for all skin types.
          From cleansers to serums, we have everything you need for a healthy, Triharding complexion.
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

            {/* Skin Type Filter */}
            <div className="mb-6">
              <h3 className="mb-2 font-medium">Skin Type</h3>
              <div className="space-y-2">
                {skinTypes.map(type => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.skinType.includes(type)}
                      onChange={() => toggleFilter('skinType', type)}
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
          <ProductGrid products={filteredProducts.length > 0 ? filteredProducts : skinCareProducts} />
        </div>
      </div>
    </div>
  )
}

export default SkinCare
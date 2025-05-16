import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-neutral-lightest border-t border-neutral-light">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo.png" alt="trihard Logo" className="w-36 mr-2" />
            
            </Link>
            <p className="mb-4 text-neutral-dark">
              Premium skincare products made with natural ingredients for all skin types.
            </p>
            {/* <div className="flex space-x-4">
              <a href="" className="text-neutral-dark hover:text-primary-dark" aria-label="Facebook">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="" className="text-neutral-dark hover:text-primary-dark" aria-label="Instagram">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="" className="text-neutral-dark hover:text-primary-dark" aria-label="Twitter">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="" className="text-neutral-dark hover:text-primary-dark" aria-label="YouTube">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/skin-care" className="text-neutral-dark hover:text-primary-dark">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link to="/kids-care" className="text-neutral-dark hover:text-primary-dark">
                  Kids Care
                </Link>
              </li>
              <li>
                <Link to="/hair-care" className="text-neutral-dark hover:text-primary-dark">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-neutral-dark hover:text-primary-dark">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-neutral-dark hover:text-primary-dark">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-neutral-dark hover:text-primary-dark">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-dark hover:text-primary-dark">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-neutral-dark hover:text-primary-dark">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/policy " className="text-neutral-dark hover:text-primary-dark">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-neutral-dark hover:text-primary-dark">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Address</h3>
            <address className="not-italic">
              <p className="mb-2 text-neutral-dark">214 Sunnyholt Rd ,	Sydney ,New South Wales 2148 Australia
               
              </p>
            <strong>phone:(01405 861662)</strong>
              <hr />
              <p className="mb-2 text-neutral-dark">Carlton ,Goole ,North Humberside , DN14 9LZ ,United Kingdom</p>
              <strong>phone:(01405 861662)</strong>
              <hr />
              <p className="mb-2 text-neutral-dark">3840 E 104th Ave ,Thornton ,Colorado ,80233 ,United States</p>
              <strong>phone:((303) 255-0596)</strong>
              <hr />
              
               
             
             
            </address>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-neutral-light">
          <p className="text-neutral-dark">
            &copy; {new Date().getFullYear()} trihard Skincare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
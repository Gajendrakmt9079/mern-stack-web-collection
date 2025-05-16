import React, { JSX } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#333333] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src="./logo.png" alt="" width={200} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/classes"
                  className="text-gray-400 hover:text-orange-400"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-orange-400"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-orange-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>1405 Old Square Rd Jackson Mississippi United States</li>
              <li>42 Penshurst St Sydney New South Wales Australia</li>
              <li>16 Onley St Norwich Norfolk United Kingdom</li>
              <p> info@flavorfusionrecipes.com</p>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
            <div className="flex ">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-orange-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-orange-400"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-gray-400 hover:text-orange-400"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 flex justify-between items-center">
          <p>&copy; 2025 Flavour Fusion Recipe. All rights reserved.</p>
          <div className="flex justify-between gap-3">
            <Link to="/terms">Terms & Conditions</Link>
            <p> |</p>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

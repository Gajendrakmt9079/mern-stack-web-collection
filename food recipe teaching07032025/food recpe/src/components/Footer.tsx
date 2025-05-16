import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4"><img src="./whitelogo.png" className="w-36" alt="" /></h3>
            <p className="text-gray-400">
              Empowering home chefs with professional culinary education and
              experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Policy Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-gray-400 hover:text-white"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Qucik Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-white"
                >
               events
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-white">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
              Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Bussniss Information</h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                2454 N Limestone St Springfield Ohio 45503 United States
                <br /> (937) 390-0470 <hr />
              </li>
              <li>
                2/5 Commercial Dr Melbourne Victoria 3175 Australia
                <br /> (03) 9706 5510 <hr />
              </li>
              <li>
                Breck Rd Wallasey Merseyside CH44 3HS United Kingdom
                <br />
                0151 631 4400 <hr />
              </li>

              <li>Email: info@culinarymaster.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CulinaryMaster. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

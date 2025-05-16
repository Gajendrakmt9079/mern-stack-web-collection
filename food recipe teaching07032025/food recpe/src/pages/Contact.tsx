import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions about our courses or need more information? We're here
          to help! Reach out to us using any of the methods below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex  text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 mr-3" />
                <span> (937) 390-0470   <br /> <hr /> (03) 9706 5510   <br /> <hr />
                0151 631 4400 </span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@culinarymaster.com</span>
              </div>
              <div className="flex  text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                <ul className="text-gray-600 space-y-2">
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
                </ul>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock className="w-5 h-5 mr-3" />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Visit Us
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645564756246!5m2!1sen!2sus"
                className="w-full h-64 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Message subject"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

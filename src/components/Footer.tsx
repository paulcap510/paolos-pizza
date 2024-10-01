import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4 font-rubik">Contact Us</h4>
          <p>123 Pizza St, Food City, FC 45678</p>
          <p>Phone: (123) 456-7890</p>
          <p>
            Email:{' '}
            <a
              href="mailto:info@paolospizza.com"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              info@paolospizza.com
            </a>
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4 font-rubik">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#reservations"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Reservations
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4 font-rubik">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-transform duration-500 transform hover:scale-125 hover:rotate-12"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-transform duration-500 transform hover:scale-125 hover:rotate-12"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-transform duration-500 transform hover:scale-125 hover:rotate-12"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-200 text-sm mt-8">
        &copy; {new Date().getFullYear()} Paolo's Pizza and Ristorante. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

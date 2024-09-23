import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-red-600 to-orange-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center group">
          <img
            src="/pizza-logo.png"
            alt="Paolo's Pizza Logo"
            className="h-12 w-12 mr-3 rounded-full border-2 border-white transition-transform duration-300 group-hover:rotate-90"
          />
          <span className="text-white text-2xl font-semibold font-rubik transition-colors duration-300 group-hover:text-yellow-300 group-hover:opacity-90">
            Paolo's Pizza and Ristorante
          </span>
        </a>

        <ul className="flex space-x-8 text-lg text-white font-rubik">
          <li>
            <a
              href="#home"
              className="relative hover:bg-orange-700 transition-colors duration-300 px-2 py-1 rounded"
            >
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="relative hover:bg-orange-700 transition-colors duration-300 px-2 py-1 rounded"
            >
              Menu
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#reservations"
              className="relative hover:bg-orange-700 transition-colors duration-300 px-2 py-1 rounded"
            >
              Reservations
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative hover:bg-orange-700 transition-colors duration-300 px-2 py-1 rounded"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative hover:bg-orange-700 transition-colors duration-300 px-2 py-1 rounded"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

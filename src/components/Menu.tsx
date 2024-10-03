import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12 font-rubik">
          FEATURED MENU
        </h2>

        <div className="grid gap-16">
          {/* Appetizers Section */}
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-4 font-rubik">
              Appetizers
            </h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Bruschetta</h4>
                  <span className="text-red-600 font-semibold">$8.00</span>
                </div>
                <p className="text-gray-600">
                  Grilled bread with tomato, garlic, and basil.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Garlic Bread</h4>
                  <span className="text-red-600 font-semibold">$5.00</span>
                </div>
                <p className="text-gray-600">
                  Freshly baked bread with garlic butter.
                </p>
              </li>
            </ul>
          </div>

          {/* Main Courses Section */}
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-4 font-rubik">
              Main Courses
            </h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Margherita Pizza</h4>
                  <span className="text-red-600 font-semibold">$12.00</span>
                </div>
                <p className="text-gray-600">
                  Classic pizza with tomato sauce, mozzarella, and basil.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Pepperoni Pizza</h4>
                  <span className="text-red-600 font-semibold">$14.00</span>
                </div>
                <p className="text-gray-600">
                  Mozzarella cheese and spicy pepperoni slices.
                </p>
              </li>
            </ul>
          </div>

          {/* Desserts Section */}
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-4 font-rubik">
              Desserts
            </h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Tiramisu</h4>
                  <span className="text-red-600 font-semibold">$7.00</span>
                </div>
                <p className="text-gray-600">
                  Classic Italian dessert with layers of coffee-soaked
                  ladyfingers and mascarpone cream.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Gelato</h4>
                  <span className="text-red-600 font-semibold">$6.00</span>
                </div>
                <p className="text-gray-600">
                  Traditional Italian ice cream, available in various flavors.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* See Full Menu Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/full-menu"
            className="bg-red-600 text-white font-semibold py-3 px-8 text-lg rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
          >
            See Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;

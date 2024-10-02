import React from 'react';

const FullMenu: React.FC = () => {
  return (
    <section id="full-menu" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12 font-rubik">
          Full Menu
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
                  <h4 className="text-lg font-bold">Stuffed Mushrooms</h4>
                  <span className="text-red-600 font-semibold">$10.00</span>
                </div>
                <p className="text-gray-600">
                  Mushrooms stuffed with cheese and herbs.
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
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Caprese Salad</h4>
                  <span className="text-red-600 font-semibold">$9.00</span>
                </div>
                <p className="text-gray-600">
                  Fresh mozzarella, tomatoes, and basil.
                </p>
              </li>
            </ul>
          </div>

          {/* Pizzas Section */}
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-4 font-rubik">
              Pizzas
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
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Vegetarian Pizza</h4>
                  <span className="text-red-600 font-semibold">$13.00</span>
                </div>
                <p className="text-gray-600">
                  Tomato sauce, mozzarella, and assorted veggies.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Four Cheese Pizza</h4>
                  <span className="text-red-600 font-semibold">$15.00</span>
                </div>
                <p className="text-gray-600">
                  Mozzarella, parmesan, gorgonzola, and ricotta.
                </p>
              </li>
            </ul>
          </div>

          {/* Pastas Section */}
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-4 font-rubik">
              Pastas
            </h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Spaghetti Carbonara</h4>
                  <span className="text-red-600 font-semibold">$16.00</span>
                </div>
                <p className="text-gray-600">
                  Pasta with egg, cheese, pancetta, and pepper.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Fettuccine Alfredo</h4>
                  <span className="text-red-600 font-semibold">$15.00</span>
                </div>
                <p className="text-gray-600">
                  Creamy Alfredo sauce with fettuccine pasta.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Penne Arrabbiata</h4>
                  <span className="text-red-600 font-semibold">$14.00</span>
                </div>
                <p className="text-gray-600">
                  Pasta with spicy tomato sauce and garlic.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Lasagna</h4>
                  <span className="text-red-600 font-semibold">$17.00</span>
                </div>
                <p className="text-gray-600">
                  Layers of pasta, cheese, and meat sauce.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Rigatoni Bolognese</h4>
                  <span className="text-red-600 font-semibold">$18.00</span>
                </div>
                <p className="text-gray-600">
                  Pasta with slow-cooked beef and tomato sauce.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Pesto Linguine</h4>
                  <span className="text-red-600 font-semibold">$16.00</span>
                </div>
                <p className="text-gray-600">
                  Fresh basil pesto with garlic, olive oil, and parmesan.
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
                  Coffee-soaked ladyfingers with mascarpone cream.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Gelato</h4>
                  <span className="text-red-600 font-semibold">$6.00</span>
                </div>
                <p className="text-gray-600">
                  Italian ice cream in various flavors.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Panna Cotta</h4>
                  <span className="text-red-600 font-semibold">$8.00</span>
                </div>
                <p className="text-gray-600">Italian vanilla cream dessert.</p>
              </li>
            </ul>
          </div>

          {/* Drinks Section */}
          <div>
            <h3 className="text-3xl font-semibold text-orange-500 mb-4 font-rubik">
              Drinks
            </h3>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Espresso</h4>
                  <span className="text-red-600 font-semibold">$4.00</span>
                </div>
                <p className="text-gray-600">Rich and bold Italian espresso.</p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Cappuccino</h4>
                  <span className="text-red-600 font-semibold">$5.00</span>
                </div>
                <p className="text-gray-600">
                  Espresso with steamed milk and foam.
                </p>
              </li>
              <li className="bg-white p-4 rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold">Italian Soda</h4>
                  <span className="text-red-600 font-semibold">$4.00</span>
                </div>
                <p className="text-gray-600">
                  Sparkling water with fruit syrup.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullMenu;

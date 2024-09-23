import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/man.jpg"
            alt="Family Restaurant"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl font-bold text-red-600 mb-6 font-rubik">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-rubik">
            Paolo's Pizza and Ristorante has been a family-owned and operated
            restaurant for over 50 years. Our recipes have been passed down
            through generations, bringing you the best of traditional Italian
            cuisine.
          </p>
          <p className="text-lg text-gray-700 mb-6 font-rubik">
            From our humble beginnings as a small pizzeria, we have grown into a
            beloved local favorite, known for our hand-tossed pizzas, fresh
            ingredients, and warm, welcoming atmosphere. At Paolo's, every dish
            is made with love, just like it has been since the very beginning.
          </p>
          <p className="text-lg text-gray-700 font-rubik">
            Join us for a meal and become a part of our extended family. We
            can't wait to serve you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

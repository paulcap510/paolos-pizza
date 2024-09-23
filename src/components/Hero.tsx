import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url('/pic1.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{' '}
      <h1 className="relative text-white text-5xl font-bold p-4 rounded font-rubik mb-6">
        Paolo's Pizza and Ristorante
      </h1>
      <div className="relative flex space-x-6">
        {' '}
        <a
          href="#menu"
          className="bg-red-600 text-white font-semibold py-3 px-8 text-lg rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
        >
          View Menu
        </a>
        <a
          href="#reservations"
          className="bg-orange-500 text-white font-semibold py-3 px-8 text-lg rounded-full hover:bg-orange-600 transform hover:scale-105 transition-all duration-300"
        >
          Reserve a Table
        </a>
      </div>
    </section>
  );
};

export default Hero;

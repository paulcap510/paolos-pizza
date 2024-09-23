import React from 'react';

const Reservations: React.FC = () => {
  return (
    <section
      id="reservations"
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url('/pasta.jpg')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>{' '}
      <div className="relative z-10 text-center">
        <h2 className="text-white text-4xl font-bold font-rubik mb-8">
          Make a Reservation
        </h2>

        <form className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-left font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-left font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 text-left font-semibold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-gray-700 text-left font-semibold mb-2"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;

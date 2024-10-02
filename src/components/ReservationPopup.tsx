import React from 'react';

const ReservationButton: React.FC = () => {
  return (
    <button
      onClick={() => {
        const section = document.getElementById('reservations');
        section?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="fixed bottom-10 right-4 bg-red-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
      style={{ zIndex: 1000 }}
    >
      Make a Reservation
    </button>
  );
};

export default ReservationButton;

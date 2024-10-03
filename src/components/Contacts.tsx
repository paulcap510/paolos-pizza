import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  // State to control the modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent actual form submission
    setModalVisible(true); // Show the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false); // Hide the modal
  };

  return (
    <section id="contact" className="py-12 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center font-rubik">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
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

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
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

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Subject"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
              rows={5}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* Modal */}
        {isModalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Message Sent!
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been successfully sent.
              </p>
              <button
                onClick={closeModal}
                className="bg-red-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;

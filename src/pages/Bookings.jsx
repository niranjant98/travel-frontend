import React from "react";

const Bookings = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
          Book Your Dream Adventure 🌍
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Explore handpicked destinations and experience unforgettable journeys
          with Charan-Adventures. Start your next adventure today!
        </p>
      </div>

      {/* Featured Packages */}
      <div className="grid md:grid-cols-3 gap-10 mb-16">
        {/* Paris */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"
            alt="Paris"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Paris, France 🇫🇷</h3>
            <p className="text-gray-600 mb-4">
              Experience the city of lights, romance, and art. Visit the Eiffel Tower and enjoy fine dining by the Seine.
            </p>
            <p className="font-semibold text-blue-600">Starting from ₹80000</p>
          </div>
        </div>

        {/* Bali */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
            alt="Bali"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Bali, Indonesia 🌴</h3>
            <p className="text-gray-600 mb-4">
              Relax on sun-kissed beaches, explore lush forests, and enjoy a perfect tropical retreat.
            </p>
            <p className="font-semibold text-blue-600">Starting from ₹55000</p>
          </div>
        </div>

        {/* New York */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800"
            alt="New York"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">New York, USA 🗽</h3>
            <p className="text-gray-600 mb-4">
              Feel the pulse of the Big Apple. From Times Square to Central Park, the city never sleeps!
            </p>
            <p className="font-semibold text-blue-600">Starting from ₹95000</p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Enquire or Book Now 🧾
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Destination
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select a destination</option>
              <option>Paris, France</option>
              <option>Bali, Indonesia</option>
              <option>New York, USA</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message (optional)
            </label>
            <textarea
              placeholder="Tell us your preferences..."
              className="w-full border border-gray-300 rounded-lg p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Bookings;

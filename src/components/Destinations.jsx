import React from "react";
import baliImg from "../assets/images/bali.avif";
import parisImg from "../assets/images/paris.avif";
import newYorkImg from "../assets/images/newYork.avif";

const Destinations = () => {
  const places = [
    {
      name: "Bali, Indonesia 🌴",
      image: baliImg,
      description:
        "A tropical paradise famous for its beaches, temples, and vibrant culture.",
    },
    {
      name: "Paris, France 🗼",
      image: parisImg,
      description:
        "The City of Lights — home to art, romance, and the iconic Eiffel Tower.",
    },
    {
      name: "New York, USA 🗽",
      image: newYorkImg,
      description:
        "The city that never sleeps, filled with energy, culture, and skyscrapers.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="destinations">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">
          Popular Destinations 🌍
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((place, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-600">{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;

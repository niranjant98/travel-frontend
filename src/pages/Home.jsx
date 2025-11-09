import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import baliImg from "../assets/images/bali.avif";
import parisImg from "../assets/images/paris.avif";
import newYorkImg from "../assets/images/newYork.avif";
import kathmanduImg from "../assets/images/kathmandu.jpg";
import nepalHillsImg from "../assets/images/nepalhills.jpg";
import manasluImg from "../assets/images/manaslu.jpg";
const Home = () => {
  const trips = [
    {
      id: 1,
      slug: "bali",
      title: "Explore Bali",
      image: baliImg,
      duration: "7 Days / 6 Nights",
      price: "₹10,000",
      description: "Discover temples, beaches & tropical vibes.",
    },
    {
      id: 2,
      slug: "paris",
      title: "Paris Highlights",
      image: parisImg,
      duration: "5 Days / 4 Nights",
      price: "₹20,000",
      description: "Romantic escapes and stunning architecture.",
    },
    {
      id: 3,
      slug: "new-york",
      title: "New York ",
      image: newYorkImg,
      duration: "6 Days / 5 Nights",
      price: "₹25,000",
      description: "City lights, landmarks & endless energy.",
    },
    {
      id: 4,
      slug: "kathmandu",
      title: "Kathmandu Adventure",
      image: kathmanduImg,
      duration: "4 Days / 3 Nights",
      price: "₹12,000",
      description: "Explore Nepal’s vibrant capital, culture, and history.",
    },
    {
      id: 5,
      slug: "nepal-hills",
      title: "Nepal Hills Expedition",
      image: nepalHillsImg,
      duration: "10 Days / 9 Nights",
      price: "₹45,000",
      description: "Witness scenic hills, local traditions, and serene views.",
    },
    {
      id: 6,
      slug: "manaslu-trek",
      title: "Manaslu Circuit Trek",
      image: manasluImg,
      duration: "14 Days / 13 Nights",
      price: "₹1,50,000",
      description: "Trek around Mt. Manaslu with breathtaking Himalayan scenery.",
    },
  ];

  return (
    <div>
      <Hero />

      {/* FEATURED TRIPS SECTION */}
      <section id="FeaturedTrips" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            🌍 Featured Trips
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {trip.description}
                  </p>
                  <p className="text-gray-500 mt-3 text-sm">
                    ⏱ {trip.duration}
                  </p>
                  <p className="text-blue-600 font-semibold mt-1">
                    💰 {trip.price}
                  </p>
                  <Link
                    to={`/trips/${trip.slug}`}
                    className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

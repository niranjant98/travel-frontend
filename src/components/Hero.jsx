import React from "react";
import heroImg from "../assets/images/hero.jpeg";

const Hero = () => {
  const scrollToFeaturedTrips = () => {
    const section = document.getElementById("FeaturedTrips");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center bg-cover bg-center min-h-[80vh] sm:min-h-[90vh] px-4"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl mx-auto py-12 sm:py-20">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 leading-tight drop-shadow-lg">
          Discover Your Next Adventure 🌍
        </h1>

        <p className="text-sm sm:text-lg mb-6 font-light text-gray-200 leading-relaxed px-2 sm:px-0">
          Explore breathtaking destinations, unique experiences, and unforgettable memories — all
          with <span className="font-semibold text-blue-300">TravelBuddy</span>.
        </p>

        <button
          onClick={scrollToFeaturedTrips}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base"
        >
          Explore Now ✈️
        </button>
      </div>
    </section>
  );
};

export default Hero;

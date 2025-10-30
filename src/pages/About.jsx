import React from "react";
import travelImg from "../assets/images/photo-1501785888041-af3ef285b470.avif";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-20 px-6 md:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
          About Charan-Adventures 🌍
        </h1>
        <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-700">
          At <span className="font-semibold text-blue-600">Charan-Adventures</span>, we believe that travel
          is more than just visiting new places — it’s about creating unforgettable stories, 
          meeting new people, and discovering yourself along the way.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
           src={travelImg}
            alt="Travel"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-5">
              To inspire and empower people to explore the world responsibly and 
              sustainably, while making travel planning simple and enjoyable.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Curated travel guides from real explorers 🌏</li>
              <li>Affordable deals and personalized recommendations 💸</li>
              <li>Trusted by thousands of happy travelers ❤️</li>
              <li>24/7 customer support during your adventures ✈️</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2025 by a team of passionate travelers, Charan-Adventures started with a simple idea — 
            to make discovering the world easier for everyone. From breathtaking landscapes 
            to hidden gems, we’ve helped travelers plan journeys that turn into lifelong memories.  
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import manasluHero from "../assets/images/manaslu.jpg";
import kathmanduHero from "../assets/images/kathmandu.jpg";
import nepalHillsHero from "../assets/images/nepalhills.jpg";
import baliImg from "../assets/images/bali.avif";
import parisImg from "../assets/images/paris.avif";
import newYorkImg from "../assets/images/newYork.avif";
import ManasuluMap from "../assets/images/ManasuluMap.webp";

const trips = {
  bali: {
    title: "Explore Bali",
    image: baliImg,
    duration: "7 Days / 6 Nights",
    difficulty: "Easy",
    price: "₹10,000",
    overview: [
      { icon: "📅", label: "Duration", value: "7 Days" },
      { icon: "📍", label: "Destination", value: "Indonesia" },
      { icon: "🥾", label: "Trip Grade", value: "Easy" },
      { icon: "🏨", label: "Stay", value: "Beach Resort" },
      { icon: "🍽️", label: "Meals", value: "Breakfast & Dinner" },
      { icon: "🌴", label: "Best Season", value: "April - October" },
    ],
    highlights: [
      "Visit stunning temples like Tanah Lot and Uluwatu.",
      "Enjoy tropical beaches and water sports.",
      "Explore Ubud’s rice terraces and monkey forest.",
      "Balinese culture, food, and spa relaxation.",
      "Vibrant nightlife in Seminyak and Kuta.",
    ],
    itinerary: [
      { title: "Day 1: Arrival in Bali", desc: "Arrive at Ngurah Rai Airport, transfer to resort, relax at the beach." },
      { title: "Day 2: Ubud Tour", desc: "Visit Tegallalang Rice Terrace, Monkey Forest, and local craft markets." },
      { title: "Day 3: Tanah Lot Temple", desc: "Explore Bali’s most famous sea temple and enjoy a scenic sunset." },
      { title: "Day 4: Beach Activities", desc: "Go surfing, snorkeling, or parasailing at Nusa Dua." },
      { title: "Day 5: Cultural Tour", desc: "Watch Kecak dance show and taste Balinese cuisine." },
      { title: "Day 6: Shopping Day", desc: "Free time for souvenirs and spa treatment." },
      { title: "Day 7: Departure", desc: "Transfer to airport for flight back home." },
    ],
  },

  paris: {
    title: "Paris Highlights",
    image: parisImg,
    duration: "5 Days / 4 Nights",
    difficulty: "Easy",
    price: "₹20,000",
    overview: [
      { icon: "📅", label: "Duration", value: "5 Days" },
      { icon: "📍", label: "Destination", value: "France" },
      { icon: "🥾", label: "Trip Grade", value: "Leisure" },
      { icon: "🏨", label: "Stay", value: "3★ Hotel" },
      { icon: "🍽️", label: "Meals", value: "Breakfast Included" },
      { icon: "🌸", label: "Best Season", value: "April - June, Sept - Oct" },
    ],
    highlights: [
      "Eiffel Tower visit and Seine River cruise.",
      "Explore Louvre Museum and Notre Dame.",
      "Evening walk at Montmartre and Sacré-Cœur.",
      "French pastries and café experiences.",
      "Optional day trip to Versailles Palace.",
    ],
    itinerary: [
      { title: "Day 1: Arrival & Seine Cruise", desc: "Arrive in Paris, check-in, and enjoy evening cruise on the Seine River." },
      { title: "Day 2: Louvre & Eiffel Tower", desc: "Visit world’s largest museum and climb the Eiffel Tower for city views." },
      { title: "Day 3: Montmartre & Champs-Élysées", desc: "Walk through artistic streets and do some boutique shopping." },
      { title: "Day 4: Versailles Excursion", desc: "Optional half-day trip to the Palace of Versailles." },
      { title: "Day 5: Departure", desc: "Free morning, then transfer to airport." },
    ],
  },

  "new-york": {
    title: "New York Getaway",
    image: newYorkImg,
    duration: "6 Days / 5 Nights",
    difficulty: "Easy",
    price: "₹25,000",
    overview: [
      { icon: "📅", label: "Duration", value: "6 Days" },
      { icon: "📍", label: "Destination", value: "USA" },
      { icon: "🏙️", label: "Trip Type", value: "City Adventure" },
      { icon: "🏨", label: "Stay", value: "Downtown Hotel" },
      { icon: "🍽️", label: "Meals", value: "Breakfast Included" },
      { icon: "🌆", label: "Best Season", value: "March - June, Sept - Nov" },
    ],
    highlights: [
      "Statue of Liberty & Ellis Island ferry ride.",
      "Times Square, Broadway & Central Park walk.",
      "Empire State Building & skyline views.",
      "Brooklyn Bridge & DUMBO exploration.",
      "Shopping along Fifth Avenue & SoHo.",
    ],
    itinerary: [
      { title: "Day 1: Arrival & Times Square", desc: "Arrive and stroll around Times Square for lights and street performances." },
      { title: "Day 2: Statue of Liberty", desc: "Take the ferry to Liberty Island and visit Wall Street & 9/11 Memorial." },
      { title: "Day 3: Central Park & Museums", desc: "Visit Central Park, MET, or Museum of Natural History." },
      { title: "Day 4: Brooklyn Bridge", desc: "Cross the bridge and enjoy pizza at Brooklyn’s local spots." },
      { title: "Day 5: Broadway & Shopping", desc: "Spend your evening watching a Broadway musical." },
      { title: "Day 6: Departure", desc: "Check out and depart for airport." },
    ],
  },
    kathmandu: {
    title: "Kathmandu Adventure",
    image: kathmanduHero,
    duration: "4 Days / 3 Nights",
    difficulty: "Easy",
    price: "₹12,000",
    overview: [
      { icon: "📅", label: "Duration", value: "4 Days / 3 Nights" },
      { icon: "📍", label: "Destination", value: "Kathmandu, Nepal" },
      { icon: "🥾", label: "Trip Grade", value: "Easy" },
      { icon: "🏨", label: "Accommodation", value: "3★ Hotel in Thamel" },
      { icon: "🍽️", label: "Meals", value: "Breakfast Included" },
      { icon: "🌤️", label: "Best Season", value: "All Year Round" },
    ],
    highlights: [
      "Explore UNESCO World Heritage Sites like Pashupatinath and Boudhanath.",
      "Visit the ancient royal squares of Kathmandu, Patan, and Bhaktapur.",
      "Enjoy panoramic views from Swayambhunath (Monkey Temple).",
      "Stroll through Thamel’s colorful streets full of local shops and cafes.",
      "Experience authentic Nepali cuisine and traditional dance performances.",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival in Kathmandu",
        desc: "Arrive at Tribhuvan International Airport and transfer to your hotel in Thamel. Take a rest and explore nearby markets in the evening.",
      },
      {
        title: "Day 2: Full-Day Kathmandu Sightseeing",
        desc: "Visit Pashupatinath Temple, Boudhanath Stupa, and Swayambhunath (Monkey Temple). Explore Kathmandu Durbar Square and enjoy local Newari lunch.",
      },
      {
        title: "Day 3: Patan and Bhaktapur Heritage Tour",
        desc: "Explore Patan Durbar Square and Bhaktapur, famous for pottery, architecture, and culture. Return to Kathmandu in the evening for shopping and leisure.",
      },
      {
        title: "Day 4: Departure",
        desc: "Transfer to the airport for your onward flight or extend your stay for more adventures in Nepal.",
      },
    ],
  },

  "nepal-hills": {
    title: "Nepal Hills Expedition",
    image: nepalHillsHero,
    duration: "10 Days / 9 Nights",
    difficulty: "Moderate",
    price: "₹45,000",
    overview: [
      { icon: "📅", label: "Duration", value: "10 Days / 9 Nights" },
      { icon: "📍", label: "Destination", value: "Pokhara, Nepal" },
      { icon: "🥾", label: "Trip Type", value: "Hill Trekking & Culture" },
      { icon: "🏨", label: "Accommodation", value: "Tea House or Lodge" },
      { icon: "🍽️", label: "Meals", value: "Breakfast, Lunch & Dinner" },
      { icon: "🌄", label: "Best Season", value: "Mar - May & Sep - Nov" },
    ],
    highlights: [
      "Scenic trekking through terraced fields, green valleys, and charming hill villages.",
      "Stay in cozy tea houses and enjoy local Nepali hospitality.",
      "Capture stunning views of Annapurna and Dhaulagiri ranges.",
      "Cultural immersion with Gurung and Magar communities.",
      "Relax by Phewa Lake in Pokhara after a rewarding trek.",
    ],
    itinerary: [
      {
        title: "Day 1: Arrival in Pokhara",
        desc: "Arrive in Pokhara and enjoy a relaxing evening by the lakeside. Briefing with your trek guide.",
      },
      {
        title: "Day 2: Drive to Nayapul & Trek to Tikhedhunga",
        desc: "A scenic 2-hour drive followed by a gentle trek through lush farmland and river crossings.",
      },
      {
        title: "Day 3: Trek to Ghorepani (2,874m)",
        desc: "Climb stone steps to Ghorepani village with beautiful rhododendron forests and mountain views.",
      },
      {
        title: "Day 4: Poon Hill Sunrise & Trek to Tadapani",
        desc: "Early morning hike to Poon Hill (3,210m) for sunrise over Annapurna and Dhaulagiri. Trek to Tadapani.",
      },
      {
        title: "Day 5: Trek to Ghandruk Village",
        desc: "Walk down through oak forests to the charming Gurung village of Ghandruk, rich in culture and tradition.",
      },
      {
        title: "Day 6: Trek to Landruk and Dhampus",
        desc: "Descend and cross a suspension bridge to reach Landruk and then Dhampus for overnight stay.",
      },
      {
        title: "Day 7: Trek to Phedi & Drive Back to Pokhara",
        desc: "Short downhill trek to Phedi and drive back to Pokhara. Enjoy boating on Phewa Lake.",
      },
      {
        title: "Day 8: Explore Pokhara",
        desc: "Visit Davis Falls, Gupteshwor Cave, and Peace Pagoda. Free evening near the lake.",
      },
      {
        title: "Day 9: Drive Back to Kathmandu",
        desc: "Scenic drive or short flight back to Kathmandu and leisure time for souvenir shopping.",
      },
      {
        title: "Day 10: Departure",
        desc: "Transfer to the airport for departure or extend your stay in Nepal.",
      },
    ],
  },


  "manaslu-trek": {
    title: "Manaslu Circuit Trek",
    image: manasluHero,
    duration: "14 Days / 13 Nights",
    difficulty: "Challenging",
    price: "₹1,50,000",
    overview: [
      { icon: "📅", label: "Duration", value: "14 Days" },
      { icon: "📍", label: "Destination", value: "Nepal" },
      { icon: "🥾", label: "Trip Grade", value: "Challenging" },
      { icon: "🏨", label: "Accommodation", value: "Tea House or Lodge" },
      { icon: "🍽️", label: "Meals", value: "Full Board" },
      { icon: "⛰️", label: "Max Altitude", value: "Larkya La Pass (5106m)" },
      { icon: "🌤️", label: "Best Season", value: "Mar - May, Sep - Nov" },
    ],
    highlights: [
      "Trek around Mt. Manaslu (8,163m) with spectacular Himalayan views.",
      "Cross Larkya La Pass, one of Nepal’s most stunning high passes.",
      "Cultural immersion in remote Tibetan-style villages.",
      "Visit ancient monasteries, lakes, and glacial valleys.",
      "Enjoy off-the-beaten-path trekking with fewer crowds.",
    ],
    itinerary: [
      { title: "Day 1: Arrival in Kathmandu (1400m)", desc: "At Kathmandu airport's arrival terminal, a representative from Green Valley Nepal will be waiting for you. The agent will greet you and take you to your Kathmandu hotel. You can either take a rest or meet us at our office and know the detail about Manaslu Circuit Trek Itinerary." },
      { title: "Day 2: Briefing & Permit Preparation", desc: "The hike leader/guide will meet you at the hotel after breakfast. The purpose of this pre-trip meeting is to provide a Manaslu Circuit Trek overview and other important information. Please bring a copy of your travel insurance policy as well as your passport and three passport-sized photos. You may utilize your free time to relax or go shopping for last-minute items." },
      { title: "Day 3: Drive to Machha Khola (890m)", desc: "You will board a public bus to Machha Khola after breakfast in Kathmandu, passing through Arughat and Soti Khola to officially begin your Manaslu Circuit Trekking Itinerary. It will be a lengthy journey, with the first part of the journey being smooth over a blacktop major roadway to Arughat, and the second half of the journey being challenging from Arughat. As you go over the rocky road to Maccha Khola, be ready to bounce your body with some actions. The trip, on the other hand, will provide some spectacular views of Nepal's landscapes." },
      { title: "Day 4: Trek to Jagat (1340m)", desc: "Trek along Budhi Gandaki River, cross bridges, and reach Jagat village." },
      { title: "Day 5: Trek to Deng (1860m)", desc: "Pass lush forests and riverside trails with Himalayan views." },
      { title: "Day 6: Trek to Namrung (2630m)", desc: "Ascend through forests and villages to Namrung for mountain vistas." },
      { title: "Day 7: Trek to Lho (3180m)", desc: "Cross Lihi and Sho villages before reaching Lho beneath Mt. Manaslu." },
      { title: "Day 8: Trek to Samagaon (3520m)", desc: "Visit Pungen Monastery and enjoy views of Manaslu glacier." },
      { title: "Day 9: Acclimatization Day", desc: "Optional hike to Manaslu Base Camp or Birendra Lake." },
      { title: "Day 10: Trek to Samdo (3860m)", desc: "Gradual ascent with views of peaks and Tibetan border villages." },
      { title: "Day 11: Trek to Larkya Phedi (4480m)", desc: "Short but steep climb through alpine terrain." },
      { title: "Day 12: Cross Larkya La Pass (5106m)", desc: "Early morning climb for sunrise and descend to Bimthang." },
      { title: "Day 13: Trek to Tilije (2300m)", desc: "Descend through pine forests and small hamlets." },
      { title: "Day 14: Drive Back to Kathmandu", desc: "Celebrate your successful trek with a farewell dinner." },
    ],
  },
};

const TripDetails = () => {
  const { slug } = useParams();
  const trip = trips[slug];
  const [expandedDays, setExpandedDays] = useState({});

  // 👇 Auto-scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!trip)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Trip not found. <Link to="/" className="text-blue-600 underline">Go back</Link></p>
      </div>
    );

  const toggleDay = (index) => setExpandedDays((p) => ({ ...p, [index]: !p[index] }));
  const expandAll = () => setExpandedDays(Object.fromEntries(trip.itinerary.map((_, i) => [i, true])));
  const collapseAll = () => setExpandedDays({});

  return (
    <div className="bg-blue-50 min-h-screen pb-20">
      {/* HERO */}
      <section
        className="relative h-[45vh] sm:h-[55vh] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: `url(${trip.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold">{trip.title}</h1>
          <p className="mt-2 text-sm sm:text-base">{trip.duration} • Difficulty: {trip.difficulty}</p>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-blue-300">{trip.price}</p>
          <div className="mt-4">
            <Link
              to={`/bookings?destination=${encodeURIComponent(trip.title)}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-sm"
            >
              Book This Trip ✈️
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-xl shadow-md p-6 sm:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 text-sm sm:text-base">
          {trip.overview?.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-800">{item.label}</p>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto mt-8 bg-white rounded-xl shadow-md p-6 sm:p-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Highlights</h2>
        <ul className="space-y-2 text-gray-700">
          {trip.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600 text-lg">➜</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Itinerary */}
      <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Day to Day Itinerary</h2>
          <div className="mt-3 sm:mt-0 flex gap-3">
            <button onClick={expandAll} className="px-3 py-1 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 text-sm">
              Expand all
            </button>
            <button onClick={collapseAll} className="px-3 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 text-sm">
              Collapse all
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
          {trip.itinerary.map((day, idx) => {
            const isOpen = !!expandedDays[idx];
            return (
              <div key={idx} className="p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-800">{day.title}</h3>
                  <button onClick={() => toggleDay(idx)} className="text-gray-600 hover:text-blue-600">
                    {isOpen ? "▲" : "▼"}
                  </button>
                </div>
                <div
                  className={`mt-3 text-gray-700 text-sm sm:text-base transition-all ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="leading-relaxed">{day.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🗺️ Trip Map (Manaslu only) */}
        {slug === "manaslu-trek" && (
          <>
            <section className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Trip Map 🗺️</h2>
              <div className="overflow-x-auto">
                <img
                  src={ManasuluMap}
                  alt="Manaslu Circuit Trek Map"
                  className="rounded-xl shadow-md w-full max-h-[600px] object-contain"
                />
              </div>
              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                This map outlines the complete 14-day Manaslu Circuit Trek route, including trails, high passes, lakes, and key rest points.
              </p>
            </section>

            {/* 🧳 Packing List */}
            <section className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Recommended Packing List 🧳</h2>
              <p className="text-gray-700 mb-3">
                Packing the right gear ensures a safe and comfortable trek. Here’s what we recommend:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
                {[
                  "Backpack (50-70L)",
                  "Sleeping bag & pad",
                  "Water bottle & filter",
                  "Headlamp with batteries",
                  "Warm hat & gloves",
                  "Sun hat & sunglasses",
                  "Rain jacket & pants",
                  "Hiking boots & socks",
                  "Quick-dry clothes",
                  "Thermal layers",
                  "First aid kit",
                  "Camera & batteries",
                  "Maps & guidebook",
                  "Passport & documents",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 🧭 Safety Section */}
            <section className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Safety and Guide 🧭</h2>
              <p className="text-gray-700 leading-relaxed">
                Your safety is our top priority. Our expert guides are trained in first aid and carry essential equipment for altitude conditions.
                In case of altitude sickness, guides may decide to descend or arrange helicopter evacuation. We always trek together as a group
                to ensure everyone’s safety.
              </p>
            </section>

            {/* 🧾 Booking Procedure */}
            <section className="max-w-6xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Booking Procedure 🧾</h2>
              <p className="text-gray-700 leading-relaxed">
                We are a government-approved trekking company in Nepal with over a decade of experience. To book your trek, pay a 10% deposit and
                share your passport, photos, insurance, and flight details via email within a week. Payment can be made via bank transfer, Western
                Union, or online. Upon arrival, the remaining balance can be paid by cash, card, or bank transfer.
              </p>
            </section>
          </>
        )}

        {/* Book CTA */}
        <div className="text-center mt-10">
          <Link
            to={`/bookings?destination=${encodeURIComponent(trip.title)}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-transform transform hover:scale-105"
          >
            Book This Trip ✈️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;

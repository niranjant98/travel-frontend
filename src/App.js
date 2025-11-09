import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bookings from "./pages/Bookings";
import TripDetails from "./pages/TripDetails";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <Router>
      <MainLayout>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip/:slug" element={<TripDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/trips/:slug" element={<TripDetails />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

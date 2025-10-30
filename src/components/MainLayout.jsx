import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar />
      <main className="flex-grow px-4 sm:px-8 md:px-16 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

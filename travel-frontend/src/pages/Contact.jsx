import React from "react";
import contactimg from "../assets/images/contact.jpeg"

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-20 px-6 md:px-16 text-gray-800">
      <div className="max-w-4xl mx-auto text-center bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
          Contact Us 📞
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We’d love to hear from you! Feel free to reach out with any questions,
          feedback, or travel stories.
        </p>

        <div className="text-left space-y-4 text-lg">
          <p>
            <span className="font-semibold text-blue-700">Owner:</span>{" "}
            M. Charan Singh
          </p>
          <p>
            <span className="font-semibold text-blue-700">Contact No:</span>{" "}
            +91 90148 37851
          </p>
          <p>
            <span className="font-semibold text-blue-700">Email:</span>{" "}
            <a
              href="mailto:charansingh223@gmail.com"
              className="text-blue-600 hover:underline"
            >
              charansingh223@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-10">
          <img
            src={contactimg}
            alt="Contact Us"
            className="mx-auto rounded-2xl shadow-md w-full md:w-2/3 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

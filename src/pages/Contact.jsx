import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactimg from "../assets/images/contact.jpeg";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  // 📩 Function to send email
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_t4947cs", // ⚙️ Replace with your EmailJS Service ID
        "template_bk50fo6", // ⚙️ Replace with your Template ID
        form.current,
        "SNoWkW0Ag74sA6bHu" // ⚙️ Replace with your Public Key
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => setStatus("error")
      );
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-20 px-6 md:px-16 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
          Contact Us 📞
        </h1>

        <p className="text-lg text-gray-700 text-center mb-8">
          We’d love to hear from you! Feel free to reach out with any questions,
          feedback, or travel stories.
        </p>

        {/* 🔹 Owner Details */}
        <div className="text-left space-y-4 text-lg bg-blue-50 p-6 rounded-xl shadow-inner mb-10">
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

        {/* ✨ Feedback Form */}
        <div className="text-left">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
            Send Us Your Feedback 💬
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block font-semibold text-blue-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-semibold text-blue-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-semibold text-blue-700 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Write your feedback or issue here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              {status === "sending" ? "Sending..." : "Send Message ✉️"}
            </button>

            {/* ✅ Status Message */}
            {status === "success" && (
              <p className="text-green-600 font-medium text-center mt-2">
                ✅ Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium text-center mt-2">
                ❌ Failed to send. Please try again later.
              </p>
            )}
          </form>
        </div>

        {/* 📷 Image */}
        <div className="mt-12">
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

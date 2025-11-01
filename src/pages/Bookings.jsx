import React, { useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
    travelDate: "",
    members: 1,
    phone: "",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
  const razorpayKey = process.env.REACT_APP_RAZORPAY_KEY_ID;

  const destinationPrices = {
    Bali: 10000,
    Paris: 20000,
    "New York": 25000,
  };

  const basePrice = destinationPrices[formData.destination] || 0;
  const totalAmount = basePrice * formData.members;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increaseMembers = () => {
    setFormData((prev) => ({ ...prev, members: prev.members + 1 }));
  };

  const decreaseMembers = () => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members > 1 ? prev.members - 1 : 1,
    }));
  };

  const sendOtp = async () => {
    if (!formData.email) return alert("Please enter your email first!");
    try {
      const res = await axios.post(`${backendURL}/api/otp/send`, {
        email: formData.email,
      });
      if (res.data.success) {
        alert("✅ OTP sent to your email!");
        setOtpSent(true);
      } else {
        alert("❌ Failed to send OTP!");
      }
    } catch (error) {
      console.error("OTP Error:", error);
      alert("❌ Failed to send OTP!");
    }
  };

  const verifyOtp = async () => {
    if (!otp) return alert("Enter the OTP sent to your email!");
    try {
      const res = await axios.post(`${backendURL}/api/otp/verify`, {
        email: formData.email,
        otp,
      });
      if (res.data.success) {
        alert("✅ OTP verified successfully!");
        setOtpVerified(true);
      } else {
        alert("❌ Invalid OTP. Try again.");
      }
    } catch (error) {
      console.error("Verify OTP Error:", error);
      alert("Error verifying OTP!");
    }
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      const amount = totalAmount;

      const { data } = await axios.post(`${backendURL}/api/payment/create-order`, {
        amount,
      });

      if (!data.success) {
        alert("Failed to create payment order!");
        return;
      }

      const { id: order_id, currency } = data.order;

      const options = {
        key: razorpayKey,
        amount: amount * 100,
        currency,
        name: "Charan Adventures",
        description: `Booking for ${formData.destination}`,
        order_id,
        handler: async function (response) {
          alert("✅ Payment Successful!");

          try {
            await axios.post(`${backendURL}/api/bookings/add`, {
              ...formData,
              amount,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            alert("✅ Booking confirmed! Confirmation email sent.");

            setFormData({
              name: "",
              email: "",
              destination: "",
              message: "",
              travelDate: "",
              members: 1,
              phone: "",
            });
            setOtp("");
            setOtpSent(false);
            setOtpVerified(false);
          } catch (err) {
            console.error("Booking Save Error:", err);
            alert("❌ Booking save failed but payment succeeded.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#2563eb" },
        modal: {
          ondismiss: () => alert("Payment cancelled."),
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

      razor.on("payment.failed", function (response) {
        alert("❌ Payment failed. Please try again.");
        console.error(response.error);
      });
    } catch (error) {
      console.error("❌ Payment Error:", error);
      alert("Something went wrong during payment!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert("Please verify your email before payment!");
      return;
    }
    if (!formData.destination) {
      alert("Please select a destination!");
      return;
    }
    handlePayment();
  };

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-8 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700">
          Book Your Dream Adventure 🌍
        </h1>
        <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
          Explore amazing destinations with Charan Adventures. Start your journey now!
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 md:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
          Booking Form 🧾
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
          />

          {/* Email + OTP Section */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={sendOtp}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto"
              >
                Send OTP
              </button>
            </div>

            {otpSent && !otpVerified && (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm sm:text-base w-full sm:w-auto"
                >
                  Verify
                </button>
              </div>
            )}

            {otpVerified && (
              <p className="text-green-600 mt-2 font-semibold text-sm sm:text-base">
                ✅ Email Verified!
              </p>
            )}
          </div>

          {/* Destination */}
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
          >
            <option value="">Select Destination</option>
            <option>Bali</option>
            <option>Paris</option>
            <option>New York</option>
          </select>

          {/* Members with + and - buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="font-medium text-gray-700 text-sm sm:text-base">
              Members:
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={decreaseMembers}
                className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold"
              >
                –
              </button>
              <span className="text-lg font-semibold w-8 text-center">
                {formData.members}
              </span>
              <button
                type="button"
                onClick={increaseMembers}
                className="bg-gray-200 px-3 py-1 rounded-lg text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Cost */}
          {formData.destination && (
            <p className="text-base sm:text-lg text-center font-semibold text-gray-700">
              Price per member: ₹{basePrice.toLocaleString()} <br />
              Total Amount: ₹{totalAmount.toLocaleString()}
            </p>
          )}

         {/* Travel Date */}
<div className="w-full">
  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
    Travel Date:
  </label>
  <input
    type="date"
    name="travelDate"
    value={formData.travelDate}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-sm sm:text-base appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
    style={{
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      backgroundColor: "#fff",
      colorScheme: "light",
    }}
  />
</div>


          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-sm sm:text-base"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 h-24 text-sm sm:text-base"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            disabled={!otpVerified || loading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition text-sm sm:text-base ${
              otpVerified
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? "Processing..." : "Pay & Confirm Booking"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Bookings;

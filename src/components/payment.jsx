import React from "react";

const Payment = () => {
  const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest User",
    email: "guest@example.com",
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve(true);
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      // 1️⃣ Create Razorpay order
      const response = await fetch(`${backendURL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5000 }), // ₹50
      });

      if (!response.ok) {
        alert("❌ Failed to create order");
        return;
      }

      const data = await response.json();

      // 2️⃣ Load Razorpay SDK
      const loaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
      if (!loaded || !window.Razorpay) {
        alert("❌ Razorpay SDK failed to load");
        return;
      }

      // 3️⃣ Razorpay options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Travel Explorer",
        description: "Payment for your trip",
        order_id: data.order.id,
        handler: async function (response) {
          alert("✅ Payment successful!");

          const verifyRes = await fetch(`${backendURL}/api/payment/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email: user.email,
              name: user.name,
              amount: data.order.amount,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert("🎉 Payment verified! Confirmation email sent.");
          } else {
            alert("❌ Payment verification failed.");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("❌ Payment Error:", error);
      alert("Something went wrong during payment.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Razorpay Payment Integration 💳</h2>
      <button
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Pay ₹50
      </button>
    </div>
  );
};

export default Payment;

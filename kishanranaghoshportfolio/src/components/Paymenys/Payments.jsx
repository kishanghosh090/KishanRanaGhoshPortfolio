import React from "react";

const Payments = () => {
  const initiatePayment = async () => {
    const cashfree = Cashfree({
      mode: "production", //or production
    });
    try {
      const response = await fetch("http://localhost:3000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!data.payment_session_id) {
        console.error("Missing payment session ID", data);
        return;
      }

      let checkoutOptions = {
        paymentSessionId: data.payment_session_id,
        redirectTarget: "_self",
      };
      cashfree.checkout(checkoutOptions); // redirects to hosted checkout
    } catch (error) {
      console.error("Error initiating payment", error);
    }
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <button onClick={initiatePayment}>Pay ₹1</button>
    </div>
  );
};

export default Payments;

import React, { useEffect, useState } from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const displayrazorpay = async (amount) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("you are offline");
    return;
  }

  const options = {
    key: "rzp_test_MWQ18j5O2Zj2x5",
    currency: "INR",
    amount: amount * 100,
    name: "Falahaar",
    description: "Always Fresh Delivery",
    image:
      "https://res.cloudinary.com/dipkglaib/image/upload/v1690543756/color-logo_sitbio.png",
    handler: function (response) {
      if (response.razorpay_payment_id) {
        alert("Payment successful! Thank you for shopping!!");
        window.location.href = "/Thankyou";
      }
    },
    theme: {
      color: "#27963c",
    },
    prefill: {
      name: "Falahaar",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const Payment = () => {
  const { user } = useAuth0();
  const { total_price } = useParams(); // Extract cart amount from URL

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setForm({
      ...form,
      name: user.name,
      products: "",
      amount: total_price ? Number(total_price) : 1, // Set a default value for the amount field
    });
  }, [total_price, user.name]);

  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://falahaarbackend.onrender.com/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      displayrazorpay(Number(total_price || 1));
    }

    const data = await response.json();
    console.log(data);
    console.log(total_price);
  };

  return (
    <div className="PaymentContainer">
      <form onSubmit={handleSubmit}>
        <div className="address-form">
          <div className="FormHead">
            <h2 name="name">Enter Your Address Details</h2>
          </div>
          <div className="FormBody">
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                name="state"
                onChange={handleForm}
                placeholder="Enter state"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode:</label>
              <input
                type="number"
                name="pincode"
                onChange={handleForm}
                placeholder="Enter pincode"
                maxLength="6"
                minLength="6"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullAddress">Full Address:</label>
              <textarea
                name="fullAddress"
                onChange={handleForm}
                placeholder="Enter full address"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="locality">Locality:</label>
              <input
                type="text"
                name="locality"
                onChange={handleForm}
                placeholder="Enter locality"
                required
              />
            </div>
            <button className="pay-button" type="submit">
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;

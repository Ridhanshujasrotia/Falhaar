import React from "react";
import "../App.css";

const Thankyou = () => {
  return (
    <div className="thankYouPage">
      <div class="orderContent">
        <p>Your Order Will Be Delivered Shortly</p>
      </div>
      <img
        src="https://res.cloudinary.com/dipkglaib/image/upload/v1691587509/WhatsApp_Image_2023-08-09_at_18.39.03-removebg-preview_dcdijo.png"
        alt="deliveryImage"
      />
      <div class="orderContent2">
        <p className="bounce2">Thanks For Shopping With Us</p>
        <div className="orderButton">
          <a href="/Shop">Continue Shopping</a>
          <a href="/">Return To Home</a>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;

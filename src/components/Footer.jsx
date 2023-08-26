import React from "react";
import "../App.css";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <footer className="section-p1 foot">
      <div className="col">
        <img
          src="https://res.cloudinary.com/dipkglaib/image/upload/v1690543756/color-logoImage_f9am3u.png"
          alt=""
          className="logo"
        />
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> Dehradun, India
        </p>
        <p>
          <strong>Phone:</strong> 9858393956
        </p>
        <p>
          <strong>Hours:</strong> 10:00am - 11:00pm, Sat - Thu
        </p>
        <div className="icon follow">
          <h4>Follow US</h4>
          <a href="https://facebook.com" className="fab fa-facebook-f"></a>
          <a href="https://twitter.com" className="fab fa-twitter"></a>
          <a href="https://instagram.com" className="fab fa-instagram"></a>
          <a href="https://pinterest.com" className="fab fa-pinterest-p"></a>
          <a href="https://youtube.com" className="fab fa-youtube"></a>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="/About">About Us</a>
        <a href="/">Delivery Information</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms & Conditions</a>
        <a href="/Contact">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <a href="/Cart">View Cart</a>
        <a href="/Contact">Help</a>
      </div>
      <div className="col install">
        <h4>Secured Payment Gateways</h4>
        <img
          src="https://res.cloudinary.com/dipkglaib/image/upload/v1690551016/pay_inwexx.png"
          alt="Payment Partners"
        />
      </div>
      <div className="copyright">
        <p>&copy; 2023, Falahaar - Team Gaama</p>
      </div>
    </footer>
  );
};

export default Footer;

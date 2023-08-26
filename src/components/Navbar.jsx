import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [isActive, setIsActive] = useState(false);

  const handleBarClick = () => {
    setIsActive(true);
  };

  const handleCloseClick = () => {
    setIsActive(false);
  };
  return (
    <>
      <header>
        <a href="/" className="logo">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1690543756/color-logoImage_f9am3u.png"
            alt="LOGOIMAGE"
            className="logo"
          />
        </a>
        <nav>
          <ul id="navbar" className={isActive ? "active" : ""}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Shop">Shop</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>

            {isAuthenticated ? (
              <li>
                <button
                  className="login-button"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="login-button"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </li>
            )}

            <li id="lg-bag">
              <a href="/Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
            <a href="/" id="close" onClick={handleCloseClick}>
              <i className="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </nav>
        <div id="mobile">
          <a href="/Cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <i id="bar" className="fas fa-outdent" onClick={handleBarClick}></i>
        </div>
      </header>
    </>
  );
};

export default Navbar;

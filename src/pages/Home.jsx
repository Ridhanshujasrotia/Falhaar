import React, { useEffect, useState } from "react";
import "../App.css";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [users1, setUsers1] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://falahaarbackend.onrender.com/vegetable",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching vegetable data:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers1 = async () => {
    const response = await fetch("https://falahaarbackend.onrender.com/fruit", {
      method: "GET",
    });
    const data = await response.json();

    setUsers1(data);
  };

  useEffect(() => {
    getUsers1();
  }, []);

  return (
    <div className="homePage">
      <div className="hero-container">
        <div className="hero-section">
          <h2>Super value deals</h2>
          <h1>On all items</h1>
          <p>Save more with coupons & up to 70% off!</p>
          <a class="home-btn" href="/Shop">
            Shop Now
          </a>
        </div>

        {/* <!--    Video section Section      --> */}
        <section id="about-app" className="hero-vid">
          <div className="video">
            <video
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/dipkglaib/video/upload/v1690548157/video_vld2pd.mp4"
            ></video>
          </div>
        </section>
        <img
          className="hero-Sec bounce2"
          src="https://res.cloudinary.com/dipkglaib/image/upload/v1690576012/falahaar/img10T_um4ty4.png"
          alt=""
        />
        <img
          className="hero-Sec bounce2"
          src="https://res.cloudinary.com/dipkglaib/image/upload/v1690576012/falahaar/img10T_um4ty4.png"
          alt=""
        />
      </div>

      {/* ----------------------------------- */}
      <div className="homeContent">
        <h1>Recommended Products</h1>
      </div>
      <span className="RecommededSubSection">Vegetables</span>
      <div className="cards">
        {users.map((card) => (
          <Link to={`./Logs/${card.ID}/${card.Name}`}>
            <div>
              <Cards
                imgSrc={card.Image}
                name={card.Name}
                category={card.Type}
                price={card.TodayPrice}
              />
            </div>
          </Link>
        ))}
      </div>
      <span className="RecommededSubSection2">Fruits</span>
      <div className="cards">
        {users1.map((card) => (
          <Link to={`./Logs/${card.ID}/${card.Name}`}>
            <div>
              <Cards
                imgSrc={card.Image}
                name={card.Name}
                category={card.Type}
                price={card.TodayPrice}
              />
            </div>
          </Link>
        ))}
      </div>
      {/* ------------------------------------------------------ */}
      <div className="why">
        <div className="why-component">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1692089127/delivery_cfbb9y.png"
            alt="Delivery"
          />
          <div className="why-text">
            <div className="why-title">Under 20 minutes</div>
            <div className="why-desc">Delivered on time - Every time!</div>
          </div>
        </div>

        <div className="why-component">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1692089163/reliable_m8yxui.png"
            alt="Reliable"
          />
          <div className="why-text">
            <div className="why-title">Reliable</div>
            <div className="why-desc">Get what you order - Every time!</div>
          </div>
        </div>
        <div className="why-component">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1692089150/prices_yja9c3.png"
            alt="Prices"
          />
          <div className="why-text">
            <div className="why-title">Amazing prices</div>
            <div className="why-desc">Offers offers offers - Every time!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

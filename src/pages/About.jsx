import React from "react";
import "../App.css";
import TeamCard from "../components/TeamCard";

const About = () => {
  return (
    <>
      {/* <!------------About us----------> */}

      <section className="about-section">
        <h1>About Us</h1>
        <div className="container">
          <ul>
            <li>
              <span>Welcome to Falahaar</span> - your one-stop destination for
              daily mandi prices of vegetables and fruits in India. We are
              passionate about providing reliable and up-to-date information to
              help you make informed decisions while buying fresh produce.
            </li>
            <br />
            <li>
              Our team of experts tirelessly collects data from various sources
              across different mandis to ensure the accuracy and relevance of
              the prices displayed on our website. We strive to keep you
              informed about the fluctuating market rates, helping you save
              money and make the best choices for your kitchen.
            </li>
            <br />
            <li>
              Looking to the future, we utilize advanced data analytics and
              market insights to provide future price predictions for various
              vegetables and fruits. Please keep in mind that these predictions
              are based on historical data and market trends and may not be 100%
              accurate. However, they can serve as a helpful reference for
              anticipating potential price changes.
            </li>
            <br />
            <li>
              At Falahaar, we believe in transparency and credibility. Our
              user-friendly interface allows you to easily access the mandi
              prices, browse through the available items, and place orders
              without any hassle. We are committed to providing exceptional
              service and ensuring a seamless shopping experience for our valued
              customers.
            </li>
            <br />
            <li>
              Whether you are a homemaker, a restaurant owner, or a produce
              vendor, Falahaar is here to cater to your needs. Join us on this
              journey as we bring fresh produce and market insights right to
              your fingertips.
            </li>
          </ul>
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1690578926/img1T_e8zvm9.png"
            alt=""
          />
        </div>
      </section>
      <section id="about-app" className="heroAbout">
        <img
          src="https://res.cloudinary.com/dipkglaib/image/upload/v1690578037/Home_8_b6omhw.png"
          alt="img"
        />
      </section>

      {/* <!--    Features Section   --> */}
      <h1 id="feature-heading">Our Services</h1>
      <section id="feature" className="section-p1 pulse">
        <div className="fe-box">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1690548294/f1_ykcapl.png"
            alt=""
          />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1690548295/f2_k24jxc.png"
            alt=""
          />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1690548295/f3_pmgbzk.png"
            alt=""
          />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1690548295/f6_vznmv3.png"
            alt=""
          />
          <h6>F24/7 Support</h6>
        </div>
      </section>

      {/* <!--------Our mission----------> */}
      <section className="mission-section">
        <h1>Our Mission</h1>
        <div className="container">
          <ul>
            <li>
              <span>At Falahaar</span>, our mission is to revolutionize the way
              people buy fresh produce. We aim to empower our customers with
              accurate and real-time mandi prices so they can make informed
              decisions while purchasing vegetables and fruits.
            </li>
            <br />
            <li>
              Our dedication to providing the best service extends to offering a
              comprehensive price log that encompasses historical data of past
              mandi prices. This price log allows users to review the trends and
              fluctuations in prices, giving valuable insights for better
              decision-making.
            </li>
            <br />
            <li>
              As we look towards the future, we endeavor to enhance our
              predictive capabilities to offer reliable future price
              predictions. By combining historical data with advanced analytics,
              our goal is to provide users with valuable information to help
              them plan their purchases and manage their expenses effectively.
            </li>
            <br />
            <li>
              Our commitment to quality, transparency, and customer satisfaction
              drives us every day to improve and enhance our services. With the
              vision to make fresh and nutritious produce accessible to all, we
              strive to bridge the gap between farmers and consumers, creating a
              win-win situation for everyone in the supply chain.
            </li>
          </ul>
        </div>
      </section>

      {/* <!------------team Section---------------> */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-cards">
          <TeamCard
            name="Ridhanshu Jasrotia"
            image="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/ridhanshu_xmpi67.jpg"
          />
          <TeamCard
            name="Aryan Sharma"
            image="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/aryan_h6zamj.jpg"
          />
          <TeamCard
            name="Pratham Jamwal"
            image="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/pratham_ib6l6c.jpg"
          />
          <TeamCard
            name="Gautam Deopa"
            image="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/gautam_x9gsxy.jpg"
          />
          <TeamCard
            name="Akshit Jasrotia"
            image="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/akshit_c6stnq.jpg"
          />
        </div>
      </section>
    </>
  );
};

export default About;

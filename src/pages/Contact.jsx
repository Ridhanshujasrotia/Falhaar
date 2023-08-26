import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="contactPage">
      <section id="contact-details" className="section-p1">
        <div className="details">
          <h5>GET IN TOUCH</h5>
          <h2>visit one of our locations or contact us today</h2>
          <h3>HEAD OFFICE</h3>
          <div>
            <li>
              <i className="fa fa-map"></i>
              <p>Dehradun, India</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>Falahaar@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>9858393956</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>Monday to Saturday 9:00 am to 16:00 pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8558.6088844769!2d77.98254354390197!3d30.268737578371194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b9451ae8dfd%3A0xf39c46d34a152faa!2sGraphic%20Era%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1689800494605!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="form-details" className="section-p1">
        <form action="https://formspree.io/f/mwkdvgee" method="POST">
          <span>LEAVE A MESSAGE</span>
          <h2>WE WOULD LOVE TO HEAR FROM YOU</h2>
          <input
            type="text"
            name="username"
            placeholder="YOUR NAME"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="E-MAIL"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="Subject"
            placeholder="SUBJECT"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="YOUR MESSAGE"
            autoComplete="off"
            required
          ></textarea>
          <button className="btn-contact" type="submit">
            Submit
          </button>
        </form>
        <div className="people">
          <div>
            <img
              src="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/ridhanshu_xmpi67.jpg"
              alt=""
              className="hithere"
            />
            <p>
              <span>Ridhanshu Jasrotia</span>
              phone: 6005984493
              <br />
              mail: Ridhanshu@gmail.com
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/gautam_x9gsxy.jpg"
              alt=""
              className="hithere"
            />
            <p>
              <span>Gautam Deopa</span>
              phone:7254984191
              <br />
              mail:Gautam@gmail.com
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/aryan_h6zamj.jpg"
              alt=""
              className="hithere"
            />
            <p>
              <span> Aryan Sharma</span>
              phone:8065984195
              <br />
              mail:Aryan@gmail.com
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/pratham_ib6l6c.jpg"
              alt=""
              className="hithere"
            />
            <p>
              <span>Pratham Jamwal</span>
              phone:7005984405
              <br />
              mail:Pratham@gmail.com
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dipkglaib/image/upload/v1690549784/akshit_c6stnq.jpg"
              alt=""
              className="hithere"
            />
            <p>
              <span>Akshit Jasrotia</span>
              phone:9005984199
              <br />
              mail:Akshit@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

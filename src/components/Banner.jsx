import React from "react";
import "../App.css";

const Banner = () => {
  return (
    <img
      src={
        process.env.PUBLIC_URL +
        "https://res.cloudinary.com/dipkglaib/image/upload/v1690614202/bg_jzvs5q.jpg"
      }
      alt=""
    />
  );
};

export default Banner;

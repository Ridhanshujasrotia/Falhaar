import React from "react";
import "../App.css";
const LogCard = ({ name, image }) => {
  return (
    <>
      <img src={image} alt={name} className="LogImage" />
    </>
  );
};

export default LogCard;

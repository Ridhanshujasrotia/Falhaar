import React from "react";
import "../App.css";

const TeamCard = ({ name, image }) => {
  return (
    <div className="teamCard">
      <img src={image} className="img" alt={name} />
      <div className="textBox">
        <p className="text head">{name}</p>
      </div>
    </div>
  );
};

export default TeamCard;

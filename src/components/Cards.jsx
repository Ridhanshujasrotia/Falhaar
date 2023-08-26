import React from "react";
import "../App.css";

const Cards = ({ imgSrc, name, category, price }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="img" alt={name} />
      <div className="textBox">
        <p className="text head">{name}</p>
        <span>{category}</span>
        <p className="text price">{price} per Kg</p>
      </div>
    </div>
  );
};

export default Cards;

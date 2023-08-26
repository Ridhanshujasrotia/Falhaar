import React from "react";

const ItemBlock = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        maxWidth: "300px",
      }}
    >
      <h2>{item.name}</h2>
      <p>{item.today}</p>
    </div>
  );
};

export default ItemBlock;

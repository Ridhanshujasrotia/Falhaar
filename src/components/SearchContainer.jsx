import React from "react";
import "../App.css";

const SearchContainer = ({ onSearch }) => {
  return (
    <div className="search-container">
      <input
        placeholder="Search Location"
        type="search"
        className="inputLocation"
      />
      <input type="button" value="Search" onClick={onSearch} />
    </div>
  );
};

export default SearchContainer;

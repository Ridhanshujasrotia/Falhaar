import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-icon">
        <FaExclamationTriangle />
      </div>
      <h1 className="not-found-heading">Oops! Page not found</h1>
      <p className="not-found-text">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <br></br>
      <br></br>
      <p>
        Go to the{" "}
        <Link className="link-home" to="/">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CheckLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-card-container">
      <div className="login-card">
        <h2>Please login first to access</h2>
        <hr className="divider" />
        <button className="login-button" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </div>
    </div>
  );
};
export default CheckLogin;

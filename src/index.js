import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./pages/Cart_Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-c22n73xncpb6x546.us.auth0.com"
    clientId="1vV5Iq1hqDWhviwyQN4wmd5tDVi7Imfd"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <CartProvider>
      <App />
    </CartProvider>
  </Auth0Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-u5l5tybbfflok48w.us.auth0.com"
        clientId="KjSt3BBCdPOPYniRUUmFtxWA1qRYtzs1"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);

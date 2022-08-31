import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const domain = process.env.REACT_APP_AUTH0_DOMAIN

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
    clientId={clientId} 
    domain={domain} 
    redirectUri={window.location.origin} 
  >
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>
);

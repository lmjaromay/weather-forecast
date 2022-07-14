import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useNavigate } from "react-router-dom";

import { AppState, Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const auth0 = {
  domain: process.env.REACT_APP_DOMAIN || "",
  clientId: process.env.REACT_APP_CLIENT_ID || "",
  redirectUri: (process.env.REACT_APP_URL || "http://localhost:3000") + "/home"
}

const Auth0ProviderWithRedirectCallback = ({
  children,
  ...props
}: PropsWithChildren<Auth0ProviderOptions>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0ProviderWithRedirectCallback
        domain={auth0.domain}
        clientId={auth0.clientId}
        redirectUri={auth0.redirectUri}
        scope="read:users"
      >
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

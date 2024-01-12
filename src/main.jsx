import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/formStore";

const rootElement = document.getElementById("root");

const renderApp = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// Use ReactDOM.createRoot if available (React 18+), otherwise fallback to ReactDOM.render
const root = ReactDOM.createRoot ? ReactDOM.createRoot(rootElement) : ReactDOM;

root.render(renderApp());

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/formStore";
import "./styles/main.css";

const rootElement = document.getElementById("root");

const renderApp = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

const root = ReactDOM.createRoot ? ReactDOM.createRoot(rootElement) : ReactDOM;

root.render(renderApp());

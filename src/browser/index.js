import React from "react";
import { hydrate } from "react-dom";
import App from "../containers/App";
import "../asserts/css/style.css";
import { BrowserRouter } from "react-router-dom";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);

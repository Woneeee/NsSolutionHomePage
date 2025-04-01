import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./css/common/Reset.css";
import "./css/common/Color.css";
import "./css/common/Style.css";
import "./css/common/Header.scss";
import "./css/common/Footer.scss";

import "./css/main/Style.scss";
import "./css/about/Style.scss";

// import { LocationTop } from "./Components/LocationTop";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <LocationTop /> */}
    <App />
  </BrowserRouter>
);

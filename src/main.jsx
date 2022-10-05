import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/2022-09-Orleans-CDA-Projet-Frontend-MANC/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

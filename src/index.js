// MEMASUKAN MODUL DARI REACT
import React from "react";
import ReactDOM from "react-dom/client";
import Aplikasi from "./Aplikasi";
import "./index.css";

const akar = ReactDOM.createRoot(document.getElementById("akar"));
akar.render(
  <React.StrictMode>
    <Aplikasi />
  </React.StrictMode>
);

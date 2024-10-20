import App from "./app";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CoolFonts from "./coolfonts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./test";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/coolfonts" element={<CoolFonts />} />
      <Route path="/test" element={<Article />} />
    </Routes>
  </Router>
);

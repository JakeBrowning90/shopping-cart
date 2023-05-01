import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import './styles/reset.css';
import './styles/style.css';

const App = () => {

  return (
    <HashRouter id="body"> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <div id="footer">
        <p>Made by Jake Browning for The Odin Project, 2023.</p>
        <p>This is a not-for-profit fan project.
        All characters and assets shown are property of Nintendo.</p>
      </div>
    </HashRouter>
  );
};

export default App;
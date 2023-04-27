import React,{ useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import './styles/reset.css';
import './styles/style.css';

const App = () => {

  return (
    <BrowserRouter id="body"> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <div id="footer">Made by Jake Browning for The Odin Project, 2023</div>
    </BrowserRouter>
  );
};

export default App;
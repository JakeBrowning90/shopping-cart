import React,{ useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import './styles/reset.css';
import './styles/style.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [inventory, setInventory] = useState([
    {key: 0, img: "applePic", desc: "apple"},
    {key: 1, img: "bananaPic", desc: "banana"},
    {key: 2, img: "cherryPic", desc: "cherry"},
    {key: 3, img: "durianPic", desc: "durian"},
  ]);


  return (
    <BrowserRouter id="body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cartCount={cartCount} inventory={inventory}/>} />
      </Routes>
      <div id="footer">Made by Jake Browning for The Odin Project, 2023</div>
    </BrowserRouter>
  );
};

export default App;
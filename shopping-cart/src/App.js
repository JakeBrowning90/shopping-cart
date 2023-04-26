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
    {key: 0, img: "applePic", desc: "apple", cardCount: 0},
    {key: 1, img: "bananaPic", desc: "banana", cardCount: 0},
    {key: 2, img: "cherryPic", desc: "cherry", cardCount: 0},
    {key: 3, img: "durianPic", desc: "durian", cardCount: 0},
    {key: 4, img: "pearPic", desc: "pear", cardCount: 0},
  ]);

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInventory((inventory) => {
      return {
        ...inventory,   // Spread Operator               
        [name]: value
      }
    })
  }

  const addToCart = () => {
    console.log("Added to cart!");
    setCartCount(cartCount => cartCount + 1);
  }


  return (
    <BrowserRouter id="body"> 
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cartCount={cartCount} inventory={inventory} handleQuantityChange={handleQuantityChange} onClick={addToCart}/>} />
      </Routes>
      <div id="footer">Made by Jake Browning for The Odin Project, 2023</div>
    </BrowserRouter>
  );
};

export default App;
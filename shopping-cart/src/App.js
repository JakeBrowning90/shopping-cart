import React,{ useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import './styles/reset.css';
import './styles/style.css';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [inventory, setInventory] = useState([
    {key: 0, img: "img", desc: "Rose", cardCount: 0},
    {key: 1, img: "img", desc: "Cosmos", cardCount: 0},
    {key: 2, img: "img", desc: "Tulip", cardCount: 0},
    {key: 3, img: "img", desc: "Pansy", cardCount: 0},
    {key: 4, img: "img", desc: "Lily", cardCount: 0},
    {key: 5, img: "img", desc: "Violet", cardCount: 0},
    {key: 6, img: "img", desc: "Hyacinth", cardCount: 0},
    {key: 7, img: "img", desc: "Mum", cardCount: 0},
    {key: 8, img: "img", desc: "Windflower", cardCount: 0},
  ]);

  const handleQuantityChange = (e) => {
    const targetItem = inventory.find(item => item.key == e.target.dataset.key);
    const value = parseFloat(e.target.value);
    setInventory(inventory.map(item => {
      if (item.key === targetItem.key) {
        // Create a *new* object with changes
        return { ...item, cardCount: value };
      } else {
        // No changes
        return item;
      }
    }));

  }

  const addToCart = (e) => {
    const targetItem = inventory.find(item => item.key == e.target.dataset.key);
    const cardCount = targetItem.cardCount;

    console.log("Added to cart!");
    setCartCount(cartCount => cartCount + cardCount);

    setInventory(inventory.map(item => {
      if (item.key === targetItem.key) {
        // Create a *new* object with changes
        return { ...item, cardCount: 0 };
      } else {
        // No changes
        return item;
      }
    }));

  }


  return (
    <BrowserRouter id="body"> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cartCount={cartCount} inventory={inventory} handleQuantityChange={handleQuantityChange} onClick={addToCart}/>} />
      </Routes>
      <div id="footer">Made by Jake Browning for The Odin Project, 2023</div>
    </BrowserRouter>
  );
};

export default App;
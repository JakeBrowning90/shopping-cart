import React,{ useState, useEffect } from "react";
import uniqid from "uniqid";
import ItemCard from "./ItemCard";
import cosmos from "./img/Cosmos.png";
import hyacinths from "./img/Hyacinths.png";
import lilies from "./img/Lilies.png";
import lilyOfTheValley from "./img/Lily-of-the-Valley.png";
import mums from "./img/Mums.png";
import pansies from "./img/Pansies.png";
import roses from "./img/Roses.png";
import tulips from "./img/Tulips.png";
import windflowers from "./img/Windflowers.png";


function Shop() {

  const [cartCount, setCartCount] = useState(0);
  const [inventory, setInventory] = useState([
    {key: uniqid(), img: roses, desc: "Rose - Red", price: 0, cardCount: 0},
    {key: uniqid(), img: roses, desc: "Rose - Yellow", cardCount: 0},
    {key: uniqid(), img: roses, desc: "Rose - White", cardCount: 0},
    {key: uniqid(), img: roses, desc: "Rose - Pink", cardCount: 0},
    {key: uniqid(), img: roses, desc: "Rose - Orange", cardCount: 0},
    {key: uniqid(), img: roses, desc: "Rose - Blue", cardCount: 0},
    {key: uniqid(), img: roses, desc: "Rose - Purple", cardCount: 0},
    {key: uniqid(), img: roses, desc: "Rose - Black", cardCount: 0},
    {key: uniqid(), img: cosmos, desc: "Cosmos - Red", cardCount: 0},
    {key: uniqid(), img: tulips, desc: "Tulip - Red", cardCount: 0},
    {key: uniqid(), img: pansies, desc: "Pansy - Red", cardCount: 0},
    {key: uniqid(), img: lilies, desc: "Lily - Red", cardCount: 0},
    {key: uniqid(), img: lilyOfTheValley, desc: "Lily-of-the-Valley", cardCount: 0},
    {key: uniqid(), img: hyacinths, desc: "Hyacinth - Red", cardCount: 0},
    {key: uniqid(), img: mums, desc: "Mum - Red", cardCount: 0},
    {key: uniqid(), img: windflowers, desc: "Windflower- Red", cardCount: 0},
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
    <div id="Shop">
      <div id="cartDiv">
        <div>Items in Cart: {cartCount}</div>
        <button id="CheckoutButton">Continue to Checkout</button>
      </div>
      <ul id="itemDisplayDiv">

        {inventory.map((item) => {
                  return <li key={item.key}>
                      <ItemCard item={item} onClick={addToCart} handleQuantityChange={handleQuantityChange}/>
                  </li>
              })}

      </ul>
    </div>
  );
}

export default Shop;

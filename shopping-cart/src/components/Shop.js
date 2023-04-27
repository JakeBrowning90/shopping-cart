import React,{ useState, useEffect } from "react";
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
    {key: 0, img: roses, desc: "Rose", cardCount: 0},
    {key: 1, img: cosmos, desc: "Cosmos", cardCount: 0},
    {key: 2, img: tulips, desc: "Tulip", cardCount: 0},
    {key: 3, img: pansies, desc: "Pansy", cardCount: 0},
    {key: 4, img: lilies, desc: "Lily", cardCount: 0},
    {key: 5, img: lilyOfTheValley, desc: "Lily-of-the-Valley", cardCount: 0},
    {key: 6, img: hyacinths, desc: "Hyacinth", cardCount: 0},
    {key: 7, img: mums, desc: "Mum", cardCount: 0},
    {key: 8, img: windflowers, desc: "Windflower", cardCount: 0},
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
        <button>Continue to Checkout</button>
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

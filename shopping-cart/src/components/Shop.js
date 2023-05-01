import React,{ useState } from "react";
import Inventory from "./Inventory";
import ItemCard from "./ItemCard";

function Shop() {

  const [cartCount, setCartCount] = useState(0);
  const [inventory, setInventory] = useState( Inventory );

  const handleQuantityChange = (e) => {
    const targetItem = inventory.find(item => item.key === e.target.dataset.key);
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
    const targetItem = inventory.find(item => item.key === e.target.dataset.key);
    const cardCount = targetItem.cardCount;

    if (cardCount > 0 && cardCount < 100){
      setCartCount(cartCount => cartCount + cardCount);
    }

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

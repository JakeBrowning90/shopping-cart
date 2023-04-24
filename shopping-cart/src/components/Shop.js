import ItemCard from "./ItemCard";

function Shop() {
  return (
    <div id="Shop">
      <div id="cartDiv">
        <div>Items in Cart: X</div>
        <button>Continue to Checkout</button>
      </div>
      <div id="itemDisplayDiv">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default Shop;

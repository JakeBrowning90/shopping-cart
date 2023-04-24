import ItemCard from "./ItemCard";

function Shop(props) {
  const { cartCount, inventory } = props;

  return (
    <div id="Shop">
      <div id="cartDiv">
        <div>Items in Cart: {cartCount}</div>
        <button>Continue to Checkout</button>
      </div>
      <div id="itemDisplayDiv">
      {inventory.map((item) => {
                return <ItemCard item={item} 
                />
            })}
        {/* <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard /> */}
      </div>
    </div>
  );
}

export default Shop;

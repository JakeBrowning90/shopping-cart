import ItemCard from "./ItemCard";

function Shop(props) {
  const { cartCount, inventory, onClick } = props;

  return (
    <div id="Shop">
      <div id="cartDiv">
        <div>Items in Cart: {cartCount}</div>
        <button>Continue to Checkout</button>
      </div>
      <ul id="itemDisplayDiv">

        {inventory.map((item) => {
                  return <li key={item.key}>
                      <ItemCard item={item} onClick={onClick}/>
                  </li>
              })}

      </ul>
    </div>
  );
}

export default Shop;

function ItemCard(props) {
  const { item, handleQuantityChange, onClick } = props;

    return (
      <div className="ItemCard">
        <div>{item.img}</div>
        <div>{item.desc}</div>
        <div>Qty
          <input name="cardCount" type="number" min="0" onChange={handleQuantityChange} defaultValue={item.cardCount}/>
        </div>
        <div>
          <button onClick={onClick}>Add to cart</button>
        </div>
      </div>
    );
  }
  
  export default ItemCard;
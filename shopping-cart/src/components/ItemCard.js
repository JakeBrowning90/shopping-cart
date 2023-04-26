function ItemCard(props) {
  const { item, handleQuantityChange, onClick } = props;

    return (
      <div className="ItemCard">
        <div>{item.img}</div>
        <div>{item.desc}</div>
        <div>Qty
          <input 
            name="cardCount" 
            type="number" 
            min="0"
            data-key={item.key}
            onChange={handleQuantityChange} 
            value={item.cardCount}
          />
        </div>
        <div>
          <button data-key={item.key} onClick={onClick}>Add to cart</button>
        </div>
      </div>
    );
  }
  
  export default ItemCard;
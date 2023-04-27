function ItemCard(props) {
  const { item, handleQuantityChange, onClick } = props;

    return (
      <div className="ItemCard">
        <img src={item.img} className='itemImg'/>
        <div>{item.desc}</div>
        <div>Quantity:
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
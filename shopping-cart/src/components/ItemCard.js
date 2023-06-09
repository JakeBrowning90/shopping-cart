import Bell from "./img/bells.png";

function ItemCard(props) {
  const { item, handleQuantityChange, onClick } = props;

    return (
      <form className="ItemCard">
        <img src={item.img} className='itemImg' alt="flowerImg"/>
        <div className='itemDesc'>{item.desc}</div>
        <div className='itemPrice'>
          Price: 
          <img src={Bell} className="bellIcon" alt="bellImg"/>
          {item.price}
        </div>
        <div className='itemQuantity'>Qty: 
          <input 
            name="cardCount" 
            type="number" 
            min="0"
            max="99"
            data-key={item.key}
            onChange={handleQuantityChange} 
            value={item.cardCount}
            placeholder="0 - 99"
          />
        </div>
        <div className='itemAdd'>
          <button type="button" data-key={item.key} onClick={onClick}>Add to cart</button>
        </div>
      </form>
    );
  }
  
  export default ItemCard;
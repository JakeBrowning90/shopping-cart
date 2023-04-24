function ItemCard(props) {
  const { item } = props;

    return (
      <div className="ItemCard">
        <div>{item.img}</div>
        <div>{item.desc}</div>
        <div>Qty
          <input type="number" min="0"/>
        </div>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    );
  }
  
  export default ItemCard;
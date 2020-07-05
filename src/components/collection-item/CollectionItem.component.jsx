import React from "react";
import "./collection-item.style.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  // console.log(item);
  console.log(addItem);
  const { name, price, imageUrl } = item;
  return (
    <div className="collection__item">
      <figure
        className="collection__figure"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></figure>
      <figcaption>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </figcaption>
      <div className="collection__item-button">
        <button onClick={() => addItem(item)} className="btn btn-white">
          Add to cart
        </button>
        
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  addItem: (item) => dispach(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from "react";
import "./collection-item.style.scss";
const CollectionItem = ({ item }) => {
  console.log(item);
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
    </div>
  );
};

export default CollectionItem;

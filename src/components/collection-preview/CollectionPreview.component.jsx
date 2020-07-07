import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/CollectionItem.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection__preview">
      <h3
        className="collection__title"
        // onClick={() => history.push(`${match.path}/${title}`)}
      >
        {title}
      </h3>

      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default CollectionPreview;

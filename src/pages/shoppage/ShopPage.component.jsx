import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import "./shop-page.styles.scss";
import photo1 from "../../img/photo1.jpg";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";
class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop__page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

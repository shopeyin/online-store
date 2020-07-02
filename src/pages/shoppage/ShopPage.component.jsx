import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./shop-page.styles.scss";
import { selectCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop__page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

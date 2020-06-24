import React, { Component } from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <figure className="menu__images">
      {" "}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </figure>
  );
};

export default MenuItem;

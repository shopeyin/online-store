import React from "react";
import "./header.style.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/Cart-dropdown.component";
const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="header-primary">
          <span className="header-primary--main">New Fashion</span>
          <span className="header-primary--sub">get your exquisite wears</span>
        </h1>
        <a href="#" className="btn btn-text">
          View more wears &rarr;
        </a>
      </div>
    </header>
  );
};

export default Header;

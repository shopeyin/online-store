import React from "react";
import "./header.style.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="header-primary">
          <span class="header-primary--main">Men Fashion</span>
          <span class="header-primary--sub">get your exquisite wears</span>
        </h1>
        <a href="#" className="btn btn-text">
          View more wears &rarr;
        </a>
      </div>
    </header>
  );
};

export default Header;

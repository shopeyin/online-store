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
        <button className="btn">View our wears</button>
      </div>
    </header>
  );
};

export default Header;

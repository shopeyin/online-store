import React from "react";
import "./navbar.styles.scss";
import { auth } from "../../components/firebase/firebase.utils";
import { Link } from "react-router-dom";
const Navbar = ({ currentUser }) => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              <span>01</span>
              Home
            </Link>
          </li>
          <li className="navigation__item">
            {currentUser ? (
              <div className="navigation__link" onClick={() => auth.signOut()}>
                <span>02</span>
                Logout
                {currentUser.displayName}
              </div>
            ) : (
              <Link className="navigation__link" to="/login">
                <span>02</span>
                Login
              </Link>
            )}
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/signup">
              <span>03</span>
              Signup
            </Link>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

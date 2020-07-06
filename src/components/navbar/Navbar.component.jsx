import React from "react";
import "./navbar.styles.scss";

import { auth } from "../../components/firebase/firebase.utils";

import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  unCheck(i) {
    let ref = "ref_" + i;
    this.refs[ref].checked = !this.refs[ref].checked;
  }

  render() {
    return (
      <div className="navigation">
        {[1].map((item, i) => {
          return (
            <div>
              <input
                type="checkbox"
                className="navigation__checkbox"
                id="navi-toggle"
                ref={"ref_" + i}
              />
              <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
              </label>
              <div className="navigation__background">&nbsp;</div>
              <nav className="navigation__nav">
                <ul className="navigation__list">
                  <li className="navigation__item">
                    <NavLink
                      className="navigation__link"
                      activeClassName=""
                      to="/"
                      onClick={() => this.unCheck(i)}
                    >
                      <span>01</span>
                      Home
                    </NavLink>
                  </li>
                  <li className="navigation__item">
                    {this.props.currentUser ? (
                      <Link
                        className="navigation__link"
                        to="/"
                        onClick={() => {
                          auth.signOut();
                          this.unCheck(i);
                        }}
                      >
                        <span className="navigation__link">02</span>
                        Logout
                        {this.props.currentUser.displayName}
                      </Link>
                    ) : (
                      <li>
                        <Link
                          className="navigation__link"
                          onClick={() => this.unCheck(i)}
                          to="/login"
                        >
                          <span>02</span>
                          Login
                        </Link>
                        <li className="navigation__item">
                          <Link
                            className="navigation__link"
                            onClick={() => this.unCheck(i)}
                            to="/signup"
                          >
                            <span>03</span>
                            Signup
                          </Link>
                        </li>
                      </li>
                    )}
                  </li>

                  <li className="navigation__item">
                    <Link
                      className="navigation__link"
                      onClick={() => this.unCheck(i)}
                      to="/shop"
                    >
                      <span>04</span>
                      Shop
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);

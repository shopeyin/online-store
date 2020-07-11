import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase.utils";
import Navbar from "./components/navbar/Navbar.component";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/Homepage.component";
import LoginPage from "./pages/loginpage/LoginPage.component";
import SignUpPage from "./pages/signuppage/SignUpPage.component";
import CheckoutPage from "./pages/checkout/CheckoutPage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";

import CartIcon from "../src/components/cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../src/components/cart-dropdown/Cart-dropdown.component";
import { selectCartHidden } from "../src/redux/cart/cart.selectors";
import { selectCurrentUser } from "../src/redux/user/user.selectors";
import { checkUserSession } from "../src/redux/user/user.action";
import { Lines } from "react-preloaders";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(`this is the ${this.props.currentUser}`);
    return (
      <div className="App">
        <Lines />
        <CartIcon />

        {this.props.hidden ? null : <CartDropdown />}

        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpPage />
            }
          />

          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

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

import { setCurrentUser } from "./redux/user/user.action";
import CartIcon from "../src/components/cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../src/components/cart-dropdown/Cart-dropdown.component";
import { selectCartHidden } from "../src/redux/cart/cart.selectors";
import { selectCurrentUser } from "../src/redux/user/user.selectors";
import { Lines } from "react-preloaders";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          // console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Lines animation="slide" />
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./components/firebase/firebase.utils";
import Navbar from "./components/navbar/Navbar.component";

import HomePage from "./pages/homepage/Homepage.component";
import LoginPage from "./pages/loginpage/LoginPage.component";
import SignUpPage from "./pages/signuppage/SignUpPage.component";
import ShopPage from "./pages/shoppage/ShopPage.component";
import Footer from "./components/footer/Footer.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user.displayName);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    // `console.log(`this is ${currentUser.displayName}`);`
    return (
      <div className="App">
        <Navbar currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

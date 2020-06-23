import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.component";
import Body from "./components/body/Body.component";
import HomePage from "./pages/homepage/Homepage.component";
import LoginPage from "./pages/loginpage/LoginPage.component";
import SignUpPage from "./pages/signuppage/SignUpPage.component";
import Footer from "./components/footer/Footer.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

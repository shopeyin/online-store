import React from "react";
import "./signup.style.scss";

import {
  auth,
  createUserProfileDocument,
} from "../../components/firebase/firebase.utils";

class SignUpPage extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      console.log(`this is ${user} and ${displayName}`);

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signup__container">
        <div className="signup__background">
          <div className="signup__form">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="signup__header">
                <h3>Join the app</h3>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={this.handleChange}
                  className="form__input"
                  placeholder="DisplayName"
                  id="displayName"
                  required
                />
                <label htmlFor="displayName" className="form__label">
                  Display Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className="form__input"
                  placeholder="Email"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className="form__input"
                  placeholder="Password"
                  id="password"
                  required
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <div className="form__group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  className="form__input"
                  placeholder="Confirm Password"
                  id="password2"
                  required
                />
                <label htmlFor="Confirmpassword" className="form__label">
                  Confirm Password
                </label>
              </div>
              <div className="form__group">
                <button className="btn" type="submit">
                  SIGN UP &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;

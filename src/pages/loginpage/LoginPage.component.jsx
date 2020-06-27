import React from "react";
import "./login.style.scss";
import {
  auth,
  signInWithGoogle,
} from "../../components/firebase/firebase.utils";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="login-container">
        <div className="login__background">
          <div className="login__form">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="login__header">
                <h3>Login to your account</h3>
              </div>
              <div className="form__group">
                <input
                  name="email"
                  type="email"
                  value={this.state.email}
                  className="form__input"
                  placeholder="Email"
                  id="email"
                  onChange={this.handleChange}
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group">
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  className="form__input"
                  placeholder="Password"
                  onChange={this.handleChange}
                  id="password"
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <div className="form__group">
                <button className="btn" type="submit">
                  Submit &rarr;
                </button>
                <button className="btn" onClick={signInWithGoogle}>
                  Sign In with Googgle &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

import React from "react";
import "./login.style.scss";
const LoginPage = (props) => {
  console.log("this" + props);
  return (
    <div className="login-container">
      <div className="login__background">
        <div className="login__form">
          <form action="#" className="form">
            <div className="login__header">
              <h3>Login to your account</h3>
            </div>
            <div className="form__group">
              <input
                type="email"
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
              <button className="btn">Submit &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

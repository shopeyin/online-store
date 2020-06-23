import React from "react";
import "./signup.style.scss";
const SignUpPage = () => {
  return (
    <div className="signup__container">
      <div className="signup__background">
        <div className="signup__form">
          <form action="#" className="form">
            <div className="signup__header">
              <h3>Join the app</h3>
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
              <input
                type="password"
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
              <button className="btn">Submit &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

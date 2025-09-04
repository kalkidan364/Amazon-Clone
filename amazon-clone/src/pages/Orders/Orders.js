import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from './Orders.module.css'
const Orders = () => {
  return (
    <LayOut>
      <div className={classes.login}>
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className={classes.login__logo}
        />

        {/* Login Box */}
        <div className={classes.login__container}>
          <h1>Sign in</h1>

          {/* Input */}
          <label>Email or mobile phone number</label>
          <input type="text" />

          {/* Continue Button */}
          <button className={classes.login__continue}>Continue</button>

          {/* Info text */}
          <p>
            By continuing, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>
            .
          </p>

          <a href="#" className={classes.login__help}>
            Need help?
          </a>
        </div>

        {/* Divider */}
        <div className={classes.login__divider}>
          <hr />
          <span>New to Amazon?</span>
          <hr />
        </div>

        {/* Create Account Button */}
        <button className={classes.login__register}>Create your Amazon account</button>
      </div>
    </LayOut>
  );
};

export default Orders;

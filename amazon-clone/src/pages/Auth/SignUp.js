import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useState } from "react";
import classes from './SignUp.module.css'
const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${email}`);
  };
  return (
    <LayOut>
      <div className={classes.login_container}>
        <div className={classes.login_box}>
          {/* Amazon logo */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className={classes.login_logo}
          />

          <h2>Sign in or create account</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter mobile number or email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Continue</button>
          </form>

          <p className={classes.terms}>
            By continuing, you agree to Amazon's{" "}
            <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>
            .
          </p>

          <a href="#" className={classes.help_link}>
            Need help?
          </a>

          <hr />

          <p className="business-text">Buying for work?</p>
          <a href="#" className={classes.business_link}>
            Create a free business account
          </a>

          <footer>
            <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> |{" "}
            <a href="#">Help</a>
            <p>© 1996–2025, Amazon.com, Inc. or its affiliates</p>
          </footer>
        </div>
      </div>
    </LayOut>
  );
};

export default SignUp;

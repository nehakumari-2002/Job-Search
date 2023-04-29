import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="container">
      <div className="registration form">
        <header>Signup</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Create a password" />
          <input type="password" placeholder="Confirm your password" />
          <input type="button" className="button" value="Signup" />
        </form>
        <div className="signup">
          <span className="signup">
            Already have an account?
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

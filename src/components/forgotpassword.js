import React from "react";
import { Link } from "react-router-dom";

export default function Forgotpassword() {
  return (
    <div className="container">
      <div className="forgotPassword form">
        <header>Reset Password</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="button" className="button" value="Send Login Link" />
        </form>

        <div className="signup">
          <span className="signup">
            Don't have an account?
            <Link to="/register">Signup</Link>
          </span>
        </div>

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

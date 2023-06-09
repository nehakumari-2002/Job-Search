import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="login form">
        <header>Login</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <Link to="/forgot-password">Forgot password?</Link>
          <input
            type="button"
            onClick={() => {
              localStorage.setItem("token", "true");
              dispatch({
                type: "login",
                payload: {
                  isLoggedIn: true,
                },
              });
            }}
            className="button"
            value="Login"
          />
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account?
            <Link to="/register">Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

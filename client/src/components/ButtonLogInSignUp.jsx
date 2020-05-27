import React from "react";
import { Link } from "react-router-dom";
  
function ButtonLogInSignUp() {
  return (
    <div>
      <div className="sign-up-button">
        <Link to="/login" className="btn btn-sm btn-outline-secondary">
          Log In
        </Link>
      </div>
      <div className="sign-up-button">
        <Link to="/register" className="btn btn-sm btn-secondary">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default ButtonLogInSignUp;

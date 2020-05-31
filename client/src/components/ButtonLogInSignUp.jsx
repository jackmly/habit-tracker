import React from "react";
  
function ButtonLogInSignUp() {
  return (
    <div>
      <div className="sign-up-button">
        <a href="/login" className="btn btn-sm btn-outline-secondary">
          Log In
        </a>
      </div>
      <div className="sign-up-button">
        <a href="/register" className="btn btn-sm btn-secondary">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default ButtonLogInSignUp;

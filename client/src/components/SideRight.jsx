import React from "react";
import ButtonLogInSignUp from "./ButtonLogInSignUp";

function SideRight(props) {
  return (
      <div className="side-right">
        {props.userStatus.loggedIn ? (
          <p>{props.userStatus.username}</p>
        ) : (
          <ButtonLogInSignUp />
        )}
      </div>
  );
}

export default SideRight;

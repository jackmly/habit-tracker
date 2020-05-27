import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function LogOut(props) {
  const [redirectTo, setRedirectTo] = useState(null);

  function onLogOut() {
    axios
      .get("api/logout")
      .then(function (response) {
        console.log("logout response: ", response);
        props.updateUser({ loggedIn: false, username: null });
        setRedirectTo("/");
      })
      .catch(function (err) {
        console.log("logout response: ", err);
      });
  }

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <button className="logout" onClick={onLogOut} className="dropdown-item">
        <p>Log out</p>
      </button>
    );
  }
}
export default LogOut;

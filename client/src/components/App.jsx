import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Register from "./Register";
import LogIn from "./LogIn";

function App() {
  axios.defaults.withCredentials = true;

  const [userStatus, setUserStatus] = useState({
    loggedIn: false,
    username: null,
  });

  useEffect(() => {
    getUser();
  }, []);

  function updateUser(obj) {
    setUserStatus(obj);
    console.log("new user status: ", userStatus);
  }

  function getUser() {
    axios("/api", {
      method: "get",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001",
      },
    }).then((response) => {
      console.log("Get user response: ", response.data);
      if (response.data.user) {
        setUserStatus({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Not logged in");
      }
    });
  }

  return (
    <div>
      <Route
        path="/"
        exact
        render={() => <Home userStatus={userStatus} updateUser={updateUser} />}
      />
      <Route
        path="/login/"
        render={() => (
          <LogIn onUpdate={updateUser} username={userStatus.username} />
        )}
      />
      <Route path="/register/" component={Register} />
    </div>
  );
}

export default App;

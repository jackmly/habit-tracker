import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import Register from "./Register";
import LogIn from "./LogIn";

function App() {

  axios.defaults.withCredentials = true;

  const [userStatus, setUserStatus] = useState({loggedIn: false, username: null});

  function updateUser(obj){
    setUserStatus(obj);
    console.log("new user status: ", userStatus);
  }

    axios("http://localhost:3001/api", {
      method: "get",
      withCredentials: true,
      headers:{'Content-Type': 'application/json', "Access-Control-Allow-Origin": "http://localhost:3001/api"}
    })
    .then(response => {
      console.log("Get user response: ", response.data);
      if (response.data.user) {
        setUserStatus({
          loggedIn: response.data.success,
          username: response.data.user.username
        });
      } else {
        console.log("Not logged in");
      }
    });

  return (
    <div><h5>Hi {userStatus.username}</h5>
        <Router>
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/login/"  render={() =>
            <LogIn
              onUpdate={updateUser}
              username = {userStatus.username}
            />}
          />
          <Route path="/register/"  component = {Register} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

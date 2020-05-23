import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import LogIn from "./LogIn";


// const [loggedInStatus, setUserStatus] = useState({loggedInStatus: "NOT LOGGED IN", user: {}});

function App() {
  return (
    <div>
        <Router>
        <Switch>
          <Route 
            path="/"
            exact
            component = {Home}
          />
          <Route path="/login/"  component = {LogIn} />
          <Route path="/register/"  component = {Register} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

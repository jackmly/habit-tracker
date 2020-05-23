import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import LogIn from "./LogIn";

function App() {
  return (
    <div>
        <Router><Route path="/" exact component = {Home} /></Router>
        <Router><Route path="/login" exact component = {LogIn} /></Router>
        <Router><Route path="/register" exact component = {Register} /></Router>
    </div>
  );
}

export default App;

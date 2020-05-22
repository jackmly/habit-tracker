import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Tracker from "./Tracker";
import LogTime from "./LogTime";

function App() {
  return (
    <div className="parent">
        <Router><Route path="/" exact component = {LogTime} /></Router>
        <Router><Route path="/" exact component = {Tracker} /></Router>

    </div>
  );
}

export default App;

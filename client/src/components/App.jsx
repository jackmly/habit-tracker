import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Table from "./Table";
import LogTime from "./LogTime";

function App() {
  return (
    <div className="parent">
        <LogTime />
        <Router><Route path="/" exact component = {Table} /></Router>
    </div>
  );
}

export default App;

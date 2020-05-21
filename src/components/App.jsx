import React, { useState } from "react";
import SingleButton from "./SingleButton";
import Table from "./Table";
import LogTime from "./LogTime";

function App() {
  return (
    <div className="parent">
    <div className="left-container">
      <LogTime />
    </div>
    <div className="container">
      {/* <SingleButton /> */}
      <Table />
    </div>
    </div>
  );
}

export default App;

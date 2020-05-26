import React from "react";
import Tracker from "./Tracker";
import Sidebar from "./Sidebar";

function Home(props) {
  return (
    <div>
      <Sidebar userStatus={props.userStatus} updateUser={props.updateUser} />
      <div className="container-home">
        <Tracker />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import SideLeft from "./SideLeft";
import SideRight from "./SideRight";
import SideMain from "./SideMain";



function Home(props) {
  return (
    <div className="wrapper">
      <SideLeft userStatus={props.userStatus} updateUser={props.updateUser} />
      <SideMain />
      <SideRight userStatus={props.userStatus} updateUser={props.updateUser} />
    </div>
  );
}

export default Home;

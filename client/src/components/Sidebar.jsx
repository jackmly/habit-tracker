import React from "react";
import LogOut from "./LogOut";
import ButtonLogInSignUp from "./ButtonLogInSignUp";

function Sidebar(props) {

  return(
  <div>
    <div className="side-left">
      <ul className="menu">
        <li className="logo">
          <a className="logo">Habit Tracker</a>
        </li>

        <li className="menu-item">
          <button className="menu-link">
            <i className="sidebar fa fa-home"></i>
          </button>
        </li>

        <li className="menu-item">
          <button className="menu-link">
            <i className="sidebar fa fa-plus"></i>
          </button>
        </li>

        <li className="menu-item">
          <button className="menu-link active">
            <i className="sidebar fa fa-cog"></i>
          </button>
        </li>

        <li className="menu-item">
          <button className="menu-link">
            <i className="sidebar fa fa-bell"></i>
          </button>
        </li>
        <li className="menu-item">
          <button className="menu-link">
            <i className="sidebar fa fa-sticky-note"></i>
          </button>
        </li>

        <li className="menu-item">
          <button className="menu-link">
            <i className="sidebar fa fa-user" />
          </button>
        </li>
        <li>{props.userStatus.loggedIn ? <LogOut updateUser={props.updateUser}/> : null}</li>
      </ul>
    </div>
    <div className="side-main"></div>

    <div className="side-right">
      {props.userStatus.loggedIn ? (
        "logged in as " + props.userStatus.username
      ) : <ButtonLogInSignUp />}
    </div>
  </div>)
}

export default Sidebar;

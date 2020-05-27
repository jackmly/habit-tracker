import React from "react";
import LogOut from "./LogOut";
import ButtonLogInSignUp from "./ButtonLogInSignUp";

function Sidebar(props) {
  return (
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
            <button className="menu-link dropdown" data-toggle="dropdown">
              <i className="sidebar fa fa-plus"></i>
            </button>
          </li>

          <li className="menu-item">
            <button className="menu-link active">
              <i className="sidebar fa fa-cog"></i>
            </button>
          </li>
          {props.userStatus.loggedIn ? (
        <div>
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
            <div class="dropright">
              <button
                className="menu-link"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="sidebar fa fa-user" />
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Account
                </a>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
                  <LogOut updateUser={props.updateUser} />
              </div>
            </div>
          </li>

          <li>
            
            
          </li>
          </div>) : null}
        </ul>
      </div>
      <div className="side-main"></div>

      <div className="side-right">
        {props.userStatus.loggedIn ? (
          "logged in as " + props.userStatus.username
        ) : (
          <ButtonLogInSignUp />
        )}
      </div>
    </div>
  );
}

export default Sidebar;

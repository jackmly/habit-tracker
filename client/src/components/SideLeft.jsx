import React from "react";
import LogOut from "./LogOut";

function SideLeft(props) {
  return (
      <div className="side-left">
        <ul className="menu">
          <li className="menu-logo">
            <a href="/" className="logo-link">Flowhabit</a>
          </li>

          <li className="menu-item">
            <button className="menu-link">
              <a href="/" className="fa fa-home"></a>
            </button>
          </li>

          <li className="menu-item">
            <button className="menu-link active">
              <i className="fa fa-cog"></i>
            </button>
          </li>
          {props.userStatus.loggedIn ? (
        <div>
          <li className="menu-item">
            <button className="menu-link">
              <i className="fa fa-bell"></i>
            </button>
          </li>
          <li className="menu-item">
            <button className="menu-link">
              <i className="fa fa-sticky-note"></i>
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
                <a class="dropdown-item" href="#"><p>Account</p></a>
                <a class="dropdown-item" href="#"><p>Profile</p></a>
                <p><LogOut updateUser={props.updateUser} /></p>
              </div>
            </div>
          </li>
          </div>) : null}
        </ul>
      </div>
  );
}

export default SideLeft;

import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
function SideNav() {
  return (
    <div>
      {/* <input
        type="checkbox"
        name="hiddenToggleCheckBox"
        id="hiddenToggleCheckBox"
      /> */}
      <div className="sidebar">
        <div className="brand">
          <span className="lab la-affiliatetheme" />
          <h2>Fitin'fit</h2>
          <div>
            <label className="closebtn" htmlFor="hiddenToggleCheckBox">
              <span className="las la-times" />
            </label>
          </div>
        </div>
        <div className="sidemenu">
          <div className="side-user">
            <div className="side-img" />
            <div className="user">
              <small>Trainer</small>
              <p>Let's Start Training</p>
            </div>
          </div>
          <ul className="p-0">
            <li>
              <Link to="/dashboard" className="active">
                <span className="las la-home" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/task" >
                <span className="las la-tasks  " />
                <span>Tasks</span>
              </Link>
            </li>
            <li>
              <Link to="/history">
                <span className="las la-history " />
                <span>History</span>
              </Link>
            </li>
            <li>
              <a href="" >
                <span className="las la-cog " />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <Link to="/" >
                <span className="las la-user-plus " />
                <span>login/sign up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;

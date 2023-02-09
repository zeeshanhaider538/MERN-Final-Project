import React from "react";
import "./../../App.css";
function SideNav() {
  return (
    <div>
      <input
        type="checkbox"
        name="hiddenToggleCheckBox"
        id="hiddenToggleCheckBox"
      />
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
              <a href="./index.html" className="active">
                <span className="las la-home" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="" >
                <span className="las la-tasks  " />
                <span>Tasks</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-history " />
                <span>History</span>
              </a>
            </li>
            <li>
              <a href="" >
                <span className="las la-cog " />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="./login.html" >
                <span className="las la-user-plus " />
                <span>login/sign up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;

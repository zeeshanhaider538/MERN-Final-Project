import React from 'react'
import "./../../App.css";
function Header() {
  return (
    <div className="main-content">
      <header className='hd'>
        <label htmlFor="hiddenToggleCheckBox" className="menu-toggle">
          <span className="las la-bars" />
        </label>
        <div className="search">
          <span className="las la-search" />
          <input type="search" name="search" id="search" placeholder="Enter Keyword" />
        </div>
        <div className="head-icons">
          <span className="las la-bell" />
          <span className="las la-bookmark" />
          <span className="las la-comment" />
        </div>
      </header>
    </div>
   
  )
}

export default Header
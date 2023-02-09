import React from 'react'
import Nav from '../../HomeHeader/Nav'
import "./LogIn.css"
function LogIn() {
  return (
    <div>
      <Nav/>
    <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>User Email</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
        </form>
      </div>
    </div>
  )
}

export default LogIn
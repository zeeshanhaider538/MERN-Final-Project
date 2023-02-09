import React from 'react'
import Nav from '../../HomeHeader/Nav'
import "../LogIn/LogIn.css"
function SignUp() {
  return (
    <div>
        <Nav/>
    <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="email" name required />
            <label>Email</label>
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

export default SignUp
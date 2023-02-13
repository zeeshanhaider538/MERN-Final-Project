import React, { useState } from 'react'
import Nav from '../../HomeHeader/Nav'
import "../LogIn/LogIn.css"
function SignUp() {
  const [input,setInput]=useState({name:"",email:"",password:""});
  const handler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    // console.log("name is : " , name)
    // console.log("value is :" , value)
    setInput({...input,[name]:value});
  };
  console.log(input);
  return (
    <div>
        <Nav/>
    <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="user-box">
            <input type="text" name="name" value={input.name} required onChange={handler}/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="email" name="email" value={input.email} required onChange={handler}/>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={input.password} required onChange={handler}/>
            <label>Password</label>
          </div>
          <button >
            <span />
            <span />
            <span />
            <span />
            Submit
          </button>
          {/* <button type="submit"  >Submit</button> */}
        </form>
      </div>
    </div>
  )
}

export default SignUp
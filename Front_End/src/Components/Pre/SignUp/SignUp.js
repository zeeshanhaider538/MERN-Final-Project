import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../HomeHeader/Nav";
import "../LogIn/LogIn.css";
function SignUp() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log("name is : " , name)
    // console.log("value is :" , value)
    setInput({ ...input, [name]: value });
  };
  // console.log(input);
  async function post() {
    // let user=await axios.post("http://127.0.0.1:4000/",{body:JSON.stringify(input)}).then((res)=>{console.log(res)},(err)=>{console.log(err)})
    // console.log(input);
    // let res = await fetch("http://127.0.0.1:4000/", {
    //   method: "POST",
    //   body: JSON.stringify(input),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // }).then(() => {
    //   console.log("success");
    // });
    // console.log("clicked submit");
    try {
      await axios.post("http://127.0.0.1:4000/", input, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log("success");
    } catch (error) {
      console.error(error.message);
    }
    console.log("clicked submit");
    navigate("/dashboard");
    setInput("");
  }
  return (
    <div>
      <Nav />
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="user-box">
            <input
              type="text"
              name="name"
              value={input.name}
              required
              onChange={handler}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={input.email}
              required
              onChange={handler}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={input.password}
              required
              onChange={handler}
            />
            <label>Password</label>
          </div>
          <button onClick={() => post()}>
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
  );
}

export default SignUp;

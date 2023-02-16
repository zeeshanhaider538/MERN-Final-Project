import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../HomeHeader/Nav";
import "./LogIn.css";
import { Email } from "../../../App";
function LogIn() {
  // let uemail = "";
  const { email, setEmail } = useContext(Email);
  // const [input,setInput] =useState({})
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log("name is : " , name)
    // console.log("value is :" , value)
    setInput({ ...input, [name]: value });
  };
  // console.log(input);
  async function login(email, password) {
    console.log(email);
    try {
      let user = await axios.get(`http://127.0.0.1:4000/login/${email} `, {
        responseType: "json",
      });
      let a = user.data;
      // console.log(a);
      // console.log(user.data[0].password);
      if (a.length > 0) {
        if (user.data[0].password === password) {
          navigate("/dashboard");
        setEmail(email);
        } else {
          alert("please enter correct password");
        }
      } else {
        alert("Please create a new account");
      }
    } catch (error) {
      console.log(error);
    }
  }
  // setEmail(uemail);
  return (
    <div>
      <Nav />
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="user-box">
            <input
              type="text"
              name="email"
              value={input.email}
              required
              onChange={handler}
            />
            <label>User Email</label>
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
          <button onClick={() => login(input.email, input.password)}>
            <span />
            <span />
            <span />
            <span />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;

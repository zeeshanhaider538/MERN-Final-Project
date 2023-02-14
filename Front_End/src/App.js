import All from "./All";
import axios from "axios";
import Header from "./Components/Header/Header";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import LogIn from "./Components/Pre/LogIn/LogIn";
import SideNav from "./Components/SideNav/SideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Pre/Home/Home";
import Form from "./Components/Form/Form";
import Dform from "./Components/DForm/Dform";
import Modal from "./Components/Modal/Modal";
import SignUp from "./Components/Pre/SignUp/SignUp";
import { createContext, useEffect, useState } from "react";
export const Email=createContext();
function App() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const api = async () => {
    let a = await axios.get("http://127.0.0.1:4000/dis", {
      responseType: "json",
    });
    // a = await a.json();
    // setData(a);
    console.log(a.data);
  };
  useEffect(() => {
    console.log("effext");
    api();
  });
  return (
    <div className="App">
      {/* <SideNav/>
      <Header/> */}
      {/* <All/> */}
      {/* <HomeHeader/> */}
      <Email.Provider value={{setEmail,email}}>
      <Router>
        <Routes>
          <Route path="/addNewTask" element={<Dform />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/" element={<HomeHeader />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      </Email.Provider>
      {/* <Home/> */}
      {/* <All/> */}
      {/* <Dform/> */}
      {/* <Modal/> */}
    </div>

  );
}

export default App;

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
import Tasks from "./Components/Tasks/Tasks";
import History from "./Components/History/History";
export const Email = createContext();
function App() {
  const [data, setData] = useState([]);
  const [eml, setEmail] = useState([]);
  const [activity, setActivity] = useState([]);
  const [editactivity, setEditActivity] = useState({});
  const api = async () => {
    // let a = await axios.get("http://127.0.0.1:4000/dis", {
    //   responseType: "json",
    // });
    let a = await fetch("http://127.0.0.1:4000/dis", { method: "get" });
    a = await a.json();
    setData(a);
    // console.log(data);
  };
  const activities = async () => {
    let a = await axios.get("http://127.0.0.1:4000/activities", {
      responseType: "json",
    });
    // a = await a.json(); setData("hellow");
    // setData(a);
    // let d = a.data;
    setActivity(a.data);
    // console.log(a.data);
    // console.log(activity);
  };

  useEffect(() => {
    console.log("effext");
    api();
    activities();
  }, []);
  // setData("dsfasf");
  // console.log("new", activity);
  return (
    <div className="App">
      {/* <SideNav/>
      <Header/> */}
      {/* <All/> */}
      {/* <HomeHeader/> */}
      <Email.Provider
        value={{
          setEmail,
          eml,
          activity,
          setActivity,
          editactivity,
          setEditActivity,
        }}
      >
        <Router>
          <Routes>
            <Route path="/addNewTask" element={<Dform />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/" element={<HomeHeader />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/task" element={<Tasks />} />
            <Route path="/history" element={<History />} />
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

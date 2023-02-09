import All from "./All";
import Header from "./Components/Header/Header";
import HomeHeader from "./Components/HomeHeader/HomeHeader";
import LogIn from "./Components/Pre/LogIn/LogIn";
import SideNav from "./Components/SideNav/SideNav";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";

import Home from "./Components/Pre/Home/Home";
import Form from "./Components/Form/Form";
import Dform from "./Components/DForm/Dform";
import Modal from "./Components/Modal/Modal";
function App() {
  return (
    <div className="App">
      {/* <SideNav/>
      <Header/> */}
      {/* <All/> */}
      {/* <HomeHeader/> */}
      <Router>
        <Routes>
          <Route path="/addNewTask" element={<Dform/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      {/* <Home/> */}
      {/* <All/> */}
    {/* <Dform/> */}
    {/* <Modal/> */}
      
    </div>
  );
}

export default App;

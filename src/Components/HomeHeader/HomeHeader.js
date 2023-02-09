import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LogIn from '../Pre/LogIn/LogIn'
import "./HomeHeader.css"
import Nav from './Nav'
import Section from './Section'
function HomeHeader() {
  return (
    <div className='head'>
      <Nav/>
      
      <div className='sec'>
      <div className='d-flex justify-content-center align-content-center'>
      <span className='display-1' style={{color:"orange"}}> Welcome to <span style={{fontFamily: "Lobster",}}>Fitin'Fit</span></span>
      </div>
      <Section/>
      {/* <Router>
        <Routes>
          <Route path='/logIn' element={<LogIn/>}/>
        </Routes>
      </Router> */}
      </div>
    </div>
  )
}

export default HomeHeader
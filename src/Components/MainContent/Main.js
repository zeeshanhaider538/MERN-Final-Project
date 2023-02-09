import React from 'react'
import AddTask from '../AddTask/AddTask'
import CardSec from '../CardSec/CardSec'
import Chart from '../Chart/Chart'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import "./../../App.css"
function Main() {
  return (
    <div>
      <input type="checkbox" name="hiddenToggleCheckBox" id="hiddenToggleCheckBox"></input>
    <div className="main-content">
      <Header/>
      <main style={{margin:"0"}}>
      <AddTask/>
      <CardSec/>
      <Chart/>
      </main>
      <Modal/>

    </div>
    </div>
      
  )
}

export default Main
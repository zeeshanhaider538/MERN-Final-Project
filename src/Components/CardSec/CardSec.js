import React from 'react';
import "./../../App.css";
function CardSec() {
  return (
    <div className="cards">
              <div className="card">
                <div className="checkbox-completed-task">
                  <input type="checkbox" name="completeTask" id="completeTask" />
                  <span />
                </div>
                <label htmlFor="completeTask" className="compleLabel">Mark as Completed</label>
                <div className="card-icon">
                  <span className="las la-running" />
                </div>
                <div className="edit-button" data-toggle="modal" data-target="#Insert-Modal">
                  <span className="las la-edit" />  
                </div>
                <div className="card-info">
                  <h2>Running</h2>
                  <small>Tasks</small>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <span className="las la-walking" />
                </div>
                <div className="edit-button" data-toggle="modal" data-target="#Insert-Modal">
                  <span className="las la-edit" />  
                </div>
                <div className="card-info">
                  <h2>Walking</h2>
                  <small>Tasks</small>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <span className="las la-biking" />
                </div>
                <div className="edit-button" data-toggle="modal" data-target="#Insert-Modal">
                  <span className="las la-edit" />  
                </div>
                <div className="card-info">
                  <h2>Cycling</h2>
                  <small>Tasks</small>
                </div>
              </div>
            </div>
            
  )
}

export default CardSec
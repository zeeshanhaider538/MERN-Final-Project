import React from "react";
import "../../App.css";
import SideNav from "../SideNav/SideNav";
function Tasks() {
  return (
    <div>
      <div className="col-3">
        <SideNav />
      </div>
      <div style={{ width: "80%", float: "right", marginRight:"1%" }}>
        <div className="card mt-3">
          <div className="card-icon">
            <span className="las la-biking" />
          </div>
          <div
            className="edit-button"
            data-toggle="modal"
            data-target="#Insert-Modal"
          >
            <span className="las la-edit" />
          </div>
          <div className="card-info">
            <h2>Cycling</h2>
            <small>Tasks</small>
          </div>
        </div>
        

        
      </div>
    </div>
  );
}

export default Tasks;

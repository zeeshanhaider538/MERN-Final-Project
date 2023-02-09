import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
function AddTask() {
  return (
    <div className="addtask">
      <div
        className="row w-100 justify-content-center"
        style={{ marginBottom: "10px" }}
      >
        <h3 className="text-white">
          <q>What seems impossible today will one day become your warm-up</q>
        </h3>
      </div>
      <Link to="/addNewTask" className="text-decoration-none" >
        <button className="addnewtaskbtn btn">Add New Task</button>
      </Link>
    </div>
  );
}

export default AddTask;

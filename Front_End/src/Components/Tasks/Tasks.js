import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import SideNav from "../SideNav/SideNav";
import { Email } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Tasks() {
  const {
    activity,
    editactivity,
    setEditActivity,
    eml,
    editMode,
    setEditMode,
  } = useContext(Email);
  const [userActivity, setUserActivity] = useState([]);
  const navigate = useNavigate();
  // const [ab,setAb]=useState([]);
  // const [ea, setEA] = useState({});
  // console.log(activity);
  // let e = email;
  let a;
  console.log(activity);
  const show = (id, ele) => {
    console.log("here is the id : ", ele);
    // setEditActivity(ele);
    a = ele;
    navigate("/addNewTask");
    setEditMode(true);
    // console.log(editactivity);
    setEditActivity(ele);
  };
  async function del(id) {
    console.log(id);
    let d = await fetch(`http://127.0.0.1:4000/activities/${id}`, {
      method: "Delete",
    }).then(alert("activity deleted"));

    console.log("activities deleted");
  }
  // useEffect(()=>setEditActivity(a),[]);
  return (
    <div>
      <div className="col-3">
        <SideNav />
      </div>
      <div style={{ width: "80%", float: "right", marginRight: "1%" }}>
        {
          activity.map((ele) =>
            ele.email === eml ? (
              <div className="card mt-3">
                <div className="card-icon">
                  {ele.task === "Running" ? (
                    <span className="las la-running" />
                  ) : // <i class="fa-solid fa-person-swimming"></i>
                  ele.task === "Swimming" ? (
                    <span className="las la-swimmer" />
                  ) : ele.task === "Cycling" ? (
                    <span className="las la-biking" />
                  ) : ele.task === "Walking" ? (
                    <span className="las la-walking" />
                  ) : (
                    <span className="las la-hiking" />
                  )}
                </div>
                <div
                  className="edit-button"
                  data-toggle="modal"
                  data-target="#Insert-Modal"
                >
                  {/* <button> */}
                  <span
                    type="button"
                    onClick={() => show(ele._id, ele)}
                    className="las la-edit mr-2"
                  />
                  <span
                    type="button"
                    onClick={() => del(ele._id)}
                    className="las la-trash-alt ml-3"
                  />
                  {/* </button> */}
                </div>
                <div className="card-info">
                  <h2>Task is : {ele.task}</h2>
                  <h4>Duration of task : {ele.duration} min</h4>
                </div>
              </div>
            ) : (
              ""
            )
          )
          // console.log(ele.task)
        }
      </div>
    </div>
  );
}

export default Tasks;

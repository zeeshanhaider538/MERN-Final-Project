import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import SideNav from "../SideNav/SideNav";
import { Email } from "../../App";
function History() {
  const { activity, editactivity, setEditActivity, eml } = useContext(Email);
  const [userActivity, setUserActivity] = useState([]);
  // const [ab,setAb]=useState([]);
  let ab;
  // const [ea, setEA] = useState({});
  // console.log(activity);
  // let e = email;
  console.log(activity);
  async function a() {
    await activity.map((ele) => {
      if (ele.email === eml) {
        setUserActivity([...userActivity, ele]);
        console.log(ele);
      }
      // console.log(email);
    });
  }
  useEffect(() => {
    a();
  }, []);
  console.log(userActivity);
  const show = (id, ele) => {
    console.log("here is the id : ", ele);
    setEditActivity(ele);
  };
  return (
    <div>
      <div className="col-3">
        <SideNav />
      </div>
      <div style={{ width: "80%", float: "right", marginRight: "1%" }}>
        {userActivity.map((ele) => {
          if (ele.email === eml) {
            <div className="card mt-3">
              <div className="card-icon">
                {ele.task === "running" ? (
                  <span className="las la-running" />
                ) : // <i class="fa-solid fa-person-swimming"></i>
                ele.task === "swimming" ? (
                  <span className="las la-swimmer" />
                ) : ele.task === "cycling" ? (
                  <span className="las la-biking" />
                ) : ele.task === "walking" ? (
                  <span className="las la-walking" />
                ) : (
                  <span className="las la-person-hiking" />
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
                  className="las la-edit"
                />
                {/* </button> */}
              </div>
              <div className="card-info">
                <h2>Task is : {ele.task}</h2>
                <small>Duration of task : {ele.duration} min</small>
              </div>
            </div>;
          }
          // console.log(ele.task)
        })}
      </div>
    </div>
  );
}

export default History;

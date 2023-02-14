import React, { useContext } from "react";
import "../../App.css";
import SideNav from "../SideNav/SideNav";
import { Email } from "../../App";
function History() {
  const { activity } = useContext(Email);
  return (
    <div>
      <div className="col-3">
        <SideNav />
      </div>
      <div style={{ width: "80%", float: "right", marginRight: "1%" }}>
        {activity.map((ele) => {
          return (
            <div className="card mt-3">
              <div className="card-icon">
               {ele.task ==="running"? <span className="las la-running" />:"" }
              //  : ele.task ==="swimming" ? <span className="las la-swimming" />:ele.task ==="cycling" ? <span className="las la-biking"/> :<span className="las la-running"/>   }
              </div>
              <div
                className="edit-button"
                data-toggle="modal"
                data-target="#Insert-Modal"
              >
                <span className="las la-edit" />
              </div>
              <div className="card-info">
                <h2>Task is : {ele.task}</h2>
                <small>Duration of task : {ele.duration} min</small>
              </div>
            </div>
            // console.log(ele.task)
          );
        })}
      </div>
    </div>
  );
}

export default History;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./../../App.css";
import "./AddTask.css";
import { Email } from "../../App";
import axios from "axios";
function Form() {
  const { email, setEmail, editactivity, editMode, setEditMode } =
    useContext(Email);
  const [input, setInput] = useState({
    name: "",
    gender: "",
    weight: "",
    heigth: "",
    task: "",
    duration: "",
    date: "",
    email: email,
  });
  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log("name is : " , name)
    // console.log("value is :" , value)
    setInput({ ...input, [name]: value });
  };
  console.log("edit activity", editactivity);
  useEffect(() => {
    if (editMode) {
      setInput(editactivity);
    }
  }, []);

  async function post() {
    if (editMode) {
      if (
        input.name === "" ||
        input.gender === "" ||
        input.weight === "" ||
        input.heigth === "" ||
        input.task === "" ||
        input.duration === "" ||
        input.date === ""
      ) {
        alert("Please enter Complete Data");
      } else {
        let res = await axios
          .put(`http://127.0.0.1:4000/activities/${editactivity._id}`, input, {
            headers: {
              "Content-type": "application/json",
            },
          })
          .then(console.log("Updated"))
          .then(alert("updated"))
          .then(setEditMode(false));
      }
    } else {
      if (
        input.name === "" ||
        input.gender === "" ||
        input.weight === "" ||
        input.heigth === "" ||
        input.task === "" ||
        input.duration === "" ||
        input.date === ""
      ) {
        alert("Please enter Complete Data");
      } else {
        try {
          await axios.post("http://127.0.0.1:4000/task", input, {
            headers: {
              "Content-type": "application/json",
            },
          });
          console.log("success", input);
        } catch (error) {
          console.error(error.message);
        }
        console.log("clicked submit");
        // navigate("/dashboard");
        setInput("");
      }
    }
  }

  console.log(input);
  return (
    //     <div className="form-2-box wow fadeInUp">
    //     <form action method="POST" encType="multipart/form-data">
    //       <div className="modal-body">
    //         <div className="form-group">
    //           <label htmlFor="InputName">Name</label>
    //           <input type="text" name="InputName" className="form-control" id="InputName" placeholder="User Name" />
    //         </div>
    //         <fieldset className="form-group border p-3">
    //           <legend className="w-auto px-2">Description:</legend>
    //           <div className="form-group">
    //             <label htmlFor="userAge">Age:</label>
    //             <input type="number" className="form-control" name="userAge" id="userAge" placeholder="e.g 20" min={15} max={70} />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="userWeight">Weight:</label>
    //             <div className="input-group">
    //               <input type="number" className="form-control" name="userWeight" id="userWeight" aria-describedby="weightHelp" placeholder="e.g 80" min={30} max={200} />
    //               <div className="input-group-append">
    //                 <span className="input-group-text">kg</span>
    //               </div>
    //             </div>
    //             <small className="weightHelp d-block">Note: your weight counted in kilograms</small>
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="userHeight">Height:</label>
    //             <div className=" input-group">
    //               <input type="number" className="form-control" name="userHeight" id="userHeight" aria-describedby="heighttHelp" placeholder="e.g 20" min={15} max={70} />
    //               <div className="input-group-append">
    //                 <span className="input-group-text">cm</span>
    //               </div>
    //             </div>
    //             <small className="weightHelp d-block">Note: Your height measured in cm</small>
    //           </div>
    //           <div className="form-group">
    //             <label className="form-label">Gender:</label>
    //             <div className="form-check-inline">
    //               <label htmlFor="radioOpt1" className="form-check-label ml-2"><input type="radio" name="userGender" className="form-check-input" id="radioOpt1" defaultValue="male" />Male</label>
    //               <label htmlFor="radioOpt2" className="form-check-label ml-2"><input type="radio" name="userGender" className="form-check-input" id="radioOpt2" defaultValue="female" />Female</label>
    //               <label htmlFor="radioOpt3" className="form-check-label ml-2"><input type="radio" name="userGender" className="form-check-input" id="radioOpt3" defaultValue="other" />Others</label>
    //             </div>
    //           </div>
    //         </fieldset>
    //         <div className="form-group">
    //           <label htmlFor="userTasks">Choose your Task</label>
    //           <select id="taskList" className="form-control">
    //             <option value>Please Select</option>
    //             <option value="Running">Running</option>
    //             <option value="Running">Walking</option>
    //             <option value="Cycling">Cycling</option>
    //             <option value="Swimming">Swimming</option>
    //             <option value="Hicking">Hicking</option>
    //           </select>
    //         </div>
    //         <div className="form-group row">
    //           {/* <label for="ExerciseDuration">Duration:</label>
    //                 <input type="range" class="form-control" name="ExerciseDuration" id="ExerciseDuration" value="30" min="10" max="120"> */}
    //           <div className="col-sm-2"><label htmlFor="ExerciseDuration">Duration:</label></div>
    //           <div className="col-sm-6 align-self-center"><input type="range" className="form-control-range" name="range" step={5} min={10} max={120} defaultValue={30} onchange="ExerciseDuration.value=value" /></div>
    //           <div className="input-group col-sm-4">
    //             <input type="text" className="form-control" name="ExerciseDuration" id="ExerciseDuration" placeholder={30} />
    //             <div className="input-group-append">
    //               <span className="input-group-text">min</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="ExerciseDate">Date:</label>
    //           <input type="date" className="form-control" name="ExerciseDate" id="ExerciseDate" />
    //         </div>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //         <button type="submit" name="InsertProduct" className="btn submit-btn">Submit</button>
    //       </div>
    //     </form>
    //   </div>
    <div className="main-content">
      <header>
        <label htmlFor="hiddenToggleCheckBox" className="menu-toggle">
          <span className="las la-bars" />
        </label>
        <div className="search">
          <span className="las la-search" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Enter Keyword"
          />
        </div>
        <div className="head-icons">
          <span className="las la-bell" />
          <span className="las la-bookmark" />
          <span className="las la-comment" />
        </div>
      </header>
      <main>
        {/* Add New Task */}
        <div className="add-task-container ml-4 mt-5">
          <div className="task-heading col-lg-12 align-items-center">
            <h1 className="modal-title">Add New Task</h1>
          </div>
          <div className="row no-gutters mt-2">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {/* <img src="" alt="profile picture"> */}
                  <form action="POST">
                    <h3>Task Details:</h3>
                    <section>
                      <div className="form-group row">
                        <label
                          htmlFor="userAge"
                          className="col-sm-3 col-form-lable mt-3"
                        >
                          Name:
                        </label>
                        <div className="col-sm-9 mt-3">
                          <input
                            type="text"
                            className="form-control"
                            id="userAge"
                            onChange={handler}
                            name="name"
                            value={input.name}
                          />
                        </div>
                        <label
                          htmlFor="userGender"
                          className="col-sm-3 col-form-label mt-3"
                        >
                          Gender:
                        </label>
                        <div className="col-sm-9 mt-3">
                          <input
                            type="text"
                            className="form-control"
                            id="userGender"
                            onChange={handler}
                            name="gender"
                            value={input.gender}
                          />
                        </div>
                        <label
                          htmlFor="userWeight"
                          className="col-sm-3 col-form-lable mt-3"
                        >
                          Weight:
                        </label>
                        <div className="col-sm-9 mt-3">
                          <input
                            type="number"
                            className="form-control"
                            id="userWeight"
                            onChange={handler}
                            name="weight"
                            value={input.weigth}
                          />
                        </div>
                        <label
                          htmlFor="userHeight"
                          className="col-sm-3 col-form-lable mt-3"
                        >
                          Height:
                        </label>
                        <div className="col-sm-9 mt-3">
                          <input
                            type="number"
                            className="form-control"
                            id="userHeight"
                            onChange={handler}
                            name="heigth"
                            value={input.heigth}
                          />
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="form-group row">
                        <label
                          htmlFor="userTasks"
                          className="col-sm-3 col-form-lable"
                        >
                          Select Task:
                        </label>
                        <div className="col-sm-9">
                          <select
                            id="userTasks"
                            // name="userTasks"
                            className="w-100"
                            name="task"
                            value={input.task}
                            onChange={handler}
                          >
                            <option
                              value
                              selected="selected"
                              className="text-grey"
                            >
                              Please Select
                            </option>
                            <option value="Walking">Walking</option>
                            <option value="Running">Running</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Hiking">Hiking</option>
                          </select>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div className="form-group row">
                        <label
                          htmlFor="userAge"
                          className="col-sm-3 col-form-lable mt-3"
                        >
                          Duration:
                        </label>
                        <div className="col-sm-9 mt-3">
                          <input
                            type="number"
                            className="form-control"
                            id="userAge"
                            onChange={handler}
                            name="duration"
                            value={input.duration}
                          />
                        </div>
                        <label
                          htmlFor="userAge"
                          className="col-sm-3 col-form-lable mt-3"
                        >
                          Date:
                        </label>
                        <div className="col-sm-9 mt-3">
                          <input
                            type="date"
                            className="form-control"
                            id="userAge"
                            onChange={handler}
                            name="date"
                            value={input.date}
                          />
                        </div>
                      </div>
                    </section>
                    <div className="d-flex justify-content-between m-3">
                      <div className="row no-gutters justify-content-start">
                        <Link to="/dashboard">
                          <button className="btn">Cancel</button>
                        </Link>
                      </div>
                      <div className="row no-gutters justify-content-end">
                        <Link to="/dashboard">
                          <button onClick={() => post()} className="btn">
                            Submit
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add New Task */}
      </main>
    </div>
  );
}

export default Form;

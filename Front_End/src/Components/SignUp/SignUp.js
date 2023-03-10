import React from "react";
import "../../App.css";
function SignUp() {
  return (
    // <div
    //   className="modal fade"
    //   id="Insert-Modal"
    //   tabIndex={-1}
    //   role="dialog"
    //   aia-label="InsertModalLabel"
    //   aria-hidden="true"
    // >
    <div
      className="modal-dialog modal-dialog-centered"
      style={{ width: "60%" }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title" id="InsertModalLabel">
            Add New Task
          </h3>
          <button
            type="button"
            className="close text-white"
            data-dismiss="modal"
            aria-label="close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        {/* Form Start */}
        <div className="form-2-box wow fadeInUp">
          <form action method="POST" encType="multipart/form-data">
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input
                  type="text"
                  name="InputName"
                  className="form-control"
                  id="InputName"
                  placeholder="User Name"
                />
              </div>
              <fieldset className="form-group border p-3">
                <legend className="w-auto px-2">Description:</legend>
                <div className="form-group">
                  <label htmlFor="userAge">Age:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="userAge"
                    id="userAge"
                    placeholder="e.g 20"
                    min={15}
                    max={70}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userWeight">Weight:</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="userWeight"
                      id="userWeight"
                      aria-describedby="weightHelp"
                      placeholder="e.g 80"
                      min={30}
                      max={200}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">kg</span>
                    </div>
                  </div>
                  <small className="weightHelp d-block">
                    Note: your weight counted in kilograms
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="userHeight">Height:</label>
                  <div className=" input-group">
                    <input
                      type="number"
                      className="form-control"
                      name="userHeight"
                      id="userHeight"
                      aria-describedby="heighttHelp"
                      placeholder="e.g 20"
                      min={15}
                      max={70}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">cm</span>
                    </div>
                  </div>
                  <small className="weightHelp d-block">
                    Note: Your height measured in cm
                  </small>
                </div>
                <div className="form-group">
                  <label className="form-label">Gender:</label>
                  <div className="form-check-inline">
                    <label
                      htmlFor="radioOpt1"
                      className="form-check-label ml-2"
                    >
                      <input
                        type="radio"
                        name="userGender"
                        className="form-check-input"
                        id="radioOpt1"
                        defaultValue="male"
                      />
                      Male
                    </label>
                    <label
                      htmlFor="radioOpt2"
                      className="form-check-label ml-2"
                    >
                      <input
                        type="radio"
                        name="userGender"
                        className="form-check-input"
                        id="radioOpt2"
                        defaultValue="female"
                      />
                      Female
                    </label>
                    <label
                      htmlFor="radioOpt3"
                      className="form-check-label ml-2"
                    >
                      <input
                        type="radio"
                        name="userGender"
                        className="form-check-input"
                        id="radioOpt3"
                        defaultValue="other"
                      />
                      Others
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="form-group">
                <label htmlFor="userTasks">Choose your Task</label>
                <select id="taskList" className="form-control">
                  <option value>Please Select</option>
                  <option value="Running">Running</option>
                  <option value="Running">Walking</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Hicking">Hicking</option>
                </select>
              </div>
              <div className="form-group row">
                {/* <label for="ExerciseDuration">Duration:</label>
                        <input type="range" class="form-control" name="ExerciseDuration" id="ExerciseDuration" value="30" min="10" max="120"> */}
                <div className="col-sm-2">
                  <label htmlFor="ExerciseDuration">Duration:</label>
                </div>
                <div className="col-sm-6 align-self-center">
                  <input
                    type="range"
                    className="form-control-range"
                    name="range"
                    step={5}
                    min={10}
                    max={120}
                    defaultValue={30}
                    onchange="ExerciseDuration.value=value"
                  />
                </div>
                <div className="input-group col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    name="ExerciseDuration"
                    id="ExerciseDuration"
                    placeholder={30}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">min</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="ExerciseDate">Date:</label>
                <input
                  type="date"
                  className="form-control"
                  name="ExerciseDate"
                  id="ExerciseDate"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                name="InsertProduct"
                className="btn submit-btn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Form end */}
      </div>
    </div>
    // </div>
  );
}

export default SignUp;

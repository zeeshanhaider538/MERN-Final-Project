// Express
const express = require("express");
const app = express();
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
app.get("/", (req, res) => res.send("hellow oay jani"));

// import model / schema

const Users = require("./Models/U_Model");

// Mongoose

const Mongoose = require("mongoose");

// Body Parser to convert the raw data to JSON

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Strict Query off
Mongoose.set("strictQuery", false);

// connecting to Data Base
Mongoose.connect("mongodb://127.0.0.1:27017/ExerciseTracker", {
  useNewUrlParser: true,
});
Mongoose.connection.once("open", () => console.log("Connected with DB"));

// // Posting data to db single document

app.post("/", (req, res) => {
  try {
    // console.log(req.body.name);
    if (
      req.body.name !== "" &&
      req.body.email !== "" &&
      req.body.email !== ""
    ) {
      console.log(req.body);
      let user = new Users(req.body);
      user
        .save()
        .then((used) => res.send(used))
        .then(() => res.status(201));
    } else {
      throw new Error("please enter all details");
    }
    // res.status(201)
  } catch (error) {
    // console.log();
    // res.status(403);
    console.log(error);
    // console.log("Please try again & write complete data");
  }
});

// posting multiple data to db  from postman

app.post("/M", (req, res) => {
  try {
    let user = req.body;
    let alluser = user.map((suser) => {
      let auser = new Users(suser);
      return auser.save();
    });
    Promise.all(alluser).then((used) => res.send(used));
  } catch (error) {
    res.status(403);
    console.log(error);
  }
});

// get all the data from db
app.get("/dis", async (req, res) => {
  try {
    // let users=await Users.find({name:{ $regex: /^yar/ }});
    let users = await Users.find({});

    await res.json(users);
  } catch (error) {
    console.log(error);
  }
});

// get a single user with id
app.get("/dis/:id", async (req, res) => {
  try {
    let id = req.params.id;
    // let users=await Users.find({name:{ $regex: /^yar/ }});
    let users = await Users.findById(id);
    {
      if (!users) {
        res.send("user not found");
        // throw new Error("user not found");
      } else {
        res.json(users);
      }
    }
    // await res.json(users);
  } catch (error) {
    console.log(error);
  }
});

// put method for edit the data
app.put("/dis/:id", async (req, res) => {
  try {
    let user = await Users.findById(req.params.id);
    if (!user) {
      //   throw new Error("user not found");
      res.send("user not found");
    } else {
      let updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        message: "user updated successfully",
        user: updatedUser,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// Delete method for delete the data
app.delete("/dis/:id", async (req, res) => {
  try {
    let user = await Users.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new Error("user not found");
      res.send("user not found");
    } else {
      res.json({ message: "user deleted successfully", user: user });
    }
  } catch (error) {
    console.log(error);
  }
});

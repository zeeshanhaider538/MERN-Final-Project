// Express
const express = require("express");
const app = express();
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
app.get("/", (req, res) => res.send("hellow oay jani"));

// For connection between front-end and backend server middleware of express
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

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
      res.status(401).json({ message: "please enter all details" });
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

// get a single user with id
app.get("/login/:email", async (req, res) => {
  try {
    let id = req.params.email;
    // let users=await Users.find({name:{ $regex: /^yar/ }});
    let users = await Users.find({ email: id });
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

// Create connection b/t front end and backend server
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// import Activities  schema

const Activity = require("./Models/Activities");

// post activities
app.post("/task", (req, res) => {
  try {
    // console.log(req.body.name);
    let user = new Activity(req.body);
    user
      .save()
      .then((used) => res.send(used))
      .then(() => res.status(201));
    res
      .status(401)
      .json({ message: "activity added successfully", user: user });
  } catch (error) {
    // res.status(201)
    // console.log();
    // res.status(403);
    console.log(error);
    // console.log("Please try again & write complete data");
  }
});

// posting multiple activities to db  from postman

app.post("/task/M", (req, res) => {
  try {
    let user = req.body;
    let alluser = user.map((suser) => {
      let auser = new Activity(suser);
      return auser.save();
    });
    Promise.all(alluser).then((used) => res.send(used));
  } catch (error) {
    res.status(403);
    console.log(error);
  }
});

// get all the activities from db
app.get("/activities", async (req, res) => {
  try {
    // let users=await Users.find({name:{ $regex: /^yar/ }});
    let users = await Activity.find();
    if (users) {
      res.json(users);
    } else {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
});

// get a single acitvity with id
// app.get("/activities/:id", async (req, res) => {
//   try {
//     let id = req.params.id;
//     // let users=await Users.find({name:{ $regex: /^yar/ }});
//     let users = await Activity.findById(id);
//     {
//       if (!users) {
//         res.send("activity not found");
//         // throw new Error("user not found");
//       } else {
//         res.json(users);
//       }
//     }
//     // await res.json(users);
//   } catch (error) {
//     console.log(error);
//   }
// });

// get all activities of a user with email
app.get("/activities/:email", async (req, res) => {
  try {
    let uemail = req.params.email;
    console.log(uemail);
    // let users=await Users.find({name:{ $regex: /^yar/ }});
    let users = await Activity.find({ email: uemail });
    {
      if (!users) {
        res.send("please add activity first ");
        // throw new Error("User not found");
      } else {
        res.json(users);
      }
    }
    // await res.json(users);
  } catch (error) {
    console.log(error);
  }
  // console.log(req.params.email);
});

// put method for edit the activity of a user
app.put("/activities/:id", async (req, res) => {
  try {
    let user = await Activity.findById(req.params.id);
    if (!user) {
      //   throw new Error("user not found");
      res.send("Activity not found");
    } else {
      let updatedUser = await Activity.findByIdAndUpdate(req.params.id, req.body, {
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
app.delete("/activities/:id", async (req, res) => {
  try {
    let user = await Activity.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new Error("Acitvity  not found");
      res.send("user not found");
    } else {
      res.json({ message: "Activity deleted successfully", user: user });
    }
  } catch (error) {
    console.log(error);
  }
});

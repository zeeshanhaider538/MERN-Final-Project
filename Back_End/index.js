// Express
const express = require("express");
const app = express();
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
app.get("/", (req, res) => res.send("hellow oay jani"))

// Mongoose

const Mongoose=require("mongoose");

// connecting to Data Base
Mongoose.connect("mongodb://127.0.0.1:27017:ExerciseTracker",{useNewUrlParser:true})
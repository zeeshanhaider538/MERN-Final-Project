const mongoose = require("mongoose");
const activity = mongoose.Schema({
    email:{
        type: String,
        required: true,
      },
    name: {
      type: String,
      required: true,
    },
    age:{
        type: Number,
    },
    gender: {
        type: String,
      },
    weight: {
        type: Number,
      },
    heigth: {
        type: Number,
      },
    duration: {
        type: Number,
        required: true,
      },
    task: {
        type: String,
        required: true,
      },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("User Activities", activity);

const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const toDoModel = mongoose.model("Task", toDoSchema);

module.exports = toDoModel;

const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

const toDoModel = mongoose.model("Task", toDoSchema);

module.exports = toDoModel;

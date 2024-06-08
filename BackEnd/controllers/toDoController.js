const toDoModel = require("../models/toDoModel");

//add task contoller
const addTask = async (req, res) => {
  const newTask = new toDoModel(req.body);
  newTask
    .save()
    .then((savedTask) => {
      res.status(201).send(savedTask);
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
};

//getting all the tasks
const fetchAllTasks = async (req, res) => {
  const allTasks = toDoModel
    .find()
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

//delete Task by Id
const deleteTaskById = async (req, res) => {
  const taskId = req.params.id;
  const deleteTask = toDoModel.findByIdAndDelete(taskId);
  deleteTask
    .then((deletedTask) => {
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not Found" });
      }
      res
        .status(200)
        .json({ message: "Task Deleted Successfully", task: deletedTask });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messege: "An error occurred", error: error.message });
    });
};

module.exports = { addTask, fetchAllTasks, deleteTaskById };

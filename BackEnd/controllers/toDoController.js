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

//edit task by Id
const editTaskById = async (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  const editTask = toDoModel.findByIdAndUpdate(taskId, updatedTask, {
    new: true,
  });
  editTask
    .then((editedTask) => {
      if (!editedTask) {
        return res.status(404).json({ message: "Task not Found" });
      }
      res.status(200).json({ messege: "Task Updated Successfully" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ messege: "An Error Occurerd", error: error.message });
    });
};

//mark the task is completed
const taskCompletedById = async (req, res) => {
  const { completed } = req.body;
  const completeTask = toDoModel.findById(req.params.id);
  completeTask
    .then((task) => {
      if (!task) {
        return res.status(404).json({ messege: "Task not found" });
      }
      task.completed = completed;
      return task.save();
    })
    .then((updatedTask) => {
      res.send(updatedTask);
    })
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  addTask,
  fetchAllTasks,
  deleteTaskById,
  editTaskById,
  taskCompletedById,
};

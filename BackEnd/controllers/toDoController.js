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

module.exports = { addTask, fetchAllTasks };

const toDoModel = require("../models/toDoModel");

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

module.exports = { addTask };

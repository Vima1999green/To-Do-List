const express = require("express");
const router = express.Router();
const toDoController = require("../../controllers/toDoController");

router.post("/addTask", toDoController.addTask);

module.exports = router;

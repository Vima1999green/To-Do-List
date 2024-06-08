const express = require("express");
const router = express.Router();
const toDoController = require("../../controllers/toDoController");

router.post("/addTask", toDoController.addTask);
router.get("/getTasks", toDoController.fetchAllTasks);
router.delete("/deleteTask/:id", toDoController.deleteTaskById);
router.put("/editTask/:id", toDoController.editTaskById);
router.put("/completeTask/:id", toDoController.taskCompletedById);

module.exports = router;

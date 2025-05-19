const express = require("express");
const { getALLtasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/todoController");
const router = express.Router();

router.route("/").get(getALLtasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
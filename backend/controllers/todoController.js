const asynchandler = require('express-async-handler');
const Todo = require('../models/todoModel');

const getALLtasks = asynchandler(async (req, res) => {
    const tasks = await Todo.find();
    res.status(200).json({ tasks });
});

const getTask = asynchandler(async (req, res) => {
    const task = await Todo.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error("Tssk not found");
    }
    res.status(200).json({ task });
});

const createTask = asynchandler(async (req, res) => {
    const { title, description, completed } = req.body;
    if (!title) {
        res.status(400);
        throw new Error('Please add the task');
    }
    const task = await Todo.create({
        title, description, completed
    });
    res.status(201).json({ task });
});

const updateTask = asynchandler(async (req, res) => {
    const task = await Todo.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }
    const updatedTask=await Todo.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    });
    res.status(200).json({updatedTask});
});

const deleteTask = asynchandler(async (req, res) => {
    const task=await Todo.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({message:`Task with id ${req.params.id} deleted`});
});

module.exports = { getALLtasks, getTask, createTask, updateTask, deleteTask };
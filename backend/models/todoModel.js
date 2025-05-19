const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: [true, "please add title"],
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true,
    });

const todo = mongoose.model("Todo", todoSchema);
module.exports = todo;
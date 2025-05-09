const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:["Low","Medium","High"],
        required:true
    },
    completed:{
        enum:["Pending","Completed"]
    }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
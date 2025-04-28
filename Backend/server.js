require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const Task = require("./models/Task");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/taskpriority");

app.get("api/task", async (req, res) => {
    try {
        const { title, priority, completed } = req.body;
        // const tasks = { title, priority, completed }
        const tasks = await Task.find();
        // await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error({ error: error.message })
    }
});

app.post("api/task", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        await task.save();
        res.json(task)
    } catch (error) {
        console.error({ error: error.message });
    }
});

app.put("api/task/:id/priority", async (req, res) => {
    try {
        const {priority} = req.body;
        const tasks = priority;
        const task = await tasks.findByIdAndUpdate(req.params.id);
        res.json(task);
    } catch (error) {
        console.error({error:error.message})
    }
});

app.delete("api/task/:id", async(req, res)=>{
    try {
        const task = await Task(req.body);
        await task.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.error({error:error.message});
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});

import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [task, setTask] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/task")
      .then(res => setTask(data))
      .catch(error => console.error(error))
  });

  const handleAdd = async (req, res) => {
    axios.post("http://localhost:8000/api/task")
      .then(res => task)
      .catch(err => console.log(err))
  }

  const handleEdit = async (req, res) => {
    axios.put("http://localhost:8000/api/task/:id/priority")
      .then(res => task)
      .catch(err => console.log(err))
  }

  const handleDelete = async (req, res) => {
    axios.delete("http://localhost:8000/api/task/:id")
      .then(res => task)
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Task</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default App

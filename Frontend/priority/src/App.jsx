import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [task, setTask] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/task")
      .then(res => setTask(data))
      .catch(error => console.error(error))
  });

  const handleAdd = async(req, res)=>{
    
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

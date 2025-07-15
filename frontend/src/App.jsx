import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks]=useState([]);
  const [description, setDescription]=useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(()=>{
    axios.get(`${API_URL}/api/tasks`)
    .then(res=>setTasks(res.data))
    .catch(err=>console.error("Error fetching tasks:", err))
  },[]);

  



  function addTask(){
    if (description===""){
      return;
    }
    axios.post(`${API_URL}/api/tasks`, {description})
    .then(res=>{
      setTasks([...tasks, res.data]);
      setDescription("");
    })
    .catch(err=>console.error("Error adding task:", err));
  }
  function newTask(event){
    setDescription(event.target.value);
  }
  return(
    <div className="container">
      <h2 className="header">My Task List</h2>
      <div className="input-group">
        <input type="text" placeholder="Enter a task" value={description} onChange={newTask} className="input"/>
        <button onClick={addTask} className="button">Add</button>
      </div>
      <ul className="list">
          {tasks.map(task=>(
            <li key={task.id} className="list-item">{task.description}</li>
          ))}
        </ul>
    </div>
  );
}

export default App

import React, { useState } from "react";
import axios from "axios";
import "../styles/AddTask.css";

function AddTask() {
  const [addTask, setAddTask] = useState({
    task: "",
  });

  const handleAddTask = async () => {
    await axios
      .post("http://localhost:5000/api/task/addTask", addTask)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (e) => {
    setAddTask({ task: e.target.value });
  };

  return (
    <div className="add-task-container">
      <div className="topic-container">
        <h1>Add Task</h1>
      </div>
      <div className="task-Adding-container">
        <div className="inputfield-container">
          <input
            type="text"
            placeholder="Add your tasks here"
            onChange={handleChange}
            value={addTask.task}
          />
        </div>
        <div className="button-container">
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;

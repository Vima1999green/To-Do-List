import React, { useState } from "react";

function AddTask() {
  const [addedTask, setAddedTask] = useState("");
  return (
    <div className="add-Task-Container">
      <div className="topic-Container">
        <h1>Add Task</h1>
      </div>
      <div className="inputField-Container">
        <input
          type="text"
          placeholder="Add your tasks here"
          onChange={(e) => setAddedTask(e.target.value)}
        />
      </div>
      <div className="button-Container">
        <button>Add Task</button>
      </div>
    </div>
  );
}

export default AddTask;

import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayTask() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/task/getTasks")
      .then((response) => response.data)
      .then((data) => setAllTasks(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="diplay-Task-Container">
      <div className="topic-Container">
        <h2>Your Tasks Here</h2>
      </div>
      <div className="task-Diplay" key={allTasks._id}>
        {allTasks.map((task) => (
          <div>
            <h3>{task.task}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTask;

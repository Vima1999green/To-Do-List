import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTask from "./components/DisplayTask";
import axios from "axios";

function App() {
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
    <div className="App">
      <AddTask setAllTasks={setAllTasks} />
      <DisplayTask allTasks={allTasks} setAllTasks={setAllTasks} />
    </div>
  );
}

export default App;

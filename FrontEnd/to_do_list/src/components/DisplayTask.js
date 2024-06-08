import "../styles/DisplayTask.css";
import { deleteTask } from "./DeleteTask";

function DisplayTask({ allTasks, setAllTasks }) {
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId)
      .then(() => {
        setAllTasks(allTasks.filter((task) => task.id !== taskId));
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="diplay-Task-Container">
      <div className="topic-Container">
        <h2>Your Tasks Here</h2>
      </div>
      <div className="task-Diplay">
        {allTasks.map((task) => (
          <div key={task._id}>
            <li className="task-Item">
              <div className="title-Container">
                <h3>{task.task}</h3>
              </div>
              <div className="button-Container">
                <button id="mark-Button">Mark as Completed</button>
                <button id="edit-Button">Edit</button>
                <button
                  id="delete-Button"
                  onClick={() => handleDeleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTask;

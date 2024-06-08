import "../styles/DisplayTask.css";
import { useState } from "react";
import { deleteTask, editTask, markCompleteTask } from "./TaskSevices";

function DisplayTask({ allTasks, setAllTasks }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  //delete button functionalities
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

  //edit button functionalities
  const handleEditTask = (task) => {
    setEditingTaskId(task._id);
    setEditedTaskText(task.task);
  };

  //save button functionaliies after editing a task
  const handleSaveTask = (taskId) => {
    editTask(taskId, editedTaskText)
      .then(() => {
        setAllTasks(
          allTasks.map((task) =>
            task._id === taskId ? { ...task, task: editedTaskText } : task
          )
        );
        setEditingTaskId(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleMarkAsCompleted = (taskId) => {
    markCompleteTask(taskId, true)
      .then((updatedTask) => {
        setAllTasks(
          allTasks.map((task) => (task._id === taskId ? updatedTask : task))
        );
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
        {/* here we try to display all the tasks using map function */}
        {allTasks.map((task) => (
          <div key={task._id}>
            {/* to check the user is click on the edit button.If this condition is true, it means the user has clicked the "Edit" button for this task,   */}
            {editingTaskId === task._id ? (
              // show the input field and save and cancel button to user when he click the edit button
              <li className="task-Item-">
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <div className="button-Container">
                  <button onClick={() => handleSaveTask(task._id)}>Save</button>
                  <button onClick={() => setEditingTaskId(null)}>Cancel</button>
                </div>
              </li>
            ) : (
              // if user does not click on the edit button he will see the tasks and three buttons
              <li className={`task-Item-${task.completed ? "completed" : ""}`}>
                <div className="title-Container">
                  <h3>{task.task}</h3>
                </div>
                <div className="button-Container">
                  <button
                    id="mark-Button"
                    onClick={() => handleMarkAsCompleted(task._id)}
                  >
                    Mark as Completed
                  </button>
                  <button id="edit-Button" onClick={() => handleEditTask(task)}>
                    Edit
                  </button>
                  <button
                    id="delete-Button"
                    onClick={() => handleDeleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTask;

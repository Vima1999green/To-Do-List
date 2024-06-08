import axios from "axios";

export const deleteTask = async (taskId) => {
  return axios
    .delete(`http://localhost:5000/api/task/deleteTask/${taskId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const editTask = async (taskId) => {
  return axios
    .put(`http://localhost:5000/api/task/editTask/${taskId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const markCompleteTask = async (taskId) => {
  return axios
    .put(`http://localhost:5000/api/task/completeTask/${taskId}`, {
      completed: true,
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

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

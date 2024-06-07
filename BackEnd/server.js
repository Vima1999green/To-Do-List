const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const toDoRoutes = require("./routes/api/toDoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/task", toDoRoutes);

const MONGODB_URI = "mongodb://localhost:27017/to_do_list";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.error("Error connecting to database"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on  port ${port}`);
});

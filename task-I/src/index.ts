const express = require("express");
const cors = require("cors")
const mongooseDB = require("./db/dbConnection");
const userRouter = require("./router/users");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

const PORT: number = 5000;

app.listen(PORT, () => {
  console.log("Server is running");
});

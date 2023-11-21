const express = require("express");
const mongooseDB = require("./db/dbConnection");
const userRouter = require("./router/users");

const app = express();
app.use(express.json());
app.use(userRouter);

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log("Server is running");
});

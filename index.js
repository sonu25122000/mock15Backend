const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./route/user.route");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running at 8080");
});

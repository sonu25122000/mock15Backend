const express = require("express");
const boardRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BoardModel } = require("../model/Board.model");
const { TaskModel } = require("../model/task.model");
const { SubtaskModel } = require("../model/subtask.model");

boardRouter.post("/", async (req, res) => {
  const payload = req.body;
  const { userID } = req.body;
  try {
    const board = new BoardModel({ ...payload, userID });
    board.save();
    res.send({ msg: "Board Created" });
  } catch (err) {
    res.send({ msg: "somthing went wrong", error: err.message });
  }
});

boardRouter.post("/task/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    const task = new TaskModel({ ...payload, boardID: ID });
    task.save();
    res.send({ msg: "Task Created", task: task });
  } catch (err) {
    res.send({ msg: "somthing went wrong", error: err.message });
  }
});

boardRouter.post("/subtask/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  try {
    const subtask = new SubtaskModel({ ...payload, taskID: ID });
    subtask.save();
    res.send({ msg: "SubTask Created", task: subtask });
  } catch (err) {
    res.send({ msg: "somthing went wrong", error: err.message });
  }
});

module.exports = { boardRouter };

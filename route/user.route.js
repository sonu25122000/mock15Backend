const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../model/user.model");

userRouter.get("/", (req, res) => {
  res.send("USER ROUTE");
});

userRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    let user = new userModel(payload);
    await user.save();
    res.send({ msg: "posted successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong ", error: error.message });
  }
});

module.exports = {
  userRouter,
};

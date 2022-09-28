const express = require("express");
const router = express();
const User = require("../model/user");
const auth = require('../middleware/auth')

router.delete("/users/delete/:userId",auth, async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.userId });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports=router
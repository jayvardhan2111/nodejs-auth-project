const express = require("express");
const router = express();
const bcrypt = require("bcrypt");

const User = require("../model/user");

router.post("/users/registration", async (req, res) => {
  let searchResult = await User.find({ email: req.body.email });
  if (searchResult.length >= 1) {
    return res.status(409).json({
      message: "email already taken",
    });
  } else {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      } else {
        const user = new User({
          email: req.body.email,
          password: hash,
        });
        try {
          await user.save();
          res.sendStatus(201);
        } catch (error) {
          res.status(500).json({ error });
        }
      }
    });
  }
});

module.exports = router;

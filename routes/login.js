const express = require("express");
const router = express();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth')

router.post("/users/login", async (req, res) => {
  let users = await User.find({ email: req.body.email });

  if (users.length < 1) {
    return res.sendStatus(404);
  }

  try {
    await bcrypt.compare(
      req.body.password,
      users[0].password,
      (err, isEqual) => {
        if (err) return res.sendStatus(401);

        if (isEqual) {
          const token = jwt.sign(
            {
              email: users[0].email,
              userId: users[0]._id,
            },
            process.env.key,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Login Success",
            token: token,
          });
        }
        res.sendStatus(401);
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
});

module.exports = router;

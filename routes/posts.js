const express = require("express");
const router = express();

const Post = require("../model/post");

router.use(express.json());

router.use("/posts/new", async (req, res) => {
  let post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  try {
    await post.save();
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;

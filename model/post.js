const db = require("../database");

const postSchema = new db.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
  },
  {    timestamps: true,});

const Post = db.model("Post", postSchema);

module.exports = Post;

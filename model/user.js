const db = require("../database");

const userSchema = new db.Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {    timestamps: true,});

const User = db.model("User", userSchema);

module.exports = User;

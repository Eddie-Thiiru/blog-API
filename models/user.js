const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, minLength: 1 },
  last_name: { type: String, required: true, minLength: 1 },
  username: { type: String, required: true, minLength: 1 },
  password: { type: String, required: true, minLength: 8 },
});

module.exports = mongoose.model("User", UserSchema);

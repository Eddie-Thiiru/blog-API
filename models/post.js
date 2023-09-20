const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true, minLength: 1 },
  text: { type: String, required: true, minLength: 1 },
  timestamp: { type: Date, required: true },
  publish: { type: Boolean, default: false },
});

module.exports = mongoose.model("Post", PostSchema);

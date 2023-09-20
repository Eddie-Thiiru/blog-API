const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: { type: String, required: true, minLength: 1, maxLength: 10000 },
  post: { type: Schema.Types.ObjectId, ref: "Post", require: true },
  timestamp: { type: Date },
});

module.exports = mongoose.model("Comment", CommentSchema);

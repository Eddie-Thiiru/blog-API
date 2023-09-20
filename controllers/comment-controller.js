const asyncHandler = require("express-async-handler");

const Comment = require("../models/comment");

exports.comment_list = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find().populate("post").exec();

  res.send(comments);
});

exports.comment_create_post = asyncHandler(async (req, res, next) => {
  const comment = new Comment({
    text: req.body.text,
    post: req.body.post._id,
    timestamp: new Date(),
  });

  await comment.save();

  res.send(comment);
});

exports.comment_delete = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findById(req.params.id).exec();

  if (comment) {
    await Comment.findByIdAndRemove(req.params.id);
  }

  res.send(comment);
});

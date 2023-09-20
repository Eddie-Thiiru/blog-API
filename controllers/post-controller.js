const asyncHandler = require("express-async-handler");

const Post = require("../models/post");
const Comment = require("../models/comment");

exports.blog_post_detail = asyncHandler(async (req, res, next) => {
  const [blogPost, allComments] = await Promise.all([
    Post.findById(req.params.id).exec(),
    Comment.find({ post: req.params.id }).exec(),
  ]);

  if (blogPost === null) {
    const err = new Error("Post Not found");
    err.status = 404;
    return next(err);
  }

  res.send({ blogPost: blogPost, comments: allComments });
});

exports.blog_post_list = asyncHandler(async (req, res, next) => {
  const blogPosts = await Post.find().exec();

  res.send(blogPosts);
});

exports.blog_create_post = asyncHandler(async (req, res, next) => {
  const blogPost = new Post({
    title: req.body.title,
    text: req.body.text,
    timestamp: new Date(),
    publish: req.body.publishStatus,
  });

  await blogPost.save();

  res.send(blogPost);
});

exports.blog_post_update = asyncHandler(async (req, res, next) => {
  const blogPost = new Post({
    title: req.body.title,
    text: req.body.text,
    timestamp: new Date(),
    publish: req.body.publishStatus,
    _id: req.params.id, // must provide original post id when updating
  });

  await Post.findByIdAndUpdate(req.params.id, blogPost);

  res.send(blogPost);
});

exports.blog_post_delete = asyncHandler(async (req, res, next) => {
  const [blogPost, allComments] = await Promise.all([
    Post.findById(req.params.id).exec(),
    Comment.findById({ post: req.params.id }).exec(),
  ]);

  if (blogPost) {
    await Post.findByIdAndRemove(req.params.id);
    await Comment.deleteMany({ post: req.params.id });
  }

  res.send({ blogPost: blogPost, comments: allComments });
});

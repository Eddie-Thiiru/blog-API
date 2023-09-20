const asyncHandler = require("express-async-handler");

const User = require("../models/user");

exports.user_detail = asyncHandler(async (req, res, next) => {
  const user = await User.find({ username: req.params.username }).exec();

  if (user === null) {
    const err = new Error("User not found");
    err.status = 404;
    return next(err);
  }

  res.send(user);
});

exports.user_create_post = asyncHandler(async (req, res, next) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
  });

  await user.save();

  res.send(user);
});

const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user-controller");
const post_controller = require("../controllers/post-controller");
const comment_controller = require("../controllers/comment-controller");

/// USER ROUTES ///

// GET request for admin
router.get("/user/:username", user_controller.user_detail);

// POST request for new admin
router.post("/user/:username", user_controller.user_create_post);

/// POST ROUTES ///

// GET request for all posts
router.get("/posts", post_controller.blog_post_list);

// GET request for one post
router.get("/posts/:id", post_controller.blog_post_detail);

// POST request for new post
router.post("/posts", post_controller.blog_create_post);

// PUT request to update post
router.put("/posts/:id", post_controller.blog_post_update);

// DELETE request to delete post
router.delete("/posts/:id", post_controller.blog_post_delete);

/// COMMENT ROUTES ///

// GET request for all comments
router.get("/comments", comment_controller.comment_list);

// POST request for new comment
router.post("/comments/:id", comment_controller.comment_create_post);

// DELETE request to delete a comment

module.exports = router;

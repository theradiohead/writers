const express = require("express");
const router = express.Router();
const postController = require("../../controllers/postController");

// @route  POST api/post/create_post
// @desc   create a new post
// @access Public
router.post("/create_post", postController.create);

// @route  GET api/post/get_all_posts
// @desc   Retrieve all Posts
// @access Public
router.get("/get_all_posts", postController.findAll);

// @route  GET api/post/get_all_posts
// @desc   Retrieve a single Post with id
// @access Public
router.get("/:id", postController.findOne);

// @route  PUT api/post/:id
// @desc   Update a single post with id
// @access Public
router.put("/:id", postController.update);

// @route  DELETE api/post/:id
// @desc   Delete a post with id
// @access Public

router.delete("/:id", postController.delete);

// @route  Delete api/post/delete_all_posts
// @desc   delete all Posts
// @access Public
router.delete("/delete_all_posts", postController.deleteAll);

module.exports = router;

const Post = require("../models/Post");

exports.createPost = async (text) => {
  // Create a Post
  const newPost = new Post({
    text,
  });
  // Save Post in the database
  const post = await newPost.save(Post);
  return post;
};
exports.findAllPosts = async () => {
  const get_all_posts_promise = await Post.find().select([
    "_id",
    "text",
    "date",
  ]);

  return get_all_posts_promise;
};

exports.findPostbyId = async (id) => {
  const get_post_promise = await Post.findById(id).select([
    "_id",
    "text",
    "date",
  ]);

  return get_post_promise;
};

exports.updatePost = async (id, text) => {
  console.log(id, "  ", text);
  const updated_post_promise = Post.findByIdAndUpdate(
    id,
    { text: text },
    {
      useFindAndModify: true,
    }
  );

  return updated_post_promise;
};

exports.deletePostById = async (id) => {
  const delete_post_promise = await Post.deleteOne({ _id: id });

  return delete_post_promise;
};

exports.deleteAllPosts = async () => {
  const delete_all_post_promise = await Post.deleteMany({});

  return delete_all_post_promise;
};

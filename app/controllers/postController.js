const { text } = require("express");
const postServices = require("../services/postServices");

// Create and Save a new Post
exports.create = (req, res) => {
  // Validate request
  if (!req.body.text) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  console.log(req.body);
  const text = req.body.text;
  postServices
    .createPost(text)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post.",
      });
    });
};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
  postServices
    .findAllPosts()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Posts.",
      });
    });
};

// Find a single Post with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  postServices
    .findPostbyId(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Post with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Post with id=" + id });
    });
};

// Update a Post by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;
  const { text } = req.body;

  postServices
    .updatePost(id, text)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found!`,
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Post with id=" + id,
      });
    });
};

// Delete a Post with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  postServices
    .deletePostById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
        });
      } else {
        res.send({
          message: "Post was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id,
      });
    });
};

// Delete all Posts from the database.
exports.deleteAll = (req, res) => {
  postServices
    .deleteAllPosts()
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Posts were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Posts.",
      });
    });
};

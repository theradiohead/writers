import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

import { createPost } from "../redux/actions/postsActions";
export default function AddPost() {
  const [postToAdd, setPostToAdd] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createPost(postToAdd));
  };
  const handleChange = (e) => {
    setPostToAdd(e.target.value);
  };
  return (
    <div>
      <div className="ach">
        <Form.Control
          type="text"
          placeholder="Add a new post here"
          onChange={handleChange}
        />
        <Button variant="primary" onClick={handleClick}>
          Post
        </Button>{" "}
      </div>
    </div>
  );
}

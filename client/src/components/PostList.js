import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Post from "./Post";
import "bootstrap/dist/css/bootstrap.min.css";
function PostList() {
  const allPosts = useSelector((state) => state.posts.allPosts);
  console.log(allPosts);
  return (
    <div>
      {allPosts.map((post) => {
        return <Post postData={post}></Post>;
      })}
    </div>
  );
}

export default PostList;

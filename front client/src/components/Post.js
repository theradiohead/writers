import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Post(props) {
  return (
    <div>
      <div>{props.postData.text}</div>
      <small>{props.postData.date}</small>
      <hr></hr>
    </div>
  );
}

export default Post;

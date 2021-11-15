import React, { Component } from "react";
import { connect } from "react-redux";

import AddPost from "./AddPost";
import PostList from "./PostList";
import { getAllPosts } from "../redux/actions/postsActions";

class PostsComponent extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <div>
        <AddPost></AddPost>
        <PostList></PostList>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allPosts: state.posts.allPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);

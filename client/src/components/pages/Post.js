import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export class Post extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Post Feed</BreadcrumbItem>
        </Breadcrumb>
        <h1>I also take this to be the post feed</h1>
      </div>
    );
  }
}

export default Post;

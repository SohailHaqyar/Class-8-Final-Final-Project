import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link } from "react-router-dom";
import "./post.styles.scss";
import axios from "axios";
import Card from "../Card";

export class Post extends Component {
  state = {
    title: "",
    body: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //axios requrest
  };
  render() {
    return (
      <div className="Post">
        <div className="Post__compose">
          <div className="Post__compose-box">
            <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
              What's new?
            </h5>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  value={this.state.title}
                  onChange={this.handleChange}
                  type="text"
                  name="title"
                  id="title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Post Body</Label>
                <Input
                  value={this.state.body}
                  type="textarea"
                  onChange={this.handleChange}
                  name="body"
                  id="exampleText"
                  style={{ height: "100px" }}
                />
              </FormGroup>
              <Button color="danger" style={{ fontWeight: "bold" }}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="Post__feed">
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Post;

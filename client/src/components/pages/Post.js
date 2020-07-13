import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./post.styles.scss";
import axios from "axios";
import { getAllPosts } from "../../actions/postActions";
import Card from "../Card";
import { connect } from "react-redux";

export class Post extends Component {
  state = {
    title: "",
    body: "",
    image: "",
    isAttaching: true,
    posts: [],
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const myPost = {
      title: this.state.title,
      body: this.state.body,
      image: this.state.image,
    };
    axios
      .post("http://localhost:4000/posts", myPost)
      .then((res) => {
        this.props.getAllPosts();
      })
      .catch((e) => console.log(e));
    this.setState({ title: "", body: "", image: "" });
  };
  toggleAttachment = () => {
    this.setState({ isAttaching: !this.state.isAttaching });
  };
  componentDidMount() {
    this.props.getAllPosts();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        posts: nextProps.post.posts,
      });
    }
  }
  renderAttachmentIcon() {
    return (
      <div className="image_icon">
        <span onClick={this.toggleAttachment}>
          <i className="fa fa-paperclip" />
        </span>
      </div>
    );
  }
  renderAttachmentForm() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="append">
          <Button onClick={this.toggleAttachment} color="danger">
            Cancel
          </Button>
        </InputGroupAddon>
        <Input
          value={this.state.image}
          onChange={this.handleChange}
          type="text"
          name="image"
          id="image"
          placeholder="Paste your image url"
        />
      </InputGroup>
    );
  }

  render() {
    console.log(this.state);
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
              {this.state.isAttaching
                ? this.renderAttachmentForm()
                : this.renderAttachmentIcon()}
              <Button
                color="primary"
                style={{
                  fontWeight: "bold",
                  marginTop: "15px",
                  width: "100%",
                  fontSize: "18px",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="Post__feed">
          {this.state.posts.length > 0 ? (
            this.state.posts.map((post) => (
              <>
                <Card post={post} key={post._id} />
              </>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getAllPosts })(Post);

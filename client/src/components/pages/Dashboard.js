import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./dashboard.styles.scss";
import { ListGroup, ListGroupItem, Button, Badge } from "reactstrap";
import Card from "../Card";
export class Dashboard extends Component {
  state = {
    ngo: {},
    posts: [],
  };
  componentDidMount() {
    this.fetchCurrentNgo();
    this.fetchCurrentPosts();
  }

  fetchCurrentNgo() {
    axios.get("http://localhost:4000/current").then((res) => {
      this.setState({ ngo: res.data });
    });
  }
  fetchCurrentPosts() {
    axios
      .get("http://localhost:4000/posts/me")
      .then((res) => this.setState({ posts: res.data }));
  }
  render() {
    const { organization } = this.state.ngo;
    const { posts } = this.state;
    return (
      <div className="Dashboard">
        {organization !== undefined ? (
          <div className="Dashboard__profile">
            <h1 style={{ fontFamily: "Grenze Gotisch" }}>Dashboard</h1>
            <div className="Dashboard__profile__heading">
              <div className="Dashboard__profile__heading-s1">
                <img src={organization.logo} alt="" />
              </div>
              <div className="Dashboard__profile__heading-s2">
                <h3>{organization.name}</h3>
                <h5>{organization.industry}</h5>
                <span>{organization.address}</span>
                <span>
                  <i className="fa fa-phone fa-lg"></i> {organization.phone}
                </span>
                <span>
                  <i className="fa fa-envelope fa-lg"></i> {organization.email}
                </span>
                <Link className="settings_dashboard" to="/settings">
                  <i class="fa fa-cog fa-lg" style={{ fontSize: "24px" }}></i>{" "}
                  Settings
                </Link>
              </div>
              <div className="Dashboard__profile__heading-s3">
                <h3>Services</h3>
                <ListGroup>
                  {organization.services.map((ser) => (
                    <ListGroupItem className="list_item">
                      <i className="fa fa-check fa-lg pr-2"></i> {ser}
                    </ListGroupItem>
                  ))}
                </ListGroup>
                <Button
                  color="danger"
                  style={{ marginTop: "20px" }}
                  onClick={() => {
                    if (
                      window.confirm("Are you sure you want to logout?") == true
                    ) {
                      localStorage.clear();
                      window.location.href = "/login";
                    }
                  }}
                >
                  Logout
                </Button>
              </div>
            </div>
            <div className="Dashboard__profile__body">
              <h3>About You</h3>
              <p>{organization.description}</p>
            </div>
          </div>
        ) : (
          <h1>Loading....</h1>
        )}
        {posts.length > 0 ? (
          <div className="Dashboard__posts">
            <h1>Your Posts</h1>
            {posts.map((post) => (
              <Card
                post={post}
                noContact
                owner={organization.name}
                ownerLogo={organization.logo}
              />
            ))}
          </div>
        ) : (
          <h3>Loading Posts .... </h3>
        )}
      </div>
    );
  }
}

export default Dashboard;

//Cover shoto https://images.unsplash.com/photo-1487088678257-3a541e6e3922

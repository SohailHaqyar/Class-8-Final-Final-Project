import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Col,
  Row,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import "./settings.styles.scss";

const Example = (props) => {
  useEffect(() => {
    fetchNgo();
  }, []);

  const fetchNgo = () => {
    axios.get("http://localhost:4000/current").then((res) => {
      setState(res.data.organization);
    });
  };
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    year: "",
    industry: "",
    keywords: "",
    services: "",
    description: "",
    logo: "",
  });
  const [team, setTeam] = useState({
    name: "",
    bio: "",
    avatar: "",
    title: "",
  });
  const handleTeamChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:4000/ngo", state).then((res) => {
      fetchNgo();
    });
  };
  const handleTeamSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/ngo/team", team).then((res) => {
      this.props.history.push("/dashboard");
    });
  };
  return (
    <div className="Settings">
      <Nav tabs style={{ marginTop: "10px" }}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Edit Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Add a Teammember
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="Settings__tabs">
        <TabPane tabId="1" className="Settings__tab-1">
          <h1 style={{ textAlign: "center" }}>Edit Your Profile</h1>
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    value={state.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    value={state.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    value={state.address}
                    name="address"
                    id="address"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    value={state.phone}
                    name="phone"
                    id="phone"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="year">Year</Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    value={state.year}
                    name="year"
                    id="year"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="industry">Industry</Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    value={state.industry}
                    name="industry"
                    id="industry"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="keyword">Keywords</Label>
                  <Input
                    type="text"
                    onChange={handleChange}
                    value={state.keyword}
                    name="keyword"
                    id="keyword"
                  />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="services">Services</Label>
                  <Input
                    type="services"
                    onChange={handleChange}
                    value={state.services}
                    name="services"
                    id="services"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="logo">Logo URL</Label>
              <Input
                type="logo"
                name="logo"
                onChange={handleChange}
                value={state.logo}
                id="logo"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                onChange={handleChange}
                value={state.description}
                id="description"
                style={{ height: "250px" }}
              />
            </FormGroup>
            <Button
              type="submit"
              style={{ width: "100%", margin: "10px 0" }}
              color="danger"
            >
              Save Changes
            </Button>
          </Form>
        </TabPane>
        <TabPane tabId="2" className="Settings__tab-1">
          <h2>Add a Teammember</h2>
          <Form onSubmit={handleTeamSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    value={team.name}
                    onChange={handleTeamChange}
                    name="name"
                    id="name"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    value={team.title}
                    onChange={handleTeamChange}
                    name="title"
                    id="title"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="avatar">Avatar Url</Label>
              <Input
                type="text"
                value={team.avatar}
                onChange={handleTeamChange}
                name="avatar"
                id="avatar"
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Team member Bio</Label>
              <Input
                type="textarea"
                value={team.bio}
                onChange={handleTeamChange}
                name="bio"
                id="bio"
              />
            </FormGroup>
            <Button
              type="submit"
              style={{ width: "100%", margin: "10px 0" }}
              color="success"
            >
              Add Teammember
            </Button>
          </Form>
        </TabPane>
      </TabContent>
    </div>
  );
};
export default Example;

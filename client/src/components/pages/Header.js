import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="images/logo.png"
                height="100"
                width="100"
                alt="SprintNGO"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/">
                    {" "}
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/dashboard">
                    {" "}
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/listboard">
                    {" "}
                    Listboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/post">
                    {" "}
                    Post Feed
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/login">
                    {" "}
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/signup">
                    {" "}
                    Sign Up
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;

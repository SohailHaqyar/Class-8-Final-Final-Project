import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  renderAuth() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </NavItem>
        </>
      );
    } else {
      return (
        <>
          <NavItem>
            <NavLink className="nav-link" to="/dashboard">
              {" "}
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/post">
              {" "}
              Post Feed
            </NavLink>
          </NavItem>
        </>
      );
    }
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md" className="">
          <div className="container">
            <Link to="/">
              <NavbarBrand className="mr-auto">
                <img
                  src="images/logo.png"
                  height="100"
                  width="100"
                  alt="SprintNGO"
                />
              </NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/listboard">
                    {" "}
                    Listboard
                  </NavLink>
                </NavItem>
                {this.renderAuth()}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Header);

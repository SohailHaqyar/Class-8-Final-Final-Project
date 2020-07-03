import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Dashboard</BreadcrumbItem>
        </Breadcrumb>
        <h1>Is this not the Dashboard ? Don't ask me.</h1>
      </div>
    );
  }
}

export default Dashboard;

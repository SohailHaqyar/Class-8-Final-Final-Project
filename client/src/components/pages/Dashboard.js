import React, { Component } from "react";
import "./dashboard.styles.scss";
import { Button } from "reactstrap";
export class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard__card">
          <div className="Dashboard__card-mini">
            <img
              src="https://files.slack.com/files-pri/T6RAP57AP-F016Q0QTY68/mylogo.png"
              alt="logo"
              className="Dashboard__logo"
            />
            <h1
              style={{ marginLeft: "4.5em", color: "white", marginTop: "20px" }}
            >
              Future Tech
            </h1>

            <div className="Dashboard__card-mini-cta">
              <Button color="info" style={{ marginLeft: "10px" }}>
                Edit Profile
              </Button>
              <Button color="danger" style={{ marginLeft: "10px" }}>
                Delete Profile
              </Button>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "200px" }}>Posts will go here</h1>
      </div>
    );
  }
}

export default Dashboard;

//Cover shoto https://images.unsplash.com/photo-1487088678257-3a541e6e3922

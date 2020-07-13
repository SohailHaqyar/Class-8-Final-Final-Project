import React, { Component } from "react";
import { NgoForm } from "./multiForm/NgoForm";
import { connect } from "react-redux";

export class Register extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div>
        <NgoForm />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Register);

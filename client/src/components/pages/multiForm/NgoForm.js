import React, { Component } from "react";
import NgoInfo from "./NgoInfo";
import NgoDetails from "./NgoDetails";
import TeamMembers from "./TeamMembers";
import Confirm from "./Confirm";

export class NgoForm extends Component {
  state = {
    step: 1,
    logo: "",
    ngoName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    year: "",
    industry: "",
    description: "",
    services: "",
    keywords: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      logo,
      ngoName,
      email,
      password,
      phoneNumber,
      address,
      year,
      industry,
      description,
      services,
      keywords,
    } = this.state;
    const values = {
      logo,
      ngoName,
      email,
      password,
      phoneNumber,
      address,
      year,
      industry,
      description,
      services,
      keywords,
    };

    switch (step) {
      case 1:
        return (
          <NgoInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <NgoDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default NgoForm;

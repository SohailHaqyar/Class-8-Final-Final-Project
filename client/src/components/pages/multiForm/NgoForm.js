import React, { Component } from "react";
import NgoInfo from "./NgoInfo";
import NgoDetails from "./NgoDetails";
import TeamMembers from "./TeamMembers";
import Confirm from "./Confirm";

export class NgoForm extends Component {
  state = {
    step: 1,
    ngoName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    image: "",
    industry: "",
    description: "",
    services: "",
    keywords: "",
    firstnamem1: "",
    surnames1: "",
    firstnamem2: "",
    surnames2: "",
    firstnamem3: "",
    surnames3: "",
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
      ngoName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      address,
      image,
      industry,
      description,
      services,
      keywords,
      firstnamem1,
      surnames1,
      firstnamem2,
      surnames2,
      firstnamem3,
      surnames3,
    } = this.state;
    const values = {
      ngoName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      address,
      image,
      industry,
      description,
      services,
      keywords,
      firstnamem1,
      surnames1,
      firstnamem2,
      surnames2,
      firstnamem3,
      surnames3,
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
          <TeamMembers
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
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

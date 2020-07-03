import React, { Component } from "react";
import { Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container offset-2">
        <div className="col-12">
          <h3>Organization Registration</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 mt-4">
            <LocalForm>
              <Row className="form-group">
                <Label htmlFor="ngoName" md={2}>
                  Ngo Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".ngoName"
                    id="ngoName"
                    name="ngoName"
                    placeholder="First Name"
                    onChange={handleChange("ngoName")}
                    defaultValue={values.ngoName}
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>

                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required ",
                      validEmail: "Invalid Email Address",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="password" md={2}>
                  Password
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange("password")}
                    defaultValue={values.password}
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="confirmPassword" md={2}>
                  Confirm Password
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".confirmPassword"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange("confirmPassword")}
                    defaultValue={values.confirmPassword}
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNumber" md={2}>
                  Phone No.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phoneNumber"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Tel. Number"
                    onChange={handleChange("phoneNumber")}
                    defaultValue={values.phoneNumber}
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNumber"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="address" md={2}>
                  Address
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".address"
                    id="address"
                    name="address"
                    placeholder="Address"
                    className="form-control"
                    onChange={handleChange("address")}
                    defaultValue={values.address}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.back}
                    block
                  >
                    Back
                  </Button>

                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.continue}
                    block
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUserDetails;

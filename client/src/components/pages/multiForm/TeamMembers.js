import React, { Component } from "react";
import { Button, Row, Col, Label, FormGroup, Input, card } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container offset-2">
        <div className="col-12">
          <h3>Organization Registration</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 mt-5">
            <LocalForm>
              <Label for="name">Member 1</Label>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="firstname"
                      name="firstnamem1"
                      id="firstnamem1"
                      placeholder="First Name"
                      onChange={handleChange("firstnamem1")}
                      defaultValue={values.firstnamem1}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="surnames1"
                      name="surnames1"
                      id="surname"
                      placeholder="Surname"
                      onChange={handleChange("surnames1")}
                      defaultValue={values.surnames1}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Label for="name">Member 2</Label>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="firstname"
                      name="firstnamem2"
                      id="firstnamem2"
                      placeholder="First Name"
                      onChange={handleChange("firstnamem2")}
                      defaultValue={values.firstnamem2}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="surname"
                      name="surnames2"
                      id="surnames2"
                      placeholder="Surname"
                      onChange={handleChange("surnames2")}
                      defaultValue={values.surnames2}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Label for="name">Member 3</Label>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="firstname"
                      name="firstnamem3"
                      id="firstnamem3"
                      placeholder="First Name"
                      onChange={handleChange("firstnamem3")}
                      defaultValue={values.firstnamem3}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="surname"
                      name="surnames3"
                      id="surnames3"
                      placeholder="Surname"
                      onChange={handleChange("surnames3")}
                      defaultValue={values.surnames3}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 10 }}>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.back}
                    block
                    className="offset-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.continue}
                    block
                    className="offset-1"
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

export default FormPersonalDetails;

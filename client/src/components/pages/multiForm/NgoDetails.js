import React, { Component } from "react";
import { Button, Row, Col, Label, FormGroup, Input } from "reactstrap";
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
          <div className="col-12 col-md-9 mt-4">
            <LocalForm>
              <FormGroup row>
                <Label for="image" sm={2}>
                  Image
                </Label>
                <Col sm={10}>
                  <Input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleChange("image")}
                    defaultValue={values.image}
                  />
                </Col>
              </FormGroup>
              <Row className="form-group">
                <Label htmlFor="industry" md={2}>
                  Industry
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".industry"
                    id="industry"
                    name="industry"
                    placeholder="Industry"
                    onChange={handleChange("industry")}
                    defaultValue={values.industry}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="description" md={2}>
                  Description
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".description"
                    id="description"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange("description")}
                    defaultValue={values.description}
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="services" md={2}>
                  Services
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".services"
                    id="services"
                    name="services"
                    placeholder="Services"
                    onChange={handleChange("services")}
                    defaultValue={values.services}
                    rows="3"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="keywords" md={2}>
                  Keywords
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".keywords"
                    id="keywords"
                    name="keywords"
                    placeholder="Keywords"
                    onChange={handleChange("keywords")}
                    defaultValue={values.keywords}
                    className="form-control"
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

export default FormPersonalDetails;

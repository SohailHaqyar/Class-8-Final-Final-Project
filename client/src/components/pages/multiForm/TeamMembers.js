import React, {Component} from 'react';
import {Button, Row, Col, Label, FormGroup, Input} from 'reactstrap';
import {LocalForm} from 'react-redux-form';

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
    const {values, handleChange} = this.props;
    return (
      <div className="container offset-2">
        <div className="col-12">
          <h3>Organization Registration</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 mt-5">
            <LocalForm>
              <hr />
              <Label for="name">Member 1</Label>
              <Row form>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="nameOfMemeber1"
                      name="nameOfMemeber1"
                      id="nameOfMemeber"
                      placeholder="Member's Name"
                      onChange={handleChange('nameOfMemeber1')}
                      defaultValue={values.nameOfMemeber1}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="avatar1"
                      name="avatar1"
                      id="avatar"
                      placeholder="Member's avatar url"
                      onChange={handleChange('avatar1')}
                      defaultValue={values.avatar1}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="title1"
                      name="title1"
                      id="title"
                      placeholder="Member's Title"
                      onChange={handleChange('title1')}
                      defaultValue={values.title1}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="bio1"
                      name="bio1"
                      id="bio"
                      placeholder="Member's biography"
                      onChange={handleChange('bio1')}
                      defaultValue={values.bio1}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <hr />

              <Row className="form-group">
                <Col md={{size: 10}}>
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

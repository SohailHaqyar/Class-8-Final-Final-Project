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
              <Label for="name">Member 2</Label>
              <Row form>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="nameOfMemeber2"
                      name="nameOfMemeber2"
                      id="nameOfMemeber"
                      placeholder="Member's Name"
                      onChange={handleChange('nameOfMemeber2')}
                      defaultValue={values.nameOfMemeber2}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="avatar2"
                      name="avatar2"
                      id="avatar"
                      placeholder="Member's avatar url"
                      onChange={handleChange('avatar2')}
                      defaultValue={values.avatar2}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="title2"
                      name="title2"
                      id="title"
                      placeholder="Member's Title"
                      onChange={handleChange('title2')}
                      defaultValue={values.title2}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="bio2"
                      name="bio2"
                      id="bio"
                      placeholder="Member's biography"
                      onChange={handleChange('bio2')}
                      defaultValue={values.bio2}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <hr />
              <Label for="name">Member 3</Label>
              <Row form>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="nameOfMemeber3"
                      name="nameOfMemeber3"
                      id="nameOfMemeber"
                      placeholder="Member's Name"
                      onChange={handleChange('nameOfMemeber3')}
                      defaultValue={values.nameOfMemeber3}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="avatar3"
                      name="avatar3"
                      id="avatar"
                      placeholder="Member's avatar url"
                      onChange={handleChange('avatar3')}
                      defaultValue={values.avatar3}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="title3"
                      name="title3"
                      id="title"
                      placeholder="Member's Title"
                      onChange={handleChange('title3')}
                      defaultValue={values.title3}
                    />
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <Input
                      type="bio3"
                      name="bio3"
                      id="bio"
                      placeholder="Member's biography"
                      onChange={handleChange('bio3')}
                      defaultValue={values.bio3}
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

import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { LocalForm } from "react-redux-form";

export class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { ngoName, email, phoneNumber, address, description, services },
    } = this.props;
    return (
      <div className="container offset-2">
        <div className="col-12">
          <h3>Confirm Registration</h3>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>CONFIRM MESSAGE</ModalHeader>
          <ModalBody>
            <h1>Thanks You For Your Registration</h1>
            <p>
              Don't worry we will send you more of your details through your
              email.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              value="submit"
              color="primary"
              onClick={this.toggleModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <div className="row">
          <div className="col-12 col-md-9 mt-5">
            <LocalForm>
              <Row className="form-group">
                <Label htmlFor="ngoName" md={2}>
                  NGO Name:
                </Label>
                <Label htmlFor="ngoName" md={2}>
                  {ngoName}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email:
                </Label>
                <Label htmlFor="email" md={2}>
                  {email}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNumber" md={2}>
                  Phone Number:
                </Label>
                <Label htmlFor="phoneNumber" md={2}>
                  {phoneNumber}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="address" md={2}>
                  Address:
                </Label>
                <Label htmlFor="address" md={2}>
                  {address}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="description" md={2}>
                  Description:
                </Label>
                <Label htmlFor="description" md={2}>
                  {description}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="services" md={2}>
                  Services:
                </Label>
                <Label htmlFor="services" md={2}>
                  {services}
                </Label>
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
                    onClick={this.toggleModal}
                    block
                  >
                    Submit
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

export default Confirm;

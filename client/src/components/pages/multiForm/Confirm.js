import React, {Component} from 'react';
import {
  Button,
  Row,
  Col,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import {LocalForm} from 'react-redux-form';
import axios from 'axios';

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
  handleSubmit = () => {
    //console.log('the Props are: ', this.props.values);
    const payload = {
      logo: this.props.values.logo,
      name: this.props.values.ngoName,
      email: this.props.values.email,
      password: this.props.values.password,
      phone: this.props.values.phoneNumber,
      address: this.props.values.address,
      year: this.props.values.year,
      industry: this.props.values.industry,
      description: this.props.values.description,
      services: this.props.values.services.split(','),
      keyword: this.props.values.keywords.split(','),
      teammembers: [
        {
          name: this.props.values.nameOfMemeber1,
          avatar: this.props.values.avatar1,
          title: this.props.values.title1,
          bio: this.props.values.bio1,
        },
        {
          name: this.props.values.nameOfMemeber2,
          avatar: this.props.values.avatar2,
          title: this.props.values.title2,
          bio: this.props.values.bio2,
        },
        {
          name: this.props.values.nameOfMemeber3,
          avatar: this.props.values.avatar3,
          title: this.props.values.title3,
          bio: this.props.values.bio3,
        },
      ],
    };
    //console.log('My palyload: ', payload);

    axios({
      url: 'http://localhost:4000/ngo',
      method: 'POST',
      data: payload,
    })
      .then((data) => console.log('data successfully sent'))
      .catch((data) => console.log('Guy something went wrong'));
  };

  render() {
    const {
      values: {ngoName, email, phoneNumber, address, description, services},
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
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="ngoName" md={12}>
                  NGO Name:
                </Label>
                <Label htmlFor="ngoName" md={12}>
                  {ngoName}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={12}>
                  Email:
                </Label>
                <Label htmlFor="email" md={12}>
                  {email}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNumber" md={12}>
                  Phone Number:
                </Label>
                <Label htmlFor="phoneNumber" md={12}>
                  {phoneNumber}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="address" md={12}>
                  Address:
                </Label>
                <Label htmlFor="address" md={12}>
                  {address}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="description" md={12}>
                  Description:
                </Label>
                <Label htmlFor="description" md={12}>
                  {description}
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="services" md={12}>
                  Services:
                </Label>
                <Label htmlFor="services" md={12}>
                  {services}
                </Label>
              </Row>
              <Row className="form-group">
                <Col md={{size: 10, offset: 2}}>
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

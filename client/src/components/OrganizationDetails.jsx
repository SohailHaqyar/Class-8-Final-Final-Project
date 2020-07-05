import React, {Component} from 'react';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';
//import Organization from '../../../server/models/OrganizationModel';
import axios from 'axios';
class OrganizationDetails extends Component {
  state = {
    ngo: {},
  };
  componentDidMount() {
    axios.get(`http://localhost:4000/ngo/${this.props.id}`).then((res) => {
      this.setState({ngo: res.data});
    });
  }

  render() {
    // Fetch the organization's data from the database;
    const {ngo} = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-info text-white mb-3">
              <div className="row">
                <div className="col-4 col-md-3 m-auto">
                  <img
                    className="rounded-circle"
                    style={{
                      width: '180px',
                      height: '200px',
                      borderRadius: '50%',
                    }}
                    src={ngo.logo}
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="display-4 text-center">{ngo.name}</h1>
                <p className="lead text-center">
                  <span>{ngo.address}</span>
                </p>

                <p>
                  <a className="text-white p-2" href="#" target="_blank">
                    <i className="fas fa-globe fa-2x" />
                  </a>

                  <a className="text-white p-2" href="" target="_blank">
                    <i className="fab fa-twitter fa-2x" />
                  </a>

                  <a className="text-white p-2" href="#" target="_blank">
                    <i className="fab fa-facebook fa-2x" />
                  </a>

                  <a className="text-white p-2" href="#" target="_blank">
                    <i className="fab fa-linkedin fa-2x" />
                  </a>

                  <a className="text-white p-2" href="#" target="_blank">
                    <i className="fab fa-youtube fa-2x" />
                  </a>

                  <a className="text-white p-2" href="#" target="_blank">
                    <i className="fab fa-instagram fa-2x" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
              <h3 className="text-center text-info">Oyolah's Bio</h3>
              <p className="lead">
                <span>I love people</span>
              </p>
              <hr />
              <h3 className="text-center text-info">Our Services</h3>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {ngo.services}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3">
              <h3 className="text-center text-info">Description</h3>
              <div className="row">
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {ngo.description}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1>Meet Our Team</h1>
        {ngo.teammembers &&
          ngo.teammembers.map((person) => (
            <div className="container">
              <div className="row" key={person._id}>
                <div className="col-lg-4">
                  <img
                    className="bd-placeholder-img rounded-circle"
                    width="170"
                    height="170"
                    src={person.avatar}
                  />
                  <h2>{person.name}</h2>
                  <h2>{person.title}</h2>
                  <p>{person.bio}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default OrganizationDetails;

import React, { Component } from "react";
import { Card, CardBody, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import OrganizationDetails from "./OrganizationDetails";

class OrganizationCard extends Component {
  render() {
    const { services, address, logo, name, industry, _id } = this.props.ngo;
    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="3">
              <img
                className=""
                src={logo}
                style={{ width: "250px", height: "100%" }}
                alt=""
              />
            </Col>
            <Col sm="4">
              <h4>{name}</h4>
              <p>{industry}</p>
              <p>{address}</p>
              {/* <a href="#" className="btn btn-primary">
                View Organization
              </a> */}

              <Link to={`/ngo/${_id}`} className="btn btn-primary">
                View Organization
              </Link>
            </Col>
            <Col sm="4">
              <h4>Services</h4>

              {services.map((service) => (
                <ListGroup>
                  <ListGroupItem>
                    <i className="fa fa-check pr-1" />
                    {service}
                  </ListGroupItem>
                </ListGroup>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
export default OrganizationCard;

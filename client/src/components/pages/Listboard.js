import React, { Component } from "react";
import OrganizationCard from "../OrganizationCard";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllNgos } from "../../actions/ngoActions";
export class Listboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organizations: [],
    };
  }

  componentDidMount() {
    this.props.getAllNgos();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        organizations: nextProps.ngos.organizations,
      });
    }
  }
  render() {
    const { organizations } = this.state;
    return (
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center" style={{ margin: "20px 0" }}>
                Organizations to Checkout
              </h3>
              {organizations &&
                organizations.map((ngo, i) => (
                  <OrganizationCard key={i} ngo={ngo} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ngos: state.ngo,
});
export default connect(mapStateToProps, { getAllNgos })(Listboard);

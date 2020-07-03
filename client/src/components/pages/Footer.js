import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home" className="text-white">
                    <span className="fa fa-home fa-lg"></span> Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-white">
                    <span className="fa fa-tachometer fa-lg"></span> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/listboard" className="text-white">
                    {" "}
                    <span className="fa fa-list fa-lg"></span> Listboard
                  </Link>
                </li>
                <li>
                  <Link to="/post" className="text-white">
                    <span className="fa fa-clipboard fa-lg"></span> Post Feed
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5 text-white">
              <h5>Our Address</h5>
              <address className="text-white">
                121, Isavron
                <br />
                Athens, Greece
                <br />
                <i className="fa fa-phone fa-lg"></i> : +30 690 668 8440
                <br />
                <i className="fa fa-fax fa-lg"></i> : +30 694 575 6292
                <br />
                <i className="fa fa-envelope fa-lg"></i> :{" "}
                <a href="www:sprint@ngo.net">sprint@ngo.net</a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2020 Sprint NGO</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

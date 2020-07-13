import React, { Component } from "react";
// import { Jumbotron } from "reactstrap";
import Typed from "react-typed";
import "./home.scss";

class Home extends Component {
  //getting ready
  render() {
    return (
      <div className="bg">
        <div >
        {/* <Jumbotron> */}
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6" >
                <Typed
                  strings={[
                    "Sprint NGOS",
                    "Register Your Ngos",
                    "Advertise your services",
                  ]}
                  typeSpeed={10}
                  backSpeed={20}
                  attr="placeholder"
                  loop
                  
                  
                >
                  <input
                    
                    type="text"
                    style={{ border: "none", fontSize: "48px", backgroundColor:"transparent"}}
                    
                  />
                </Typed>
                <p>
                  Register your NGO here for the best services of advert, there
                  are tons of millions of people visiting this site everyday. So
                  we are not begging you but if you know you want your NGO to
                  get boosted well you need to register here and advert your
                  organization. But if not shame on you for not registering and
                  don't think we won't get other NGOs to register, we will get
                  so you see that's why i said shame on you and i will say it
                  again in capital letters SHAME ON YOU. woooooooo
                </p>
              </div>
            </div>
          </div>
        {/* </Jumbotron> */}
        </div>
      </div>
    );
  }
}

export default Home;

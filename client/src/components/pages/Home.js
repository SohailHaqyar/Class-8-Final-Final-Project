import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Sprint NGO</h1>
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
        </Jumbotron>
      </div>
    );
  }
}

export default Home;

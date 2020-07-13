import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  FormText,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";
import { Alert } from "reactstrap";
import { loginUser } from "../../actions/authActions";
import { connect } from "react-redux";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usern: "",
      pass: "",
      alertColor: "warning",
      alertFade: true,
      error: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isError) {
      this.setState({ error: nextProps.auth.isError });
    }
  }
  submitLogin(e) {
    e.preventDefault();
    const { usern, pass } = this.state;
    const toSendObject = {
      email: usern,
      password: pass,
      rememberm: remember_me,
    };
    this.props.loginUser(toSendObject);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div className="col-md-8 col-md-offset-3 align-center">
            <br />
            <br />
            <h3>Log in here</h3>
          </div>
          <div class="col-md-8 col-md-offset-3 align-center">
            <Form>
              <FormGroup>
                <Label for="login_email">Email</Label>
                <Input
                  onChange={this.handleChange}
                  type="email"
                  name="usern"
                  id="usern"
                  placeholder="Enter your email here"
                  value={this.state.usern}
                />
              </FormGroup>
              <FormGroup>
                <Label for="login_password">Password</Label>
                <InputGroup>
                  <Input
                    type="password"
                    onChange={this.handleChange}
                    name="pass"
                    value={this.state.pass}
                    id="pass"
                    placeholder="Enter your password here"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      Remember me{"\u00A0"}
                      <Input
                        addon
                        type="checkbox"
                        onChange={this.handleChange}
                        aria-label="Remember me"
                        name="remember_me"
                        id="remember_me"
                        value={this.state.remember_me}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <a href="/recover_pass">Forgot password?</a>
              </FormGroup>
              <FormGroup>
                <Button
                  type="submit"
                  color="primary"
                  onClick={(e) => this.submitLogin(e)}
                  block
                >
                  Login
                </Button>
              </FormGroup>
            </Form>
            <Alert
              color={this.state.alertColor}
              isOpen={this.state.error}
              className="login_response"
              fade={this.state.alertFade}
            >
              Authentication Failed
            </Alert>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { loginUser })(Login);

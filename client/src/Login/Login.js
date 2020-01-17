import React from "react";
import { connect } from "react-redux";
import * as actions from "./Authaction";
import { Redirect } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToApplication:false
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = async () => {
    await this.props.fetchUser(this.state);
    console.log("CLICK",this.props);
    this.setState({redirectToApplication:this.props.auth.redirectToApplication})
  };
  render() {
  console.log("PROPS",this.props);
    if (
     
      this.state.redirectToApplication===true
    ) {
      console.log("in");
      return <Redirect to="/admin" />;
    }

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="email"
                      name="username"
                      onChange={this.onChange}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={this.onChange}
                      name="password"
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    type="button"
                    onClick={this.onClick}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

const mapdispatchtoprops = dispatch => {
  return {
    fetchUser: objUser => dispatch(actions.fetchUser(objUser))
  };
};

const mapStatetoProps = ({ auth }) => {
  return {
    auth
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(Login);

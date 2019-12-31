import React from "react";
import { Redirect } from "react-router-dom";
import * as actions from "./actions";
import {connect} from "react-redux";

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
//import { connection } from "../../../server/Database/database";

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }
  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onClick=()=>{
    this.props.fetchUser(this.state);
  }
  render() {
    if(this.props.auth.redirectToApplication){
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
                    <Input placeholder="Email" name="username" onChange={this.onChange} type="email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" name="password" onChange={this.onChange} type="password" />
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
                  <Button className="my-4" color="primary" onClick={this.onClick} type="button">
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
const mapdispatchtoprops=dispatch=>{
  return {
    fetchUser: objUser => dispatch(actions.fetchUser(objUser))
  }
}
const mapStatetoProps = ({ auth }) => {
  return {
    auth
  };
};
export default connect(mapStatetoProps,mapdispatchtoprops)(Login);

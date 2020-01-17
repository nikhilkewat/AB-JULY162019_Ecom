import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import * as actions from "../action/userdetails";
import { store } from "react-notifications-component";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      contactNo: "",
      contactEmail: "",
      role: [{label:"GUEST", value:"GUEST"}, {label:"ADMIN", value:"ADMIN"}],
      iseditmode: false,
      selectedValue: null,
      selectedId: 0      
    };
  }

  async componentDidMount() {
    await this.props.getUserDetailList();
    
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSElectedIndexChanged=(option)=>{
    this.setState({selectedValue: option});
  }
  onClick = async () => {
    if (this.state.firstName === "") {
      store.addNotification({
        title: "Warning!",
        message: "First Name field is required",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      })
      return;
    } else if (this.state.middleName === "") {
      store.addNotification({
        title: "Warning!",
        message: "Middle Name field is required",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      })
      return;
    } else if (this.state.lastName === "") {
      store.addNotification({
        title: "Warning!",
        message: "Last Name field is required",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      })
      return;
    } else if (this.state.contactNo === "") {
      store.addNotification({
        title: "Warning!",
        message: "Contact Number field is required",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      })
      return;
    } else if (this.state.contactEmail === "") {
      store.addNotification({
        title: "Warning!",
        message: "Contact Email field is required",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      })
      return;
    } else if (this.state.role === "") {
      store.addNotification({
        title: "Warning!",
        message: "Role field is required",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      })
      return;
    }
    if(!this.state.iseditmode) {
      await this.props.insertUserDetail(this.state);
    } else {
      this.props.updateUserDetail(this.state);
      this.setState(prev => ({
        iseditmode: !prev.iseditmode,
        selectedId: 0
      }))
    }
    this.props.getUserDetailList();
    this.clearState();
  };
  onEditClick = obj => {
    var selectedobj = this.state.role.find(
      s => s.label.toLowerCase() === obj.role.toLowerCase()
    );
    this.setState(pre => ({
      firstName: obj.firstName,
      middleName: obj.middleName,
      lastName: obj.lastName,
      contactNo: obj.contactNo,
      contactEmail: obj.contactEmail,
      selectedValue: selectedobj,
      iseditmode: !performance.iseditmode,
      selectedId: obj.id
    }));
  };
  onDeleteClick =async obj => {
    this.props.deleteUserDetail(obj);
    this.props.getUserDetailList();
    store.addNotification({
      title: "Delete Success!",
      message: "Record Deleted successfully",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true
      }
    });
  };
  clearState() {
    this.setState(prev => ({
      firstName: "",
      middleName: "",
      lastName: "",
      contactNo: "",
      contactEmail: "",
      role: "",
      iseditmode: false,
      selectedValue: null,
      selectedId: 0
    }));
  }
  onCancelClick = () => {
    this.clearState();
  };
  render() {
    return(
      <>
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row>
                    <Col xs="8">
                      <h3 className="mb-0">User Details</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            First Name
                          </label>
                          <input
                            value={this.state.firstName}
                            type="text"
                            className="form-control-alternative form-control"
                            name="firstName"
                            onChange={this.onChange}
                            placeholder="First Name"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Middle Name
                          </label>
                          <input
                            value={this.state.middleName}
                            type="text"
                            className="form-control-alternative form-control"
                            name="middleName"
                            onChange={this.onChange}
                            placeholder="Middle Name"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Last Name
                          </label>
                          <input
                            value={this.state.lastName}
                            type="text"
                            className="form-control-alternative form-control"
                            name="lastName"
                            onChange={this.onChange}
                            placeholder="Last Name"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Contact Number
                          </label>
                          <input
                            value={this.state.contactNo}
                            type="text"
                            className="form-control-alternative form-control"
                            name="contactNo"
                            onChange={this.onChange}
                            placeholder="Contact Number"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Contact Email
                          </label>
                          <input
                            value={this.state.contactEmail}
                            type="email"
                            className="form-control-alternative form-control"
                            name="contactEmail"
                            onChange={this.onChange}
                            placeholder="Contact Email"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Role
                          </label>
                          <Select
                            options={this.state.role}
                            onChange={this.onSElectedIndexChanged}
                            value={this.state.selectedValue}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label className="form-control-label transparent">
                            {
                              "Action........................................................................"
                            }
                          </label>
                          <Button
                            color="success"
                            type="button"
                            onClick={this.onClick}
                          >
                            <i className="fa fa-save">&nbsp;</i>
                            Save
                          </Button>
                          <Button
                            color="danger"
                            type="button"
                            onClick={this.onCancelClick}
                          >
                            <i className="fa fa-ban">&nbsp;</i>
                            Cancel
                          </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="div500px">
                          <Card className="shadow">
                            <Table
                              className="align-items-center table-flush"
                              responsive
                            >
                              <thead className="thead-light">
                                <tr>
                                  <th scope="col">First Name</th>
                                  <th scope="col">Middle Name</th>
                                  <th scope="col">Last Name</th>
                                  <th scope="col">Contact Number</th>
                                  <th scope="col">Contact Email</th>
                                  <th scope="col">Role</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.props.userDetailsList.data.map(
                                  (item, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>{item.firstName}</td>
                                        <td>{item.middleName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.contactNo}</td>
                                        <td>{item.contactEmail}</td>
                                        <td>{item.role}</td>
                                        <td>
                                          <Button
                                            type="button"
                                            color="success"
                                            onClick={() =>
                                              this.onEditClick(item)
                                            }
                                            size="sm"
                                            className="circle"
                                          >
                                            <i className="fa fa-edit"></i>
                                          </Button>
                                          <Button
                                            type="button"
                                            color="danger"
                                            size="sm"
                                            className="circle"
                                            onClick={() =>
                                              this.onDeleteClick(item)
                                            }
                                          >
                                            <i className="fa fa-trash"></i>
                                          </Button>
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
                              </tbody>
                            </Table>
                          </Card>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

const mapdispatchtoprops = dispatch => {
  return {
    insertUserDetail: objUserDetail =>
      dispatch(actions.insertUserDetail(objUserDetail)),
    updateUserDetail: objUserDetail =>
      dispatch(actions.updateUserDetail(objUserDetail)),
    deleteUserDetail: objUserDetail =>
      dispatch(actions.deleteUserDetail(objUserDetail)),
    getUserDetailList: () => dispatch(actions.getUserDetail())
  };
};

const mapStatetoProps = ({ userDetails, userDetailsList }) => {
  return {
    userDetails,
    userDetailsList
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(UserDetails);

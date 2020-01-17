import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import * as actions from "../action/category";
import * as a1 from "../action/productcategory";
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
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      parentcategoryid: 0,
      selectedValue: null,
      iseditmode: false,
      selectedId: 0
    };
  }

  async componentDidMount() {
    await this.props.getcategorylist();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSElectedIndexChanged = option => {
    this.setState({ parentcategoryid: option.id, selectedValue: option });
  };
  onClick = async () => {
    if (this.state.category === "") {
      store.addNotification({
        title: "Warning!",
        message: "Category field is required",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
      return;
    }
    if (!this.state.iseditmode) {
      await this.props.insertcategory(this.state);
    } else {
      this.props.updatecategory(this.state);
      this.setState(prev => ({
        iseditmode: !prev.iseditmode,
        selectedId: 0
      }));
    }
    this.props.getcategorylist();
    this.clearState();
  };
  onEditClick = obj => {
    var selectedobj = this.props.categoryList.data.find(
      s => s.id === obj.parentCategoryId
    );
    this.setState(pre => ({
      category: obj.category,
      parentcategoryid: obj.parentCategoryId,
      selectedValue: selectedobj,
      iseditmode: !performance.iseditmode,
      selectedId: obj.id
    }));
  };
  onDeleteClick = async obj => {
    this.props.deletecategory(obj);
    this.props.getcategorylist();
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
      iseditmode: false,
      category: "",
      parentcategoryid: 0,
      selectedValue: null,
      selectedId: 0
    }));
  }
  onCancelClick = () => {
    this.clearState();
  };
  render() {
    return (
      <>
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row>
                    <Col xs="8">
                      <h3 className="mb-0">Category</h3>
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
                            Category
                          </label>
                          <input
                            value={this.state.category}
                            type="text"
                            className="form-control-alternative form-control"
                            name="category"
                            onChange={this.onChange}
                            placeholder="Category"
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
                            Parent Category
                          </label>
                          <Select
                            options={this.props.categoryList.data}
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
                                  <th scope="col">Category</th>
                                  <th scope="col">Parent Category</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.props.categoryList.data.map(
                                  (item, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>{item.category}</td>
                                        <td>{item.ParentCategory}</td>
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
    );
  }
}

const mapdispatchtoprops = dispatch => {
  return {
    insertcategory: objcategory =>
      dispatch(actions.insertCategory(objcategory)),
    updatecategory: objcategory =>
      dispatch(actions.updateCategory(objcategory)),
    deletecategory: objcategory =>
      dispatch(actions.deleteCategory(objcategory)),
    getcategorylist: () => dispatch(actions.getCategoryList_1())
  };
};

const mapStatetoProps = ({ category, categoryList }) => {
  return {
    category,
    categoryList
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(Category);

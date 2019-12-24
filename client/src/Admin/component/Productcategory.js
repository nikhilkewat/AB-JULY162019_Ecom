import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import * as actions from "../action/productcategory";
import { store } from 'react-notifications-component';

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
class ProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productid: "",
      categoryid: "",
      //selectedValue: null,
      iseditmode: false,
      //selectedId: 0
    };
  }


  async componentDidMount() {
    await this.props.getproductcategorylist();
    await this.props.getcategorylist();
    await this.props.getproductlist();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onProductSelectedIndexChanged = option => {
    this.setState({ productid: option.id, prodSelectedValue: option });
    //console.log(this.state);
  };
  onCategorySelectedIndexChanged = option => {
    this.setState({ categoryid: option.id, catSelectedValue: option });
  };
  onClick = async () => {
    //console.log(this.state);
    if (this.state.productid === "") {
      store.addNotification({
        title: "Warning!",
        message: "Product field is required",
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
    if (this.state.categoryid === "") {
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
      await this.props.insertproductcategory(this.state)
    } else {
      this.props.updateproductcategory(this.state);
      this.setState(prev => ({
        iseditmode: !prev.iseditmode,
        selectedId: 0
      }));
    }
    this.props.getproductcategorylist();
    this.clearState();
  };

  onEditClick = obj => {

    var selectedobj = this.props.productList.data.find(
      s=>s.id === obj.productId
    );
    var categoryselectedobj = this.props.categoryList.data.find(
      s=>s.id === obj.categoryId
    );
      //console.log(obj);
    //console.log(this.props.productcategoryList.data);
    this.setState({
      productid: obj.productId,
      categoryid: obj.categoryId,
      prodSelectedValue: selectedobj,
      catSelectedValue: categoryselectedobj,
      iseditmode: true,
      selectedId: obj.id
    })
    console.log(this.state);
  };

  onDeleteClick =async obj => {
    this.props.deleteproductcategory(obj);
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
      productid: "",
      categoryid: "",
      prodSelectedValue: null,
      catSelectedValue: null,
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
                      <h3 className="mb-0">Product Category</h3>
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
                            Product
                          </label>

                          <Select
                            options={this.props.productList.data}
                            onChange={this.onProductSelectedIndexChanged}
                            value={this.state.prodSelectedValue}
                          />

                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Category
                          </label>
                          <Select
                            options={this.props.categoryList.data}
                            onChange={this.onCategorySelectedIndexChanged}
                            value={this.state.catSelectedValue}
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
                                  <th scope="col">Product</th>
                                  <th scope="col"> Category </th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.props.productcategoryList.data.map(
                                  (item, index) => {
                                      //console.log(item);
                                    return (
                                      <tr key={index}>
                                        <td>{item.productName}</td>
                                        <td>{item.category}</td>
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
    insertproductcategory: objproductcategory =>
      dispatch(actions.insertProductCategory(objproductcategory)),
    updateproductcategory: objproductcategory =>
      dispatch(actions.updateProductCategory(objproductcategory)),
    deleteproductcategory: objproductcategory =>
      dispatch(actions.deleteProductCategory(objproductcategory)),
    getproductcategorylist: () => dispatch(actions.getProductCategoryList()),
    getcategorylist: () => dispatch(actions.getCategoryList()),
    getproductlist: () => dispatch(actions.getProductList()),
  };
};

const mapStatetoProps = ({ productcategory, productcategoryList,categoryList,productList }) => {
  return {
    productcategory,
    productcategoryList,
    categoryList,
    productList
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(ProductCategory);

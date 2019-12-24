import React, { Component } from "react";
import { connect } from 'react-redux';
import Select from 'react-select';
import * as actionCreators from '../action/addressDetails';
import stateData from '../../Common/Data/UsState';
import { store } from 'react-notifications-component';

import {
    Card,
    CardHeader,
    CardBody,
    Table,
    Container,
    Row,
    FormGroup,
    Input,
    Col,
    Button
} from "reactstrap";

class AddressDetails extends Component {
    state = {
        userDetailId: 0,
        address: '',
        state: '',
        county: '',
        zipcode: '',
        iseditmode: false,
        selectedState: null
    }
    async componentDidMount() {
        await this.props.onGetAddressList();
    }
    userAddressChangeHandler(event) {
        const nam = event.target.name;
        const val = event.target.value;
        this.setState({
            [nam]: val
        })
    }

    onSelectedIndexChanged(option) {
        this.setState({
            state: option.label,
            selectedState: option
        })
    }

    async addressSaveHandler() {
        if (this.state.address === "") {
            store.addNotification({
                title: "Warning!",
                message: "Address field is required",
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
        } else if (this.state.state === "") {
            store.addNotification({
                title: "Warning!",
                message: "State field is required",
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
        } else if (this.state.county === "") {
            store.addNotification({
                title: "Warning!",
                message: "County field is required",
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
        } else if (this.state.zipcode === "") {
            store.addNotification({
                title: "Warning!",
                message: "Zipcode field is required",
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
            this.props.onInsertAddressClick(this.state);
        } else {
            this.props.OnUpdateAddress(this.state);
            this.setState(prev => ({
                iseditmode: true,
            }));
        }
        this.props.onGetAddressList();
        this.clearState();
    }

    editClickHandler(addDetails) {
        var st = stateData.find(X => X.label === addDetails.state)
        this.setState({
            userDetailId: addDetails.userDetailId,
            address: addDetails.address,
            state: addDetails.state,
            county: addDetails.county,
            zipcode: addDetails.zipcode,
            iseditmode: true,
            addId: addDetails.id,
            selectedState: st
        })
    }
    async deleteAddressHandler(delId) {
        this.props.onDeleteAddress(delId);
        this.props.onGetAddressList();
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
    }
    clearState() {
        this.setState(prev => ({
            address: '',
            state: '',
            county: '',
            zipcode: '',
            iseditmode: false,
            selectedState: null
        }));
    }
    onCancelClick() {
        this.clearState();
    }

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
                                            <h3 className="mb-0">Address Details</h3>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="3">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Address
                                                    </label>
                                                    <Input
                                                        id="exampleFormControlInput1"
                                                        name="address"
                                                        placeholder="Address"
                                                        rows="3"
                                                        type="text"
                                                        onChange={this.userAddressChangeHandler.bind(this)}
                                                        value={this.state.address}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="2">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        State
                                                    </label>
                                                    <Select
                                                        options={stateData}
                                                        onChange={this.onSelectedIndexChanged.bind(this)}
                                                        value={this.state.selectedState}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="2">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        County
                                                    </label>
                                                    <Input
                                                        id="exampleFormControlInput2"
                                                        name="county"
                                                        placeholder="County"
                                                        type="text"
                                                        value={this.state.county}
                                                        onChange={this.userAddressChangeHandler.bind(this)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="2">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Zipcode
                                                    </label>
                                                    <Input
                                                        id="exampleFormControlInput3"
                                                        name="zipcode"
                                                        placeholder="Zipcode"
                                                        type="text"
                                                        value={this.state.zipcode}
                                                        onChange={this.userAddressChangeHandler.bind(this)}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <label className="form-control-label transparent">
                                                        {
                                                            "Action........................................................................"
                                                        }
                                                    </label>
                                                    <Button color="success" type="button" onClick={this.addressSaveHandler.bind(this)} >
                                                        <i className="fa fa-save">&nbsp;</i>
                                                        Save
                                                    </Button>
                                                    <Button
                                                        color="danger"
                                                        type="button"
                                                        onClick={this.onCancelClick.bind(this)}
                                                    >
                                                        <i className="fa fa-ban">&nbsp;</i>
                                                        Cancel
                                                    </Button>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </div>
                                    {/* Dark table */}
                                    <Row className="mt-4">
                                        <div className="col">
                                            <Card className="bg-default shadow">
                                                <Table
                                                    className="align-items-center table-dark"
                                                    responsive
                                                >
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th scope="col">Address</th>
                                                            <th scope="col">State</th>
                                                            <th scope="col">County</th>
                                                            <th scope="col">Zipcode </th>
                                                            <th scope="col">Action </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.addressDetailsList.data.map((addDetails, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td> {addDetails.address} </td>
                                                                        <td> {addDetails.state} </td>
                                                                        <td> {addDetails.county} </td>
                                                                        <td> {addDetails.zipcode} </td>
                                                                        <td>
                                                                            <Button onClick={this.editClickHandler.bind(this, addDetails)} color="success" size="sm" className="circle" type="button">
                                                                                <i className="fa fa-edit"></i>
                                                                            </Button>
                                                                            <Button onClick={this.deleteAddressHandler.bind(this, addDetails.id)} color="danger" size="sm" className="circle" type="button">
                                                                                <i className="fa fa-trash"></i>
                                                                            </Button>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </Table>
                                            </Card>
                                        </div>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const mapStateToProps = ({ address, addressDetailsList }) => {
    return {
        address,
        addressDetailsList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInsertAddressClick: (objAddress) => dispatch(actionCreators.insertAddress(objAddress)),
        OnUpdateAddress: (objAddress) => dispatch(actionCreators.updateAddress(objAddress)),
        onGetAddressList: () => dispatch(actionCreators.getAddressList()),
        onDeleteAddress: (delId) => dispatch(actionCreators.deleteAddressId(delId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetails);

import React, { Component } from "react";
import { connect } from 'react-redux';
import Select from 'react-select';
import * as actionCreators from '../../actions/addressDetails';
import stateData from './UsState';

// import { AgGridReact } from '@ag-grid-community/react';
// import { AllCommunityModules } from '@ag-grid-community/all-modules';
// import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
// import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,

    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,

    Button
} from "reactstrap";

//import Header from "../../../Common/Headers/Header";

class AddressDetails extends Component {
    state = {
        userDetailId: 0,
        address: '',
        state: '',
        county: '',
        zipcode: '',
        isEdited: false
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

    onSelectedIndexChanged(option){
        this.setState({
            state : option.label
        })
    }

    addressSaveHandler() {
        this.props.onInsertAddressClick(this.state);
        this.props.onGetAddressList();
    }

    editClickHandler(addDetails) {
        this.setState({
            address: addDetails.address,
            state: addDetails.state,
            county: addDetails.county,
            zipcode: addDetails.zipcode,
            isEdited: true,
            addId: addDetails.id
        })
    }
    deleteAddressHandler(delId) {
        this.props.onDeleteAddress(delId);
        this.props.onGetAddressList();
    }

    render() {
        return (
            <>
                <div className="main-content">
                    <div className="header bg-secondary py-7 py-lg-5">
                        <Container>
                            <div>
                                <h1>User Address</h1>
                            </div>
                            <Form>
                                <Row>
                                    <Col md="3">
                                        <FormGroup> Address
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
                                    <Col md="3">
                                        <FormGroup> State
                                            {/* <Input
                                                id="exampleFormControlInput1"
                                                name="state"
                                                placeholder="State"
                                                type="text"
                                                value={this.state.state}
                                                onChange={this.userAddressChangeHandler.bind(this)}
                                            /> */}
                                            <Select
                                                options={stateData}
                                                onChange={this.onSelectedIndexChanged.bind(this)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="3">
                                        <FormGroup> County
                                            <Input
                                                id="exampleFormControlInput1"
                                                name="county"
                                                placeholder="County"
                                                type="text"
                                                value={this.state.county}
                                                onChange={this.userAddressChangeHandler.bind(this)}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="3">
                                        <FormGroup> Zipcode
                                            <Input
                                                id="exampleFormControlInput1"
                                                name="zipcode"
                                                placeholder="Zipcode"
                                                type="text"
                                                value={this.state.zipcode}
                                                onChange={this.userAddressChangeHandler.bind(this)}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col md="3">
                                        {/* <FormGroup>
                                            <Select
                                                options={stateData}
                                                onChange={this.onSelectedIndexChanged}
                                            />
                                        </FormGroup> */}
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Button color="danger" type="button" onClick={this.addressSaveHandler.bind(this)} > Add </Button>
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </Form>
                            {/* <Header /> */}
                            {/* Page content */}
                            {/* <Container className="mt--7" fluid> */}

                            {/* Dark table */}
                            <Row className="mt-4">
                                <div className="col">
                                    <Card className="bg-default shadow">
                                        <CardHeader className="bg-transparent border-0">
                                            <h3 className="text-white mb-0">Address Details Table</h3>
                                        </CardHeader>
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
                                                    <th scope="col">Edit / Delete </th>
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
                                                                    <Button onClick={this.editClickHandler.bind(this, addDetails)} color="warning" size="sm" type="button">
                                                                        Edit</Button>
                                                                    <Button onClick={this.deleteAddressHandler.bind(this, addDetails.id)} color="success" size="sm" type="button">
                                                                        Delete</Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                        <CardFooter className="py-4">
                                            <nav aria-label="...">
                                                <Pagination
                                                    className="pagination justify-content-end mb-0"
                                                    listClassName="justify-content-end mb-0"
                                                >
                                                    <PaginationItem className="disabled">
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                            tabIndex="-1"
                                                        >
                                                            <i className="fas fa-angle-left" />
                                                            <span className="sr-only">Previous</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem className="active">
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            1
                                                    </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            2 <span className="sr-only">(current)</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            3
                                                    </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink
                                                            href="#pablo"
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-angle-right" />
                                                            <span className="sr-only">Next</span>
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </Pagination>
                                            </nav>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ insertAddress, addressDetailsList, deleteAddress }) => {
    return {
        insertAddress,
        addressDetailsList,
        deleteAddress
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInsertAddressClick: (objAddress) => dispatch(actionCreators.insertAddress(objAddress)),
        onGetAddressList: () => dispatch(actionCreators.getAddressList()),
        onDeleteAddress: (delId) => dispatch(actionCreators.deleteAddressId(delId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetails);

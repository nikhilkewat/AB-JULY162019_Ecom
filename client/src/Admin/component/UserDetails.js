import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import * as actions from "../action/userdetails";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      contactNo: 0,
      contactEmail: "",
      role: ""      
    };
  }

  async componentDidMount() {
    await this.props.getuserdetailslist();
    console.log(this.props.userDetailsList);
    
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSElectedIndexChanged=(option)=>{

    this.setState({id:option.id});
      
  }
  onClick =async  () => {
   await this.props.insertuserdetails(this.state);
    await this.props.getuserdetailslist();
  };
  render() {
     console.log(this.props.getuserdetailslist);
    const {data}= this.props.userDetailsList;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 form-group">
            <input
              type="text"
              name="firstName"
              onChange={this.onChange}
              placeholder="First Name"
            />
            <input
              type="text"
              name="middleName"
              onChange={this.onChange}
              placeholder="Middle Name"
            />
            <input
              type="text"
              name="lastName"
              onChange={this.onChange}
              placeholder="Last Name"
            />
            <input
              type="text"
              name="contactNo"
              onChange={this.onChange}
              placeholder="Contact Number"
            />
            <input
              type="email"
              name="contactEmail"
              onChange={this.onChange}
              placeholder="Contact Email"
            />
            <input
              type="text"
              name="role"
              onChange={this.onChange}
              placeholder="Role"
            />
          </div>
          <div className="col-md-2 form-group">
            <Select options={this.props.userDetailsList.data} onChange={this.onSElectedIndexChanged}/>
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.onClick}
            >
              Save
            </button>
          </div>
        </div>
        <div className="row">
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Contact Number</th>
                    <th>Contact Email</th>
                    <th>Role</th>
                </thead>
                <tbody>
                {this.props.userDetailsList.data.map((item,index)=>{
                    
                    return (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.middleName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.contactNo}</td>
                            <td>{item.contactEmail}</td>
                            <td>{item.role}</td>
                            <td><button type="button">EDIT </button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>


        </div>
      </div>
    );
  }
}

const mapdispatchtoprops = dispatch => {
  return {
    insertuserdetails: objUserDetail =>
      dispatch(actions.insertUserDetail(objUserDetail)),
    getuserdetailslist: () => dispatch(actions.getUserDetails())
  };
};

const mapStatetoProps = ({ userDetails, userDetailsList }) => {
  return {
    userDetails,
    userDetailsList
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(UserDetails);

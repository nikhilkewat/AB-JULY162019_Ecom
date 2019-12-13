import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import * as actions from "../action/category";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      parentcategoryid: 0,
      
    };
  }

  async componentDidMount() {
    await this.props.getcategorylist();
    console.log(this.props.categoryList);
    
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSElectedIndexChanged=(option)=>{

    this.setState({parentcategoryid:option.id});
      
  }
  onClick =async  () => {
   await this.props.insertcategory(this.state);
    await this.props.getcategorylist();
  };
  render() {
     console.log(this.props.categoryList);
    const {data}= this.props.categoryList;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 form-group">
            <input
              type="text"
              name="category"
              onChange={this.onChange}
              placeholder="Category"
            />
          </div>
          <div className="col-md-2 form-group">
            <Select options={this.props.categoryList.data} onChange={this.onSElectedIndexChanged}/>
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
                    <th>Category</th>
                    <th>Parent Category</th>
                    <th></th>
                </thead>
                <tbody>
                {this.props.categoryList.data.map((item,index)=>{
                    
                    return (
                        <tr key={index}>
                            <td>{item.category}</td>
                            <td>{item.ParentCategory}</td>
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
    insertcategory: objcategory =>
      dispatch(actions.insertCategory(objcategory)),
    getcategorylist: () => dispatch(actions.getCategoryList())
  };
};

const mapStatetoProps = ({ category, categoryList }) => {
  return {
    category,
    categoryList
  };
};
export default connect(mapStatetoProps, mapdispatchtoprops)(Category);

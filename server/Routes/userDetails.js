var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const userDetails = express();

const getQuery = "Select * From UserDetails;";
userDetails.post("/insertuserdetail", function (req, res) {
    var obj = {
        error: false,
        success: true,
        data: []
    };

    var query = mysqlescape(
        ("Insert into UserDetails  (firstName,middleName,lastName,contactNo,contactEmail,role) values (:firstName,:middleName,:lastName,:contactNo,:contactEmail,:role);" + getQuery),
        {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            contactNo: req.body.contactNo,
            contactEmail: req.body.contactEmail,
            role: req.body.selectedValue.value
        });
    databaseConnection.connection.query(query, (err, res1, rows) => {
        obj.data = res1[1];
        res.status(201).json(obj);
    })
});

userDetails.post("/updateuserdetail", function (req, res) {
    var obj = {
        error: false,
        success: true,
        data: []
    };
    const query = mysqlescape(
        ("Update UserDetails set firstName=:firstName,middleName=:middleName,lastName=:lastName,contactNo=:contactNo,contactEmail=:contactEmail,role=:role,modifiedDateTime=now() where id=:id;" + getQuery),
        {
          firstName: req.body.firstName,
          middleName: req.body.middleName,
          lastName: req.body.lastName,
          contactNo: req.body.contactNo,
          contactEmail: req.body.contactEmail,
          role: req.body.role
        });
    databaseConnection.connection.query(query, (err, res1, rows) => {
        obj.data = res1[1];
        res.status(201).json(obj);
    })
});

userDetails.get("/getuserdetaillist", function (req, res) {
    var obj = {
        error: false,
        success: true,
        data: []
    };
    var query = mysqlescape(
        "Select * From UserDetails"
    );
    databaseConnection.connection.query(query, (err, res1, rows) => {
        obj.data = res1;
        res.status(201).json(obj);
    })
});

userDetails.post("/deleteuserdetail", function (req, res) {
    var obj = {
        error: false,
        success: true,
        data: []
    };
    var query = mysqlescape(
        ("Delete From UserDetails where id=:id ;" + getQuery),
        {
            id: req.body.id
        });
    databaseConnection.connection.query(query, (err, res1, rows) => {
        obj.data = res1[1];
        res.status(201).json(obj);
    })
});


module.exports = userDetails;
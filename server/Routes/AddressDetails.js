var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const address = express();

const getQuery = "Select * From AddressDetails";
address.post("/insertaddress", function (req, res) {
    var obj = {
        error: false,
        success: true,
        data: []
    };
    if (req.body.iseditmode === true) {
        const query = mysqlescape(
            ("Update AddressDetails set userDetailId=:userDetailId,address=:address,state=:state,county=:county,zipcode=:zipcode where id=:addressId;" + getQuery),
            {
                userDetailId: req.body.userDetailId,
                address: req.body.address,
                state: req.body.state,
                county: req.body.county,
                zipcode: req.body.zipcode,
                addressId: req.body.addId,
            });
        databaseConnection.connection.query(query, (err, result, rows) => {
            obj.data = result[1];
            res.status(201).json(obj);
        })
    } else {
        var query = mysqlescape(
            ("Insert into AddressDetails  (userDetailId,address,state,county,zipcode) values (:userDetailId,:address,:state,:county,:zipcode);" + getQuery),
            {
                userDetailId: req.body.userDetailId,
                address: req.body.address,
                state: req.body.state,
                county: req.body.county,
                zipcode: req.body.zipcode,
            });
        databaseConnection.connection.query(query, (err, result, rows) => {
            obj.data = result[1];
            res.status(201).json(obj);
        })
    }
});

address.post("/updateaddress", function (req, res) {
    var obj = {
        error: false,
        success: true,
        data: []
    };
    const query = mysqlescape(
        ("Update AddressDetails set userDetailId=:userDetailId,address=:address,state=:state,county=:county,zipcode=:zipcode where id=:addressId;" + getQuery),
        {
            userDetailId: req.body.userDetailId,
            address: req.body.address,
            state: req.body.state,
            county: req.body.county,
            zipcode: req.body.zipcode,
            addressId: req.body.addId,
        });
    databaseConnection.connection.query(query, (err, result, rows) => {
        obj.data = result[1];
        res.status(201).json(obj);
    })
});

address.get("/getaddresslist", function (req, res) {
    var obj = {
        error: false,
        success: true,
        data: []
    };
    var query = mysqlescape(
        "Select * From AddressDetails"
    );
    databaseConnection.connection.query(query, (err, result, rows) => {
        obj.data = result;
        res.status(201).json(obj);
    })
});

address.post("/deleteaddress", function (req, res) {
    //console.log(req.body.id);
    var obj = {
        error: false,
        success: true,
        data: []
    };
    var query = mysqlescape(
        ("Delete From AddressDetails where id=:addressId ;" + getQuery),
        {
            addressId: req.body.id
        });
    databaseConnection.connection.query(query, (err, result, rows) => {
        obj.data = result[1];
        res.status(201).json(obj);
    })
});


module.exports = address;

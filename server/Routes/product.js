var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const product = express();

const getQuery =
  "Select p.*,p.Id as value,p.productName as label From ProductMaster as p order by 1";

product.get("/getproduct", function(req, res) {
  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(getQuery);
  databaseConnection.connection.query(query, (err, res1, rows) => {
    obj.data = res1;
    res.status(201).json(obj);
  });
});

module.exports = product;

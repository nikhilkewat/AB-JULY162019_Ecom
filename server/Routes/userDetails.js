var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const userDetails = express();

userDetails.post("/insertuserdetail", function(req, res) {
  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(
    "Insert into UserDetails (Category,ParentCategoryId) Values (:Category,:ParentCategoryId)",
    {
      Category: req.body.category,
      ParentCategoryId: req.body.parentcategoryid
    }
  );
  databaseConnection.connection.query(query, (err, res1, rows) => {
    obj.body = res1;
    res.status(201).json(obj);
  });
});

userDetails.get("/getuserdetails", function(req, res) {
    var obj = {
      error: false,
      success: true,
      data: []
    };
  
    var query = mysqlescape(
      "Select c.*,c.Id as value,c.Category as label,c1.Category as ParentCategory From Category c left Join Category c1 on c.ParentCategoryId=c1.Id"
    );
    databaseConnection.connection.query(query, (err, res1, rows) => {
      obj.data = res1;
      res.status(201).json(obj);
    });
  });


module.exports = userDetails;

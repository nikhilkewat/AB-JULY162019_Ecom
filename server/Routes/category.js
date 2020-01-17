var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
var checktoken = require("./CheckToken");
const category = express();

const getQuery =
  "Select c.*,c.Id as value,c.Category as label,c1.Category as ParentCategory From Category c left Join Category c1 on c.ParentCategoryId=c1.Id order by 1;";
category.post("/insertcategory", function(req, res) {
  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(
   ("Insert into Category (Category,ParentCategoryId) Values (:Category,:ParentCategoryId);" +  getQuery),
    {
      Category: req.body.category,
      ParentCategoryId: req.body.parentcategoryid
    }
  );
  databaseConnection.connection.query(query, (err, res1, rows) => {
    obj.data = res1[1];
    res.status(201).json(obj);
  });
});

category.post("/updatecategory", function(req, res) {
  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(
    ("Update Category set Category=:Category,ParentCategoryId=:ParentCategoryId,modifieddatetime=now() where id=:id;" +
      getQuery),
    {
      id: req.body.selectedId,
      Category: req.body.category,
      ParentCategoryId: req.body.parentcategoryid
    }
  );
  
  databaseConnection.connection.query(query, (err, res1, rows) => {
    obj.data = res1[1];
    res.status(201).json(obj);
  });
});

category.post("/deletecategory", function(req, res) {
  
  var obj = {
    error: false,
    success: true,
    data: []
  };
  
  var query = mysqlescape(("Delete from Category where id=:id;" + getQuery), {
    id: req.body.id
  });
  
  databaseConnection.connection.query(query, (err, results, rows) => {    
    obj.data = results[1];
    res.status(201).json(obj);
  });
});

category.get("/getcategory", function(req, res) {
  
  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(getQuery);
  databaseConnection.connection.query(query, (err, res1, rows) => {
    if(err){
      
      res.status(400).json(err);
    }
    else{
      console.log(res1);
    obj.data = res1;
    res.status(201).json(obj);}
  });
});

module.exports = category;

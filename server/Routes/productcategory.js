var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const productcategory = express();

const getQuery =
  "SELECT pc.*, pc.Id as value, c.category as category, p.productName FROM ProductCategory pc, Category c, ProductMaster p WHERE pc.productId = p.id AND pc.categoryId=c.id order by 1;";
productcategory.post("/insertpcategory", function(req, res) {
  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(
   ("Insert into ProductCategory (productId,categoryId) Values (:productId,:categoryId);" +  getQuery),
    {
      productId: req.body.productid,
      categoryId: req.body.categoryid
    }
  );
  //console.log(query);
  databaseConnection.connection.query(query, (err, res1, rows) => {
    obj.data = res1[1];
    res.status(201).json(obj);
  });
});

productcategory.post("/updatepcategory", function(req, res) {
  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(
    ("Update ProductCategory set productId=:productId,categoryId=:categoryId,modifieddatetime=now() where id=:id;" +
      getQuery),
    {
      id: req.body.selectedId,
      productId: req.body.productid,
      categoryId: req.body.categoryid
    }
  );
    console.log(req.body);
  databaseConnection.connection.query(query, (err, res1, rows) => {
    obj.data = res1[1];
    res.status(201).json(obj);
  });
});

productcategory.post("/deletepcategory", function(req, res) {

  var obj = {
    error: false,
    success: true,
    data: []
  };

  var query = mysqlescape(("Delete from ProductCategory where id=:id;" + getQuery), {
    id: req.body.id
  });

  databaseConnection.connection.query(query, (err, results, rows) => {
    obj.data = results[1];
    res.status(201).json(obj);
  });
});

productcategory.get("/getpcategory", function(req, res) {
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

module.exports = productcategory;

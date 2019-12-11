var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const login = express();



login.post("/login", function(req, res) {
  console.log(req.body);
  var obj = {
    error: false,
    success: true,
    data: "Login Route executesd",
    body : req.body
  };

  var query = "select * from User where username='"+req.body.username+"' and password='"+req.body.password+"'";
  var query1= mysqlescape("select * From User where username=:pusername and password=:ppassword",{
    pusername: req.body.username,
    ppassword:req.body.password
  })
  databaseConnection.connection.query(query,(err,res1,rows)=>{

        obj.body = res1;
        res.status(201).json(obj);
  })
});

login.get("/getData", function(req, res) {
  res.status(201).json("Get Method Executesd");
});

module.exports = login;

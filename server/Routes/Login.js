var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
const login = express();
//Auth
var jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("secret_cryptr_key");


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

        obj.data = res1;
        let token = jwt.sign(
          {
            ...res1
          },
          "jwt_token_secret_abjuly",
          {
            expiresIn: "1h" // expires in 12 hours
          }
        );
        token=cryptr.encrypt(token);
        obj.token=token;
        res.status(201).json(obj);
  })
});

login.get("/getData", function(req, res) {
  res.status(201).json("Get Method Executesd");
});

module.exports = login;

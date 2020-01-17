var express = require("express");
var databaseConnection = require("../Database/database");
var mysqlescape = require("mysql-named-params-escape");
var jwt = require("jsonwebtoken");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("secret_cryptr_key");
const login = express();

login.post("/login", function(req, res) {
  
  var obj = {
    error: false,
    success: true,
    data: "Login Route executesd",
    body: req.body
  };

  var query =
    "select * from User where username='" +
    req.body.username +
    "' and password='" +
    req.body.password +
    "'";
  var query1 = mysqlescape(
    "select * From User where username=:pusername and password=:ppassword",
    {
      pusername: req.body.UserName,
      ppassword: req.body.Password
    }
  );
  databaseConnection.connection.query(query1, (err, res1, rows) => {
    console.log(res1);
    let token = jwt.sign(
      {
        ...res1
      },
      "jwt_token_secret_abjuly",
      {
        expiresIn: "1h" // expires in 12 hours
      }
    );
    token = cryptr.encrypt(token);
    obj.data = res1;
    obj.token = token;
    res.status(201).json(obj);
  });
});

login.get("/getData", function(req, res) {
  res.status(201).json("Get Method Executesd");
});

module.exports = login;

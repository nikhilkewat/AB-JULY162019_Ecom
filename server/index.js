const express = require("express");
const bodyParser = require("body-parser");
const cors=require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,authorization"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

// var login = require("./Routes/Login");
// app.use("/api",login);

var category = require("./Routes/category");
var userdetails = require("./Routes/userDetails");
app.use("/api",category);
app.use("/api", userdetails);

const address = require("./Routes/AddressDetails");
app.use("/api",address);
//Product and Product Category
var product=require("./Routes/product");
var productcategory = require("./Routes/productcategory");
app.use("/api",productcategory);
app.use("/api",product);
//Login
var login = require('./Routes/login');
app.use('/api/',login);
var server = app.listen(5002, function() {
 console.log("Server Started")  ;
});


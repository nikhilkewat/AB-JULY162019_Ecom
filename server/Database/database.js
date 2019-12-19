var mysql = require("mysql");

var connection = mysql.createPool({
  host: "remotemysql.com",
  user: "pX4Ly7PFZ6",
  password: "mV7ydx6Sbz",
  database: "pX4Ly7PFZ6",
  port: 3306,
  multipleStatements: true ,
  });

module.exports.connection = connection;



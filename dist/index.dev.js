"use strict";

var express = require('express');

var app = express();
var port = 3001;
app.get('/', function (req, res) {
  res.send('<h1 style="color:red;">Hello cho xin chafo!</h1>');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});
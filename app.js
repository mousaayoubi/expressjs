var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var port = "3000";

var app = express();

app.use(function(request, response, next) {
  console.log("Time is " + Date.now());
  next();
});
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(request, response) {
  response.send("hi world");
});

app.get("/about", function(request, response) {
  response.send("About Page");
});

app.listen(port, function() {
  console.log("Server is listening on port " + port);
});

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var port = "3000";

var app = express();

app.use(function(request, response, next) {
  console.log("Time now is " + Date.now());
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set(path.join(__dirname, "views"));

app.get("/", function(request, response) {
  response.render("index");
});

app.get("/about", function(request, response) {
  response.render("about");
});

app.get("/contact", function(request, response) {
  response.render("contact");
});

app.listen(port, function() {
  console.log("Server is listening on port " + port);
});

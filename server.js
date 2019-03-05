var express = require("express");
var bodyParser= require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + "/public"));

// Parse application body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"))

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/",routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
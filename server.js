require("dotenv").config();
console.log(process.env.PET_KEY);

var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var mysql2 = require("mysql2");

var passport = require("./config/passport");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("----------------------------------------------")
    console.log("App listening on PORT " + PORT);
  });
});
app.get('/', function(req,res) {
  res.render('search', {petKey: process.env.PET_KEY, petSecret: process.env.PET_SECRET})
});
var express = require("express");
var exphbs = require("express-handlebars");
var mysql2 = require("mysql2");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("----------------------------------------------")
    console.log("App listening on PORT " + PORT);
  });
});

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //for Log In
  //COMMAND route for logging in existing user


  //for Sign Up
  // GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    db.User.findAll({})
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get route for retrieving a single user
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // DELETE route for deleting user
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // PUT route for updating user
  app.put("/api/users", function(req, res) {
    db.User.update(req.body,{
      where: {
        id: req.body.id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //for Search
  //COMMAND to display the JSON created from the form on search.html

  //for View
  //COMMAND to search petfinder.com for pets based off criteria & create JSON results, displaying NAME: AGE: LOCATION: BREED: IMG: & LIKE FOR USER?
  //COMMAND to post input results into MYSQL
};

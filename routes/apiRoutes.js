var db = require("../models");
var Sequelize = require("sequelize");
var passport = require("../config/passport");


var queryURL = "https://api.petfinder.com/v2/type=?&location=?&gender=?&age=?";

module.exports = function (app) {
  // Get all examples
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });
  
  
  app.post("/api/login/", passport.authenticate("local", {
    successRedirect: '/index',
    failureRedirect: '/error',
    failureFlash:true
  }),function (req, res) {
    res.render("/login",{"message" : req.flash("message")});
  });

  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // // Create a new example
  app.post("/api/new", function (req, res) {
    db.User.create({
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass
    })
      .then(function (dbUser) {
        console.log(dbUser);
        res.json(dbUser);
      });
  });
    
    app.post("/api/search/", function(req, res) {
      console.log(req.body);
      var searchInput = req.params.input;
      console.log(req.params.input);

      db.Search.create({
        pet: req.body.pet,
        gender: req.body.gender,
        age: req.body.age,
        location: req.body.location
      })
      .then(function(dbSearch) {
        console.log(dbSearch);
        res.json(dbSearch);
      });

    });
    // Delete an example by id
    app.delete("/api/users/:id", function (req, res) {
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });

    app.put("/api/users", function (req, res) {
      db.User.update(req.body, {
        where: {
          id: req.body.id
        }
      })
        .then(function (dbUser) {
          res.json(dbUser);
        });
    });
  };
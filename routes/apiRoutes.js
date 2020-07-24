var db = require("../models");
var NewUser = require("../models/user");

module.exports = function (app) {
  // Get all examples
  app.get("/api/new", function (req, res) {
    db.NewUser.findAll({}).then(function (dbNewUser) {
      res.json(dbNewUser);
    });
  });

  // // Create a new example
  app.post("/api/new", function (req, res) {
    db.NewUser.create(req.body).then(function (dbNewUser) {
      NewUser.create({
        uname: user.uname,
        email: user.email,
        pass: user.pass
      });
      
      res.json(dbNewUser);
      res.status(204).end();
    });
  });

  // Delete an example by id
  app.delete("/api/new/:id", function (req, res) {
    db.NewUser.destroy({ where: { id: req.params.id } }).then(function (dbNewUser) {
      res.json(dbNewUser);
    });
  });

  // app.get("/api/new", function (req, res) {
  //   var user = req.body;

  //   NewUser.create({
  //     uname: user.uname,
  //     email: user.email,
  //     pass: user.pass
  //   });

  // });
};

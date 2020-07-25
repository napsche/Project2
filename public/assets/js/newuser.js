var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

$("#infosubmit").on("click", function (event) {
    event.preventDefault();
  
    var newUser = {
        uname: $("#inputuser").val().trim(),
        email: $("#inputemail").val().trim(),
        pass: $("#inputpassword").val().trim()
        // uname: Sequelize.STRING,
        // email: Sequelize.STRING,
        // pass: Sequelize.STRING
    };
    
    console.log(newUser);

    $.post("/api/new", newUser)
        .then(function (data) {
            console.log(newUser);
            alert("Adding User");
        });
  
    $("#inputuser").val("");
    $("#inputemail").val("");
    $("#inputpassword").val("");
    $('#signupModal').modal('hide');
  });
//   newUser.sync();

//   module.exports = newUser; 
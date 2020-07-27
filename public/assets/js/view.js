$("#infosubmit").on("click", function (event) {
    event.preventDefault();
  
    var newUser = {
        uname: $("#inputuser").val().trim(),
        email: $("#inputemail").val().trim(),
        pass: $("#inputpassword").val().trim()
    };
  
    $.post("/api/user", newUser)
        .then(function (data) {
            $("#inputuser").text(data.uname);
            $("#inputemail").text(data.email);
            $("#inputpassword").text(data.pass);
            console.log(newUser);
            alert("Adding User");
        });
  
    $("#inputuser").val("");
    $("#inputemail").val("");
    $("#inputpassword").val("");
  
    $('#signupModal').modal('hide');
  });
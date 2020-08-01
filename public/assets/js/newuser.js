$("#infosubmit").on("click", function (event) {
    event.preventDefault();
  
    var newUser = {
        uname: $("#inputuser").val().trim(),
        email: $("#inputemail").val().trim(),
        pass: $("#inputpassword").val().trim()
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

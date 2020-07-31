$("#loginSubmitBtn").on("click", function (event) {
    event.preventDefault();
    console.log("now this is running.");
    var userData = {
        email: $("#useremail").val().trim(),
        pass: $("#userpassword").val().trim()
    }
    console.log(userData);
    if (!userData.email || !userData.pass) {
        return;
    }
    $.post("/api/login/", {
        email: userData.email,
        pass: userData.pass
    })
        .then(function () {
            console.log(pass, email); 
            $('loginModal').modal('hide');
        })
        .fail(function (err) {
            console.log(err);
        });
    $("#useremail").val("");
    $("#userpassword").val("");
});

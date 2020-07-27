$("#loginsubmit").on("click", function (event) {
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

    $.post("/api/login", {
        email: email,
        pass: pass
    })
        .then(function () {
            window.location.replace("/index");
            alert("Welcome " + userData)
        })
        .catch(function (err) {
            console.log(err);
        });
    
    $("#useremail").val("");
    $("#userpassword").val("");
    $('loginModal').modal('hide');

});

    
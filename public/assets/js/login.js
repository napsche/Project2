//has to link to login modal
//needs logic to loop through users for matching credentials.

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
            $('loginModal').modal('hide');

            alert("Welcome " + userData)
        })
        .catch(function (err) {
            console.log(err);
        });
    $("#useremail").val("");
    $("#userpassword").val("");
});
    
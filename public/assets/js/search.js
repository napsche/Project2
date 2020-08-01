console.log(window.location.search);
var pf = new petfinder.Client({
  apiKey: "Vp4aC63WH2jN1Y2Rz1KNiyDDUeFCYR9IWc0WUsk7IDqO23N0PF",
  secret: "ImWvGTeVwcchWGAuI9Cumt06OSznXlL7uPoX65j9"
});

// this works and posts results to the db
function postFxn() {
  event.preventDefault();
  var pet = $("#pet").val();
  var location = $("#location").val();
  var gender = $("#gender").val();
  var age = $("#age").val();

  $.post("/api/search", { pet, location, gender, age }, function (response) {
    event.preventDefault();
    console.log(response);
    response = JSON.stringify(response);
    localStorage.setItem("animal", response);
    // window.location.replace("/");
    console.log("alllll the way here");
  });
}

function submitSearch(newSearch) {
  console.log("making it!");
  event.preventDefault();

  pf.animal.search(newSearch).then(function (response) {
    event.preventDefault();
    console.log("you're inside!");
    postFxn();
  });
}

$("#search-form").on("submit", function (event) {
  event.preventDefault();
  console.log("here!!");
  var x = document.getElementById("petTable");
  x.style.display = "block";

  var newSearch = {
    type: $("#pet").val().trim(),
    location: $("#location").val().trim(),
    gender: $("#gender").val(),
    age: $("#age").val(),
    limit: 10
  };

  pf.animal.search(newSearch)
    .then(function (response) {
      event.preventDefault();
      // Do something with `response.data.animals`
      console.log(response);
      $("#search").remove();
      console.log(response.data.animals[0]);

      // Beginning of code to display results

      for (i = 0; i < 10; i++) {
        var petName = response.data.animals[i].name;
        console.log("----------------------");
        console.log(petName)
        var petPicture = response.data.animals[i].primary_photo_cropped.small;
        console.log(petPicture)
        var petSize = response.data.animals[i].size;
        var petDescription = response.data.animals[i].description;
        var petLink = response.data.animals[i].url;
        
        $('body').on('click', '.btn-pet', function () {
          var link = $(this).data('pet-url');
          window.location.href = link;
        });
        var linkBtn = $("<button>");
        linkBtn.text(petName[i]);
        linkBtn.addClass("btn-pet");
        linkBtn.data('pet-url', petLink[i]);

        $("#tBody").append("<tr><td>" + petName + "</td>" + "<td>" + "<img src='" + petPicture + "' class='img-fluid img-thumbnail'>" + "</td>" + "<td>" + petSize + "</td>" + "</td>" + "<td>" + petDescription + "</td>" + "</td>" + "<td>" + linkBtn + "</td>" + "</tr>")
      }


      
      // var results = JSON.stringify(response);
      // $("#search-container").append("<p>" + results + "</p>");

    })
    .catch(function (error) {
      // Handle the error
      console.log(error);
    });
  console.log("here!!");
  submitSearch();
});
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
     
      // for (var i = 0; i < .length; i++) {
      //   console.log(response.results[i].animal.type);
      //   console.log(response.results[i].animal.contact.location);
      //   console.log(response.results[i].animal.gender);
      //   console.log(response.results[i].animal.age);
      //   console.log("even further");
  
      //   animalDiv = $("#search-container");
  
      //   var type = response.results[i].animal.type;
      //   var pOne = $("<h4>").text(type);
      //   animalDiv.append(pOne);
  
      //   var location = response.results[i].animal.contact.location;
      //   var pTwo = $("<h4>").text(location);
      //   animalDiv.append(pTwo);
  
      //   var gender = response.results[i].animal.gender;
      //   var pThree = $("<h4>").text(gender);
      //   animalDiv.append(pThree);
  
      //   var age = response.results[i].animal.age;
      //   var pFour = $("<h4>").text(age);
      //   animalDiv.append(pFour);
  
      //   $("#search-container").prepend(animalDiv);
      // }
    });
  }
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    console.log("here!!");
  
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

       for (i=0; i < 10; i++) {
        var petName = response.data.animals[i].name;
        console.log("----------------------");
        console.log(petName)
        var petPicture = response.data.animals[i].primary_photo_cropped.small;
        console.log(petPicture)
        var petSize = response.data.animals[i].size;
        var petStatus = response.data.animals[i].status;
        var petUpdated = response.data.animals[i].status_changed_at;
        
        $("#tBody").append("<tr><td>"+petName+"</td>"+"<td>"+"<img src='"+petPicture+"' class='img-fluid img-thumbnail'>"+"</td>"+"<td>"+petSize+"</td>"+"</td>"+"<td>"+petStatus+"</td>"+"</td>"+"<td>"+petUpdated+"</td>"+"</tr>")
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
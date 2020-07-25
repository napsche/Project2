//Logic to display the search results in 
console.log(window.location.search);
var pf = new petfinder.Client({
    apiKey: "Vp4aC63WH2jN1Y2Rz1KNiyDDUeFCYR9IWc0WUsk7IDqO23N0PF",
    secret: "ImWvGTeVwcchWGAuI9Cumt06OSznXlL7uPoX65j9"
  });
  
  pf.animal.search().then(function(response) {
    console.log(response.results[i].animal.type);
    console.log(response.results[i].animal.contact.location);
    console.log(response.results[i].animal.gender);
    console.log(response.results[i].animal.age);
  
    for (var i = 0; i < 10; i++) {
      animalDiv = $("#search-container");
  
      var type = response.results[i].animal.type;
      var pOne = $("<h4>").text(type);
      animalDiv.append(pOne);
  
      var location = response.results[i].animal.contact.location;
      var pTwo = $("<h4>").text(location);
      animalDiv.append(pTwo);
  
      var gender = response.results[i].animal.gender;
      var pThree = $("<h4>").text(gender);
      animalDiv.append(pThree);
  
      var age = response.results[i].animal.age;
      var pFour = $("<h4>").text(age);
      animalDiv.append(pFour);
  
      $("#search-container").prepend(animalDiv);
    }
  });
  
var pf = new petfinder.Client({
    apiKey: "Vp4aC63WH2jN1Y2Rz1KNiyDDUeFCYR9IWc0WUsk7IDqO23N0PF",
    secret: "ImWvGTeVwcchWGAuI9Cumt06OSznXlL7uPoX65j9"
  });

function submitSearch(search) {
    // window.location.href=`/search?q=${search}`;
    console.log(search);
}

$("#go-fetch").on("click", function (event) {
    event.preventDefault();
  
    var newSearch = {
        type: $("#pet").val().trim(),
        location: $("#location").val().trim(),
        gender: $("#gender").val(),
        age: $("#age").val()
    };
  
    pf.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response);
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });
    // $.ajax({
    //     url: queryURL, 
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response); 
    // })
    // post("/api/search", newSearch)
    //     .then(function (data) {
    //         console.log(newSearch);
    //         alert("Searching for your new best friend!");
    //     });
  
    $("#pet").val("");
    $("#location").val("");
    $("#gender").val("");
    $("#age").val("");
  
    $("#search-container").append(function() {

    });
    submitSearch();
  });


// $(function () {
//     $.ajax({
//         url: 'scripts/cats.json',
//         dataType: 'json',
//         type: 'get',
//         cache: false,
//         success: parseJSON
//     });
// });
//end on load
function parseJSON(data) {
    $(data.animals).each(function (index, value) {
        //$("div").append(value.name + " <br>");
        //$("div").append(value.id + " <br>");
        //$("div").append("<a href='https://www.petfinder.com//cat//" + value.name.toLowerCase() + "-" + value.id + "//de//newark//purringpals-rescue-inc-de54'>Click me</a> <br>");
        //$("div").append("<img src='http://dl5zpyw5k3jeb.cloudfront.net//photos//pets//" + value.id + "//1//?bust=1567887690'> <br>");
        //create card template
        var screenpp = ("document", $(document).width());
        var MainCardDiv = $("<div />", {
            //"id": $(this).find("id").text(),
            //$("div").append(value.id + " <br>");
            "id": $(this).find("id").text(),
            "title": "Click here for more info ....",
            "class": "card"
        });
        var subCardBlockDiv = $("<div />", {
            "class": "card-block text-xs-center"
        });
        var subCardBlockQuoteDiv = $("<div />", {
            "class": "card-blockquote"
        });
        var atag = $("<a/>", {
            //$("div").append("<a href='https://www.petfinder.com//cat//" + value.name.toLowerCase() + "-" + value.id + "//de//newark//purringpals-rescue-inc-de54'>Click me</a> <br>");
            //"href": 'http://www.petfinder.com/petdetail/' + $(this).find("id").text(),
            "href": 'https://www.petfinder.com//cat//' + value.name.toLowerCase() + '-' + value.id + '//de//newark//purringpals-rescue-inc-de54',
            "target": "_blank",
            "class": "divlink"
        });
        $('#ppcont').append(MainCardDiv)
        $(MainCardDiv).wrapInner(atag)
        var img = $("<img />", {
            "class": "img-fluid card-img-top ",
            "alt": $(this).find("age").text() + " adoptable cat " + $(this).find("breed").text(),
            //"src": "http://photos.petfinder.com/photos/US/DE/DE54/" + $(this).find("id").text() + "/DE54." + $(this).find("id").text() + "-1-x.jpg"
            //$("div").append("<img src='http://dl5zpyw5k3jeb.cloudfront.net//photos//pets//" + value.id + "//1//?bust=1567887690'> <br>");
            "src": 'http://dl5zpyw5k3jeb.cloudfront.net//photos//pets//' + value.id + '//1//?bust=1567887690'
        });
        $(atag).wrapInner(img)
        $(atag).append(subCardBlockDiv)
        $(subCardBlockDiv).wrapInner(subCardBlockQuoteDiv)
        var cardTitle = $("<h2/>", {
            "class": "card-title"
        }, "<h3/>");
        var pfID = $("<h6/>", {
        }, "<h6/>");
        $(subCardBlockQuoteDiv).wrapInner(cardTitle, pfID)
        //$(cardTitle).wrapInner($(this).find("name").text())
        $(cardTitle).wrapInner(value.name)
        $(cardTitle).append(pfID)
        //$(pfID).wrapInner("(Petfinder ID: " + $(this).find("id").text() + ")")
        //$("div").append(value.id + " <br>");
        $(pfID).wrapInner("(Petfinder ID: " + value.id + ")")
    });

   
}


// curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJWcDRhQzYzV0gyak4xWTJSejFLTml5RERVZUZDWVI5SVdjMFdVc2s3SURxTzIzTjBQRiIsImp0aSI6ImUzZDUxNmEzNmJlOTQ5N2Q2YWNhNDhhMGU1YmIyMTViMjE2NmM5NDY4NTE0NTczZmM3YmMzNzNlNTg2MWQxNzZhZWFhYzI2MzQ0M2JiMDQxIiwiaWF0IjoxNTk1NjA0NDM4LCJuYmYiOjE1OTU2MDQ0MzgsImV4cCI6MTU5NTYwODAzOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.NU2JM2VsEquIBYWpNBkiq4DlEkiz-Z7f08cIMFGLQ2LSoz5cgdHviWORtnm8pbMIDeWWEn26wFgHMtMpB2IQwQxp-g9gGJSrI3Il5z06Nlr78J0awTF-8JE0yq3gSLqL8cxqQZCxvmCWrmxyVyLa3jAcJMmCbuyQABecfRk4KaaxzAomMDvlCtnExjbQluhkgTfyMKFub_S5TAP9CNQy-5fnB_2CkbldfSnzDIo60NDIzoZMnYIwnpt41In4toCW_w_nFsrisDgh8Hso3l-EtOSJSpr-y4dey24CNdbPDRU-mZeq4x7ZqsvWdnMVOSWwER9-4FDdCeHgK9gTXl0kgQ" GET https://www.petfinder.com/search/dogs-for-adoption/us/pa/shavertown/?age%5B0%5D=Young&gender%5B0%5D=female

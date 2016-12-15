$(document).ready(function() {
    $("#tempButton").click(function() {
        let string = $("#accumulate").val()
        let object = {};
        for(let i=0; i<string.length; i++) {
            object[string.charAt(i)] = 0
        }
        for(let i=0; i<string.length; i++) {
            object[string.charAt(i)] += 1
        }
        console.log(object)
        let results = JSON.stringify(object);
        $("#yourResults").append("<p>" + results + "</p>")
    });

    $("#foodPairingButton").click(function() {
        let beerResults = $("#input").val();
        $.ajax({
          url: 'https://punkapi.com/api/v1/beers?food=' + beerResults,
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          headers: {
            'Authorization': 'Basic ' + btoa('03760f10018e4387957fab78ff32e69d:')
          },
          success: function(beers) {
            console.log(beers)
            displayBeers(beers)
      }
    })
    })
    $("#beerSearch").click(function() {
        let beerResults = $("#input").val();
        $.ajax({
          url: 'https://punkapi.com/api/v1/beers?beer_name=' + beerResults,
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          headers: {
            'Authorization': 'Basic ' + btoa('03760f10018e4387957fab78ff32e69d:')
          },
          success: function(beers) {
            console.log(beers)
            displayBeers(beers)
      }
    })
    })
    function displayBeers(object) {
        $("#beerOptions").empty()
        for(let i=0; i<object.length; i++) {
            let beer = object[i]
            $("#beerOptions").append("<p>" + beer.name + "</p>")
        }
    }
});

// Initialize and add the map
 function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 41.876, lng: -87.624}
      });


    map.data.loadGeoJson("https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON");

    map.data.setStyle((feature) => {
        let color = "red";
        //console.log(feature);
        if (feature.getProperty("isColorful")) {
          color = feature.getProperty("color");
        }
        return /** @type {!google.maps.Data.StyleOptions} */ {
          fillColor: calcColor(feature.getProperty('community')),
          strokeColor: calcColor(feature.getProperty('community')),
          strokeWeight: 2,
        };
      });

      // When the user clicks, set 'isColorful', changing the color of the letters.
      map.data.addListener("click", (event) => {
        event.feature.setProperty("isColorful", true);
      });
      // When the user hovers, tempt them to click by outlining the letters.
      // Call revertStyle() to remove all overrides. This will use the style rules
      // defined in the function passed to setStyle()
      map.data.addListener("mouseover", (event) => {
        map.data.revertStyle();
        map.data.overrideStyle(event.feature, { strokeWeight: 8 });
        console.log(event.feature.getProperty("community"))
      });
      map.data.addListener("mouseout", (event) => {
        map.data.revertStyle();
      });


    console.log("got run");
  }

  function calcColor(community){
     const response =  fetch('./tweets.json');
     const json =  JSON.parse(response);
     var sum = 0;
     for(var i = 0; i < json.length; i++){
       if(json.area == community){
         var mult = 0
         if (json.label == "NEGATIVE"){
           mult = -1
         }else{
           mult = 1
         }
         sum+= mult*json.score
       }
     }
     var color = 0
     if(sum >= 0.6){
       color = "#FFD301"
     }else if(sum >= 0.2){
       color = "#ECA508"
     }else if(sum >= -0.2){
       color = "#D9770E"
     }else if(sum >= -0.6){
       color = "#C64915"
     }else{
       color = "#B31B1B"
     }
     return color

  }

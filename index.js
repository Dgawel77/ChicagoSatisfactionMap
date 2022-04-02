// Initialize and add the map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 41.876, lng: -87.624}
      });
    
    map.data.loadGeoJson("https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON");
    
    map.data.setStyle((feature) => {
        let color = "gray";
    
        if (feature.getProperty("isColorful")) {
          color = feature.getProperty("color");
        }
        return /** @type {!google.maps.Data.StyleOptions} */ {
          fillColor: color,
          strokeColor: color,
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
      });
      map.data.addListener("mouseout", (event) => {
        map.data.revertStyle();
      });
    
    console.log("got run");
  }
  
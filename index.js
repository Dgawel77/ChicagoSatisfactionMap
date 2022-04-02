// Initialize and add the map
function initMap() {
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 41.876, lng: -87.624}
      });
    
    map.data.loadGeoJson("https://data.cityofchicago.org/api/geospatial/cauq-8yn6?method=export&format=GeoJSON");

    console.log("got run");
  }
  
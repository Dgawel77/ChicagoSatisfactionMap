// Initialize and add the map
function initMap() {
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 41.876, lng: -87.624}
      });
    
      var ctaLayer = new google.maps.KmlLayer({
        url: './ChicagoBoundaries.kml',
        map: map
      });
    console.log("got run");
  }
  
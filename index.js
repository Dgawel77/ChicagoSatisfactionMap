// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });

    var ctaLayer = new google.maps.KmlLayer({
        url: './ChicagoBoundaries.kml',
        map: map
      });
    console.log("got run");
  }
  
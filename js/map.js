// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 20.61370291193801, lng: -103.30380139109619 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
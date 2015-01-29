$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize);
  $('#go').on('submit', update)
});

var mapOptions = {
  center: { lat: 37.785077, lng: -122.397171},
  zoom: 15,
  // mapTypeId: google.maps.MapTypeId.TERRAIN,
  mapTypeControl: true,
  mapTypeControlOptions: {
    position: google.maps.ControlPosition.TOP_LEFT,
    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
    mapTypeIds: [
      google.maps.MapTypeId.ROADMAP,
      google.maps.MapTypeId.TERRAIN,
      google.maps.MapTypeId.SATELLITE,
    ]
  },
};

function initialize() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
    position: map.center,
    map: map,
    title:"Dev Bootcamp"
  });
}

function update() {
  event.preventDefault();
  debugger;
  var latitude = parseFloat($("#go").find("input[name='latitude']").val())
  var longitude = parseFloat($("#go").find("input[name='longitude']").val())
  var myLatlng = new google.maps.LatLng(latitude,longitude);
  mapOptions.center = myLatlng,
  new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
};

// google.maps.MapTypeId.ROADMAP
// MapTypeId.SATELLITE
// MapTypeId.HYBRID
// MapTypeId.TERRAIN



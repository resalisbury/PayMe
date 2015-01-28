$(document).ready(function() {
  google.maps.event.addDomListener(window, 'load', initialize);
  $('#go').on('submit', update)
});



function initialize() {
  var mapOptions = {
    center: { lat: -34.397, lng: 150.644},
    zoom: 8
  };
  new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  // debugger;
}

function update() {
  event.preventDefault();
  console.log('what up!');
  var latitude = parseFloat($("#go").find("input[name='latitude']").val())
  var longitude = parseFloat($("#go").find("input[name='longitude']").val())

  var mapOptions = {
    center: { lat: latitude, lng: longitude},
    zoom: 8
  };
  new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

};




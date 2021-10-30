function click_titik_lokasi_sekarang() {
  // -7.5216032,112.2381195
  // var hasil = '';
  app.preloader.show();
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
}


var onSuccess = function (position) {
  /*
  mapbox akurasinya
  Longitude: 112.23816647541884
  Latitude: -7.521745450373089, 112.23816647541884

  versi 2
  Longitude: 112.23810750662085
  Latitude: -7.521737897893132, 112.23810750662085

  versi 3
  Longitude: 112.23808713016734
  Latitude: -7.521736166053827, 112.23808713016734
  */
  // rumah sewa elfku -7.521729309735158, 112.23807589137019
  // -7.5216032,112.2381195
  console.log(`ini lokasi sebenarnya -7.521729309735158, 112.23807589137019 \n` + 
    'Latitude: ' + position.coords.latitude + '\n' +
    'Longitude: ' + position.coords.longitude + '\n' +
    'Altitude: ' + position.coords.altitude + '\n' +
    'Accuracy: ' + position.coords.accuracy + '\n' +
    'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
    'Heading: ' + position.coords.heading + '\n' +
    'Speed: ' + position.coords.speed + '\n' +
    'Timestamp: ' + position.timestamp + '\n');
  $('#tl_long_bujur').val(position.coords.longitude);
  $('#tl_lat_lintang').val(position.coords.latitude);
  app.preloader.hide();
};

function onError(error) {
  console.log('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');

  setTimeout(() => {
    alert(`GPS off, Nyalakan untuk accuracy yang lebih pas. Terimakasih ${error.code}`, 'pemberitahuan');
  }, 3000);
}
// Options: throw an error if no update is received every 30 seconds.
function load_titik_coordinat() {
}
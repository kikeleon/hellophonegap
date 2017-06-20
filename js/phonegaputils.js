/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var objPosition;
function get_loc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(coordenadas);
    }else{
        alert('Este navegador es algo antiguo, actualiza para usar el API de localización');                  }
}
function coordenadas(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var map = document.getElementById("mapa");
      map.src = "http://maps.google.com/maps/api/staticmap?center=" + lat + "," 
              + lon + "&amp;zoom=15&amp;size=600x480&amp;markers=color:red|label:A|" + lat + "," + lon + "&amp;sensor=false";
}
function iniciarMapa(){
    if ("geolocation" in navigator){ //check Geolocation available 
        //things to do
    }else{
        alert("pailas conel navegador");
    }
}
function onSuccess(position) {
    //var element = document.getElementById('geolocation');
    objPosition=position;
    coordenadas(position);
    /*element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
     */
    }

        // onError Callback receives a PositionError object
        //
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

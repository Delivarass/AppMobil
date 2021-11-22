window.addEventListener("load", inici, false);

var locations = [];

function inici() {
  
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  // console.log(date);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      lecturaxml(this);
    }
  };
  xhttp.open("GET", "xml/"+ date +"/arxiu"+ date +".xml", true);
  xhttp.send();
}

function lecturaxml(xml) {
  // console.log(xml.res);
  var xmlDoc = xml.responseXML;
  for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
    latitud   = xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
    longitud  = xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
    estat     = xmlDoc.getElementsByTagName("estat")[i].childNodes[0].nodeValue; 
    locations.push(["Location"+i, latitud, longitud, estat]);
    console.log(locations);
  }
  app.init();
}

var app = {
  init: function () {
    navigator.geolocation.getCurrentPosition(app.onSuccess);
  },
  onSuccess: function (position) {
    var map = L.map('zona_mapa').setView([position.coords.latitude, position.coords.longitude], 17);
    mapLink ='<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
      }).addTo(map);
     
     
      // Colors
     var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    for (var i = 0; i < locations.length; i++) {
      if (locations[i][3] == 'No entregat') {
        marker = new L.marker([locations[i][1], locations[i][2]], { icon: redIcon }).bindPopup(locations[i][0]).addTo(map);
      } else {
        marker = new L.marker([locations[i][1], locations[i][2]], { icon: greenIcon }).bindPopup(locations[i][0]).addTo(map);
      }

    }
  }
}


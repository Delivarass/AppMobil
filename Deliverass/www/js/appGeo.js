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
  xhttp.open("GET", "http://192.168.1.20/"+ date +"/arxiu"+ date +".xml", true);
  xhttp.send();
}

function lecturaxml(xml) {
  // console.log(xml.res);
  var xmlDoc = xml.responseXML;
  for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
    latitud   = xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
    longitud  = xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
    id_enviament = xmlDoc.getElementsByTagName("id_enviament")[i].childNodes[0].nodeValue;
    direccio  = xmlDoc.getElementsByTagName("direccio")[i].childNodes[0].nodeValue;  
    dataEnv  = xmlDoc.getElementsByTagName("dataEnv")[i].childNodes[0].nodeValue; 
    estat = xmlDoc.getElementsByTagName("estat")[i].childNodes[0].nodeValue; 
    //imatge = xmlDoc.getElementsByTagName("imatge")[i].childNodes[0].nodeValue; 
    locations.push([i, latitud, longitud, id_enviament, direccio, dataEnv, estat]);
    console.log(locations);
  }
  app.init();
}

var app = {
  init: function () {
    navigator.geolocation.getCurrentPosition(app.onSuccess);
  },
  onSuccess: function (position) {
    var map = L.map('zona_mapa').setView([locations[0][1], locations[0][2]], 17);
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
      if (locations[i][6] == 'No entregat') {
        marker = new L.marker([locations[i][1], locations[i][2]], { icon: greenIcon }).bindPopup("<button id='cameraTakePicture' onclick='cameraTakePicture()'><i class='fas fa-camera'></i>&nbsp;FOTO</button><br><img id='ImatgeCamara' src='" + locations[i][7] + "'></img><br><button id='btnEntregar' onclick='guardarImatge()'><i class='fas fa-check'></i>&nbsp;ENTREGAT</button><br><b>Ref.: </b><span id='referencia'>" + locations[i][3] + "</span><br><b>Direccio: </b>" + locations[i][4]+ "<br><b>Entrega: </b>" + locations[i][5] + "<br><b>Estat: </b>" + locations[i][6]).addTo(map);
      } else {
        marker = new L.marker([locations[i][1], locations[i][2]], { icon: redIcon }).bindPopup("<img id='ImatgeCamara'></img><br><b>Ref.: </b>" + locations[i][3] + "<br><b>Direccio: </b>" + locations[i][4]+ "<br><b>Entrega: </b>" + locations[i][5] + "<br><b>Estat: </b>" + locations[i][6]).addTo(map);
      }
        
    }
  }
}

// document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture); 
   function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      correctOrientation: true,
      destinationType: Camera.DestinationType.DATA_URL 
   });  
    
   function onSuccess(imageData) { 
      var image = document.getElementById('ImatgeCamara'); 
      image.src = "data:image/jpeg;base64," + imageData; 
   }  
    
   function onFail(message) { 
      alert('Failed because: ' + message); 
   } 
}


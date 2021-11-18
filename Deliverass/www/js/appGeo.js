window.addEventListener("ready", inici, false);

function inici() {
  
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  console.log(date);

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
  var xmlDoc = xml.responseXML;
  for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
    latitud = xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
    longitud = xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
  }

}

var app = {
  init: function () {
    navigator.geolocation.getCurrentPosition(app.onSuccess);
  },
  onSuccess: function (position) {

    var map = L.map('zona_mapa').setView([position.coords.latitude, position.coords.longitude], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([latitud, longitud]).addTo(map)
      .bindPopup("<section class='popup'>" +
        "<label for='entrega'>ENTREGA: </label>" +
        "<label for='direccio'>DIRECCIÓ: </label>" +
        "<label for='estat'>ESTAT: </label>" +
        "<label for='pes'>PES: </label>" +

        "<div class='botons'>" +
        "<button id='cancelar'>CANCELAR</button>" +
        "<button id='entrega'>ENTREGA</button>" +
        "</div>" +
        "</section>")
      .openPopup();
  }
}

document.addEventListener("deviceready", app.init(), inici, false);

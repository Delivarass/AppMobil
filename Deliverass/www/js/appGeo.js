var app = {
    init: function () {
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },
    onSuccess: function (position) {
        var map = L.map('zona_mapa').setView([position.coords.latitude, position.coords.longitude], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
            .bindPopup("<section class='popup'>"+
            "<label for='entrega'>ENTREGA: </label>"+
            "<label for='direccio'>DIRECCIÓ: </label>"+
            "<label for='ciutat'>CIUTAT: </label>"+
            "<label for='estat'>ESTAT: </label>"+
            "<label for='pes'>PES: </label>"+
          
            "<div class='botons'>"+
              "<button id='cancelar'>CANCELAR</button>"+
              "<button id='entrega'>ENTREGA</button>"+
            "</div>"+
          "</section>")
            .openPopup();
    }
}

document.addEventListener("deviceready", app.init(), false);
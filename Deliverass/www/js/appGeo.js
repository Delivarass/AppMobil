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
            .bindPopup('Posició actual')
            .openPopup();
    }
}

document.addEventListener("deviceready", app.init(), false);
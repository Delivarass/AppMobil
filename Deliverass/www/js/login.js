//$(document).ready(function () {
    var xml;
    $('#b1').click(function () {
        $.get('xml/repartidors.xml', null, function (data, textStatus) {
            xml = data;
            $(xml).find('repartidor').each(function () {
                var item = $(this);

                if (item.find('id_treballador').text() == $('#id_treballador').val() && item.find('contrasenya').text() == $('#password').val()) {
                    window.open('menu.html');
                    window.localStorage.setItem("id_treballador", document.getElementById("id_treballador").val());
                    window.localStorage.setItem("contrasenya", document.getElementById("contrasenya").val());
                }
            });
        });
    });
//});
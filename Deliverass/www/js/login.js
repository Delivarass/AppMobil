
        $(document).ready(function () {
            alert('testing');
            var xml;
            $('#b1').click(function () {
                $.get('xml/repartidors.xml', null, function (data, textStatus) {
                    xml = data;
                    $(xml).find('repartidor').each(function () {
                        var item = $(this);

                        if (item.find('id_treballador').text() == $('#lname').val() && item.find('contrasenya').text() == $('#password').val()) {
                            window.open('menu.html');
                        }else if(item.find('id_treballador').text() != $('#lname').val() ){
                            alert("Usuari incorrecte!");
                        }else{
                            alert("Contrasenya incorrecta!");
                        }
                    });
                });
            });
        });

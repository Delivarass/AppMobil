window.addEventListener("load", inici, false);

function inici(){

var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {

		    if (this.readyState == 4 && this.status == 200) {
		    	lecturaxml(this);
			}

		};

		xhttp.open("GET", "xml/login.xml", true);
		xhttp.send();

}

function lecturaxml(xml) {

    var xmlDoc = xml.responseXML;

	for (var i = 0; i < xmlDoc.getElementsByTagName("repartidor").length; i++) {


		id_treballador = xmlDoc.getElementsByTagName("id_treballador")[i].childNodes[0].nodeValue;
		contrasenya = xmlDoc.getElementsByTagName("contrasenya")[i].childNodes[0].nodeValue;

		console.log(id_treballador + contrasenya);

    }
									 
}

function compareText() {

    var camp_id_treballador = document.getElementById("id_treballador").value;
    var camp_contrasenya = document.getElementById("contrasenya").value;

		if (camp_id_treballador == usuaris[0] && camp_contrasenya == usuaris[1]) {

			window.location.replace("menu.html");
			
		} else {

			alert("Error");

		}

}

function XML_Login()
{

    var camp_id_treballador = document.getElementById("id_treballador").value;
    var camp_contrasenya = document.getElementById("contrasenya").value;

    // Imposto un'espressione regolare per verificare che
    // i caratteri inseriti nei campi UserID e Password
    // siano alfanumerici, in modo da non dar fastidio all'XML
    var re = /^[a-z0-9]/;

    // Verifico che i campi siano valorizzati (correttamente)
    // if (re.test(camp_id_treballador) == false || re.test(camp_contrasenya) == false)
    // {
    //     alert("Inserire le credenziali di accesso!");
    // }
    // else
    // {
        // Una volta soddisfatte le condizioni...

        // Apro un oggetto XMLDOM
        var login = new ActiveXObject("Microsoft.XMLDOM");

        // Carico il file XML
        login.async = false;
        login.load("login.xml");

        // Recupero i nodi dal file XML
        var id = login.getElementsByTagName("repartidor/id_treballador");
        var password = login.getElementsByTagName("repartidor/contrasenya");

        // Creo un indice per individuare il nodo relativo
        // all'utente che sta effettuando il login
        var indice = u_id - 1;

        // Verifico che l'utente esista e gli concedo o meno l'accesso
        if (id[indice].text == camp_id_treballador && password[indice].text == camp_contrasenya)
        {
            window.location.replace("menu.html");
        }
        else
        {
            alert("Accesso negato!");
        }
    // }
}

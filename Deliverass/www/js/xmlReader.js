window.addEventListener("load", inici, false);

function inici(){

var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		    lecturaxml(this);
		    }
		};
		xhttp.open("GET", "xml/arxiu2021-11-15.xml", true);
		xhttp.send();
}

function lecturaxml(xml) {
		// Aquest codi s'ha d'utilitzar sempre
    var xmlDoc = xml.responseXML;
	for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
	   	// idDest      = xmlDoc.getElementsByTagName("id_destinatari")[i].childNodes[0].nodeValue;
	   	// idTreb      = xmlDoc.getElementsByTagName("id_treballador")[i].childNodes[0].nodeValue;
	   	latitud     = xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
	 	longitud    = xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
    }								 
}
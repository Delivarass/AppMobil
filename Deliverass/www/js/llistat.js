// window.addEventListener("load", inici, false);

// inici();

// // function inici() {
  
// // 	var today = new Date();
// // 	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
// // 	console.log(date);
  
// // 	var xhttp = new XMLHttpRequest();
// // 	xhttp.onreadystatechange = function () {
// // 	  if (this.readyState == 4 && this.status == 200) {
// // 		lecturaxml(this);
// // 	  }
// // 	};
// // 	xhttp.open("GET", "http://192.168.1.20/"+ date +"/arxiu"+ date +".xml", true);
// // 	xhttp.send();
// //   }

// function lecturaxml(xml) {
// 		// Aquest codi s'ha d'utilitzar sempre
//     var xmlDoc = xml.responseXML;
// 	var seccio = document.getElementsByName("entrega");

// 	for (var i = 0; i < xmlDoc.getElementsByTagName("pedido").length; i++) {
// 		id_enviament	= xmlDoc.getElementsByTagName("id_enviament")[i].childNodes[0].nodeValue;
// 		id_destinatari	= xmlDoc.getElementsByTagName("id_destinatari")[i].childNodes[0].nodeValue;
// 		id_treballador	= xmlDoc.getElementsByTagName("id_treballador")[i].childNodes[0].nodeValue;
// 		direccio		= xmlDoc.getElementsByTagName("direccio")[i].childNodes[0].nodeValue;
// 	   	latitud     	= xmlDoc.getElementsByTagName("latitud")[i].childNodes[0].nodeValue;
// 	 	longitud    	= xmlDoc.getElementsByTagName("longitud")[i].childNodes[0].nodeValue;
// 		pes				= xmlDoc.getElementsByTagName("pes")[i].childNodes[0].nodeValue;
// 		cp				= xmlDoc.getElementsByTagName("cp")[i].childNodes[0].nodeValue;
// 		dataEnv			= xmlDoc.getElementsByTagName("dataEnv")[i].childNodes[0].nodeValue;
// 		estat			= xmlDoc.getElementsByTagName("estat")[i].childNodes[0].nodeValue;
// 		// dataEnt			= xmlDoc.getElementsByTagName("dataEnt")[i].childNodes[0].nodeValue;

// 		if (estat == "false") {
// 			status = "<i class='fa-solid fa-box' style='color: red;'></i>";
// 		}else{
// 			status = "<i class='fa-solid fa-box' style='color: green;'></i>";
// 		}
		

// 		seccio[0].innerHTML +="<li>"+
// 								"<h2>ID: "+id_enviament+"</h2>"+
// 								"</br>"+
// 								"<h3>Direcció: "+direccio+"</h3>"+
// 								"</br>"+ 
// 								"<h3>Codi Postal: "+cp+"</h3>"+status +
// 								"</li>";
//     }								 
// }
//document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture); 
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

function guardarImatge() {

   var ref = document.getElementById("referencia").textContent;

   var today = new Date();
   var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
   var arxiu = "xml/" + date + "/arxiu" + date + ".xml";

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
         lecturaxml(this);
      }
   }
   xhttp.open("GET", arxiu, true);
   xhttp.send();

   function lecturaxml(xml) {
      var xmlDoc = xml.responseXML;
      var estatnou = xmlDoc.querySelector("pedido['" + ref + "']/estat").textContent;
      while (estatnou == xmlDoc.getElementsByTagName("pedido").getAttribute) {
         var estat = xmlDoc.getElementsByTagName("estat")[1];
         estat.textContent = "Entregat";
      }
      console.log(estat.nodeValue);
      location.href = "menu.html";
   }

}


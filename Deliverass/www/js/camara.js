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
      guardarImatge();
   }

   function onFail(message) {
      alert('Error: ' + message);
   }

}

function getBase64Image(img) {
   var canvas = document.createElement("canvas");
   canvas.width = img.width;
   canvas.height = img.height;
 
   var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0);
 
   var dataURL = canvas.toDataURL("image/png");
 
   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
 }
 
 function guardarImatge(){
   var parametres2 = document.getElementById("referencia").textContent;
   bannerImage = document.getElementById('ImatgeCamara');
   imgData = getBase64Image(bannerImage);
   localStorage.setItem("img_" + parametres2, imgData);
   console.log(bannerImage);
 }
 
 function carregarImatge(){
   var parametres2 = document.getElementById("referencia").textContent;
   var dataImage = localStorage.getItem("img_" + parametres2);
   bannerImg = document.getElementById('ImatgeCamaraNova');
   bannerImg.src = "data:image/jpeg;base64," + dataImage;
 }



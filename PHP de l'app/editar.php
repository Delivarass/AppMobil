<?php
// Obtenir id i uuid desde el dispositiu mobil
$id = $_POST['id'];
$uuid = $_POST['uuid'];
// Carregar el xml del dia
$deliverass = simplexml_load_file(date("Y-n-j") . '/arxiu' . date("Y-n-j") . '.xml') or die ("Error: No s'ha pogut crear un objecte");
// Per a cada <pedido> buscar el pedido amb el id que enviem
foreach($deliverass->pedido as $parametre){
        // Si el id del pedido coincideix amb el que hem enviat, cambiar l'estat i la data d'entrega
    if ((int)$parametre->attributes()->id == $id) {
        $parametre->estat = "Entregat";
        $parametre->dataEnt = date("Y-m-d");
        $parametre->uuid = $uuid;
        // Desar els cambis
        $deliverass->asXML(date("Y-n-j") . '/arxiu' . date("Y-n-j") . '.xml');
    }
}
?>
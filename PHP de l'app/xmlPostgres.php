<?php
// ACTUALITZAR LES DADES DE LA BASE DE DADES AMB LES ENTREGUES ACTUALITZADES
// conexio amb la base de dades de l'empresa
$db_connection = pg_connect("host=192.168.1.20 dbname=Deliverass user=postgres password=Fat/3232");
// Carregar el xml
$deliverass = simplexml_load_file(date("Y-n-j").'/arxiu'.date("Y-n-j").'.xml') or die("Error: Cannot create object");

// Reccorrer tot el xml i obtenir les dades
foreach ($deliverass->pedido as $parametre) {
    $estat = $parametre->estat;
    $dataEnt = $parametre->dataEnt;
    $uuid = $parametre->uuid;
    $id = $parametre->attributes()->id;
        // Tots els pedidos que tinguin l'estat entregat, actualitzar les dades a la taula de la base de dades
    if ((string)$estat == "Entregat"){
        $result = pg_query($db_connection, "UPDATE paquets SET estat = 'true', data_entrega = '".date("Y-m-d", strtotime($dataEnt))."', uuid = '".$uuid."' WHERE id_enviament = '".$id."'");    
    }
}
?>

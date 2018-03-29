<?php
require("fungsi.php");

$sqlakun = "SELECT login FROM akun";
$akun = fetchsql($sqlakun);


/* JSON */
$respon =  new stdClass();

for($i=0;$i<sizeof($akun);$i++){
    $respon->akunnama[$i]=array($akun[$i]['0']);//ambil yang perlu saja
}

echo json_encode($respon);
/* JSON */
?>

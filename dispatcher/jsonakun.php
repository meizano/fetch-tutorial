<?php
require("fungsi.php");

$sqlakun = "SELECT ID, login, password FROM akun";
$akun = fetchsql($sqlakun);


/* JSON */
$respon =  new stdClass();

for($i=0;$i<sizeof($akun);$i++){
    $respon->akun[$i]=array($akun[$i]['0'],$akun[$i]['1'],$akun[$i]['2']);//ambil yang perlu saja
}

echo json_encode($respon); // menampilkan data yang disusun ulang
//echo json_encode($akun); // menampilkan data sesuai dengan yang diterima dari database
/* JSON */
?>

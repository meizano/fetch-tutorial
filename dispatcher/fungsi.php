<?php
function fetchsql($sql){//Mengambil data dari db
    require("koneksidb.php");
    $query = mysqli_query($con,"$sql");
    $i=0;
    $list=NULL;
    while ($result=mysqli_fetch_array($query)){
        $list[$i]=$result;
        $i++;
    }
    mysqli_close($con);
    return $list;
}
?>

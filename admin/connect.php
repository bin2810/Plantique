<?php
    $drive = "mysql:host:localhost; dbname:db_plantique";
    $username = "root";
    $pass = "";

    $conn = new PDO($drive,$username,$pass);

    try {
        $conn -> setAttribute(PDO::ATTR_ERRMODE,value: PDO::ERRMODE_EXCEPTION);
        echo"ket noi thanh cong";
    } catch (PDOException $e) {
        echo"loi ket noi".$e -> getMessage();
    }

    $conn = null;
?>
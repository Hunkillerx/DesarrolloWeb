<?php

    session_start();
    $_SESSION['autenticado'] = $_GET['nombre'] == 'jose';
    if($_SESSION['autenticado']== false) || !(isset($_SESSION['autenticado'])){
        header{'Location: index.php'}
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    Bienvenido Acceso concedido
</body>
</html>

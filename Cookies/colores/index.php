<?php
    if(isset($_COOKIE['color'])){
        $color = $_COOKIE['color'];
    }else{
        $color = 'blanco';
    }

    if(isset($_POST['color'])){
        setcookie('color',$_POST['color']);
        header("Refresh:0");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Selecciona Color</title>
    <link rel="stylesheet" href="CSS/<?php echo $color; ?>.css">
</head>
<body>
    <h2>Escoje un color</h2>
    <form action="index.php" method="post">
    <select name="color" id="color">
        <option value="blanco">blanco</option>
        <option value="negro">negro</option>
        <option value="azul">azul</option>
        <input type="submit" value="Cambiar">
    </select>
    </form>
</body>
</html>

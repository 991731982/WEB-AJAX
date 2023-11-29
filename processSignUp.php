<?php

$email = $_POST["email"];
$password = $_POST["password"];


$dsn = "mysql:host=localhost;dbname=ajax;charset=utf8mb4";

$dbusername = "root";  
$dbpassword = "";

$pdo = new PDO($dsn, $dbusername, $dbpassword);
$stmt = $pdo->prepare("INSERT INTO `Signup` 
	(`id`, `email`, `password`) 
	VALUES 
	(NULL,  '$email', '$password');");
    
if($stmt->execute()){ 
	echo('{ "success":"true" }');
}else{ 
	echo('{ "success":"false" }');
}
?>
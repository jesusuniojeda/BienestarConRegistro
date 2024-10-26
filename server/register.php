<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');
require "conn.php";

// Obtener datos del POST
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['telefono'] ?? '';  // Cambia `telefono` a `phone`
$password = password_hash($_POST['password'] ?? '', PASSWORD_BCRYPT);

if (empty($name) || empty($email) || empty($phone) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Faltan datos del formulario"]);
    exit();
}

// Insertar datos en la base de datos
$sql = "INSERT INTO users (name, email, phone, password) VALUES ('$name', '$email', '$phone', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Registro exitoso"]);
} else {
    echo json_encode(["success" => false, "message" => "Error en la base de datos: " . $conn->error]);
}

$conn->close();
?>

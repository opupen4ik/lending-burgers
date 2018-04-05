<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Сообщение от пользователя: $name";
$result = mail('opupen4ik@gmail.com', 'Как твои дела', $message);


echo json_encode(array(
  'status' => $result
  // 'status' => false
));

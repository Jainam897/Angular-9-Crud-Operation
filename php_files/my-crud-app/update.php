<?php

require 'connection.php';
$id = $_GET['id'];


$sql="SELECT * FROM user_table WHERE id=$id LIMIT 1";

$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);

echo $json=json_encode($row);




?>
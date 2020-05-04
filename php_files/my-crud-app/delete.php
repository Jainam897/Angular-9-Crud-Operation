<?php

require 'connection.php';
$id=$_GET['id'];

$sql="DELETE FROM user_table WHERE id=$id LIMIT 1";

if(mysqli_query($conn,$sql)){
	http_response_code(204);
}

else{
	return http_response_code(422);
}


?>
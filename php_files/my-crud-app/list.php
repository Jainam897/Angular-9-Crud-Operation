<?php

require 'connection.php';

$students = [];
$sql="SELECT * FROM user_table";


if($result =mysqli_query($conn,$sql)){
	$cr=0;

while ($row=mysqli_fetch_assoc($result)) {

	$students[$cr]['id']= $row['id'];
	$students[$cr]['fname']= $row['fname'];
	$students[$cr]['lname']= $row['lname'];
	$students[$cr]['gmail']= $row['gmail'];
	$cr++;

}

echo json_encode($students);

}
else{
	http_response_code(404);
}

?>
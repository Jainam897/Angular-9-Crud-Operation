<?php


require 'connection.php';
// $fname=$_POST['fname'];
// $lname=$_POST['lname'];
// $gmail=$_POST['gmail'];

$postdata=file_get_contents("php://input");


if(isset($postdata) && ! empty($postdata)){
	$request = json_decode ($postdata);

	$id=mysqli_real_escape_string($conn,(int)$_GET['id']);
	$fname=mysqli_real_escape_string($conn,trim($request->fname));
	$lname=mysqli_real_escape_string($conn,trim($request->lname));
	$gmail=mysqli_real_escape_string($conn,$request->gmail);

	$sql="UPDATE `user_table` SET `fname`='{$fname}',`lname`='{$lname}',`gmail`='{$gmail}' WHERE `id`='{$id}' LIMIT 1";
	if(mysqli_query($conn,$sql)){
		http_response_code(204);
		echo "updated";
	}

	else{
		http_response_code(422);
		echo "not updated";
	}

}
?>
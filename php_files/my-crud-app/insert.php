<?php


require 'connection.php';
// $fname=$_POST['fname'];
// $lname=$_POST['lname'];
// $gmail=$_POST['gmail'];

$postdata=file_get_contents("php://input");


if(isset($postdata) && ! empty($postdata)){
	$request = json_decode ($postdata);


	$fname=mysqli_real_escape_string($conn,trim($request->fname));
	$lname=mysqli_real_escape_string($conn,trim($request->lname));
	$gmail=mysqli_real_escape_string($conn,$request->gmail);

	$sql="INSERT INTO `user_table` (`fname`,`lname`,`gmail`) VALUES ('{$fname}','{$lname}','{$gmail}')";
	if(mysqli_query($conn,$sql)){
		http_response_code(201);
		echo "added";
	}

	else{
		http_response_code(422);
		echo "not added";
	}

// $sql = "INSERT INTO user_table (fname, lname, gmail)
// VALUES ('$fname', '$lname', '$gmail')";

// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $conn->close();



}

?>
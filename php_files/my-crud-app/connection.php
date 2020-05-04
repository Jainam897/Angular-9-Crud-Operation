<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'mycrud_db');


function connect()
{
	$conn=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
	if(mysqli_connect_error($conn)){
		die("Failed to connect: " .mysqli_connect_error);
	}

	
	mysqli_set_charset($conn,"utf-8");
	return $conn;
}

$conn=connect();








?>
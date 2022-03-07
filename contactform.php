<?php
	
	$name = $_POST['name'];
	$visitor_phone = $_POST['phone'];
	$message = $_POST['message'];

	$email_from = 'jaburockz@gmail.com';
	$email_subject = 'New enquiry';

	$email_body = "User name: $name.\n".
					"User Phone: $visitor_phone.\n".
						"User message: $message.\n";

$to = "info@yotreat.in";

$headers = " From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");

?>
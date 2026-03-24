<?php
    if(isset($_POST['submit']))
    {
        
        $email= $_POST['email'];
        $pass = $_POST['pass'];
        
        
        $host = 'localhost';
        $user = 'root';
        $pass = '';
        $dbname = 'car1';
        $conn = mysqli_connect($host,$user,$pass,$dbname);

        
        $sql = "INSERT INTO logpage (email,pass) VALUES ('$email','$pass')";
        $result = mysqli_query($conn,$sql);
        
        if($result)
        {
        function function_alert($message) {
    
			echo "<script>alert('$message');</script>";
		}
		

		function_alert("Login have been Successfully");
       }
        else
        {
            die(mysqli_error($con));
        }
        
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
		<title> login form</title>
<link rel="stylesheet" href="login2.css">
	<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
	
</head>
<body>
<div class="container">
	<h1 class="label">Login</h1>
	<form class="login_form" method="post" name="form" onsubmit="return validated()">
		<div class="font">Email or Phone</div>
		<input autocomplete="off" type="text" name="email">
		<div id="email_error">Please fill up your Email or Phone</div>
		<div class="font font2">Password</div>
		<input type="password" name="pass">
		<div id="pass_error">Please fill up your Password</div>
		<button type="submit" name="submit">Login</button>
	</form>
</div>
		<div class="popup" id="popup">
			<ion-icon name="checkmark-circle-outline"></ion-icon>
			<h2>Thank You!</h2>
			<p>Your were Registration Successfully. Thanks!</p>
			<a href="parking.html"><button onclick="CloseSlide()">OK</button></a>
		</div>
<script src="login.js"></script>			
</body>	 
</html>	
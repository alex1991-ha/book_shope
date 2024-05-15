
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (12, 'Эрих Мария Ремарк \"Триумфальная арка\"', '19.93', 
				'img/imege korzina/klassika/Ремарк_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch(Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	
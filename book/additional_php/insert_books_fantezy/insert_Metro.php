
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (16, 'Дмитрий Глуховский \"Метро 2033\"', '32.63', 
				'img/imege korzina/fantastika/Metro2033_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch(Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	
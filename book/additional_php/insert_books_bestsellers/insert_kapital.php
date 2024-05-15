
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (3, 'Карл Маркс \"Капитал\"', '10.64', 
				'img/imege korzina/Bescelers/Капитал_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch (Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	
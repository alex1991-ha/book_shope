
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (7, 'Іван Мележ\"Людзi на балоце\"', '18.98', 
				'img/imege korzina/Bellit/Людзi_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch(Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	
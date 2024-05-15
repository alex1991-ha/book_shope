
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (18, 'Аркадий Стругацкий, Борис Стругацкий \"Пикник на обочине\"', '11.38', 
				'img/imege korzina/fantastika/Piknik_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch(Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	
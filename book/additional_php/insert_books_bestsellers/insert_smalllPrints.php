
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (2, 'Антуан де Сент-Экзюпери \"Маленький принц\"', '9.01', 
				'img/imege korzina/Bescelers/Маленький принц_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch (Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	

<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (1, 'Стивен Хокинг \"Краткие ответы на большие вопросы\"', '19.65', 
				'img/imege korzina/Bescelers/Хокинг_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch (Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>

	
	
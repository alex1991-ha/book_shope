
<?php      
	include ('../connect_db.php');

	try {
	$sql = "INSERT INTO price
				VALUES (8, 'Уладзімір Караткевіч  \"Дзікае паляванне караля Стаха. Цыганскі кароль\"', '33.90', 
				'img/imege korzina/Bellit/Паляванне_mini.jpg')";
	$db->query($sql);
	echo '<script>window.close()</script>;';
	}
	catch(Exception $e) {
		echo '<script>window.close()</script>;';
	}
	?>
	<script>window.close()</script>;
	